import { PrismaClient } from '@intealegend/database';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class SellerGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (request.user.role !== 'SELLER') {
      throw new UnauthorizedException();
    }

    request['seller'] = request.user.sellerProfile;

    return true;
  }
}
