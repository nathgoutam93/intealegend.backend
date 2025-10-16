import { PrismaClient } from '@intealegend/database';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PRISMA_TOKEN } from 'src/database/constants';

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @Inject(PRISMA_TOKEN) private db: PrismaClient,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });

      const user = await this.db.user.findFirst({
        where: {
          id: payload.sub,
        },
        select: {
          id: true,
          role: true,
          sellerProfile: {
            select: {
              id: true,
            },
          },
          buyerProfile: {
            select: {
              id: true,
            },
          },
          adminProfile: {
            select: {
              id: true,
            },
          },
          staffProfile: {
            select: {
              id: true,
            },
          },
        },
      });

      console.log('user', user);

      request['user'] = user;
    } catch (e) {
      throw new UnauthorizedException(e.message);
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
