import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PRISMA_TOKEN } from 'src/database/constants';
import { PrismaClient, UserRole } from '@intealegend/database';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PRISMA_TOKEN) private db: PrismaClient,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(identifier: string, password: string) {
    // Try to find user by uniqueIdentifier first
    let user = await this.db.user.findUnique({
      where: { uniqueIdentifier: identifier },
      include: {
        adminProfile: true,
        staffProfile: true,
        sellerProfile: true,
        buyerProfile: true,
      },
    });

    // If not found, try email
    if (!user) {
      user = await this.db.user.findUnique({
        where: { email: identifier },
        include: {
          adminProfile: true,
          staffProfile: true,
          sellerProfile: true,
          buyerProfile: true,
        },
      });
    }

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // For unverified users, only allow login with email
    if (!user.verified && identifier !== user.email) {
      throw new UnauthorizedException('Account not verified');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async login(identifier: string, password: string) {
    const user = await this.validateUser(identifier, password);
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      uniqueIdentifier: user.uniqueIdentifier,
    };

    return {
      accessToken: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
      }),
      user,
    };
  }

  async register(data: {
    email: string;
    password: string;
    role: 'SELLER' | 'BUYER';
    profile: any;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.db.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: data.email,
          password: hashedPassword,
          role: data.role,
        },
      });

      if (data.role === 'SELLER') {
        await tx.sellerProfile.create({
          data: {
            ...data.profile,
            userId: user.id,
          },
        });
      } else {
        await tx.buyerProfile.create({
          data: {
            ...data.profile,
            userId: user.id,
          },
        });
      }

      return user;
    });
  }

  private async generateTokens(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      accessToken: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: '1d',
      }),
    };
  }

  async adminLogin(email: string, password: string) {
    const user = await this.validateUser(email, password);

    // Check if user has admin or staff profile
    if (!user.adminProfile && !user.staffProfile) {
      throw new UnauthorizedException('Unauthorized access. Admin only.');
    }

    const tokens = await this.generateTokens(user);

    return {
      user: {
        ...user,
        role: user.adminProfile ? UserRole.ADMIN : UserRole.STAFF,
        profile: user.adminProfile || user.staffProfile,
      },
      ...tokens,
    };
  }
}
