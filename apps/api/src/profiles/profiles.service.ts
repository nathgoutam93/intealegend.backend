import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@intealegend/database';
import { PRISMA_TOKEN } from 'src/database/constants';

@Injectable()
export class ProfilesService {
  constructor(@Inject(PRISMA_TOKEN) private prisma: PrismaClient) {}

  async getAdminProfile(userId: number) {
    return this.prisma.adminProfile.findUnique({
      where: { userId },
    });
  }

  async createAdminProfile(data: { userId: number; fullName: string }) {
    return this.prisma.adminProfile.create({
      data,
    });
  }

  async getSellerProfile(userId: number) {
    return this.prisma.sellerProfile.findUnique({
      where: { userId },
    });
  }

  async createSellerProfile(data: any) {
    return this.prisma.sellerProfile.create({
      data,
    });
  }
}
