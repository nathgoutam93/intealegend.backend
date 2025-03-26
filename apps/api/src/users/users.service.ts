import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_TOKEN } from '../database/constants';
import { PrismaClient, User, Prisma, UserRole } from '@intealegend/database';

@Injectable()
export class UsersService {
  constructor(@Inject(PRISMA_TOKEN) private db: PrismaClient) {}

  async findAll(params?: {
    limit?: number;
    offset?: number;
    email?: string;
    role?: UserRole;
    verified?: boolean;
  }) {
    const { limit = 10, offset = 0, email, role, verified } = params || {};

    const where = {
      ...(email && { email }),
      ...(role && { role }),
      ...(verified !== undefined && { verified }),
    };

    const [data, total] = await Promise.all([
      this.db.user.findMany({
        where,
        take: limit,
        skip: offset,
        include: {
          adminProfile: true,
          staffProfile: true,
          sellerProfile: true,
          buyerProfile: true,
        },
      }),
      this.db.user.count({ where }),
    ]);

    return { data, total, limit, offset };
  }

  async findOne(id: number) {
    const user = await this.db.user.findUnique({
      where: { id },
      include: {
        adminProfile: true,
        staffProfile: true,
        sellerProfile: true,
        buyerProfile: true,
      },
    });

    return user;
  }

  async create(data: { email: string; password: string; role: UserRole }) {
    return this.db.user.create({
      data: {
        email: data.email,
        password: data.password, // Note: Ensure password is hashed before saving
        role: data.role,
      },
    });
  }

  async update(
    id: number,
    updateData: {
      email?: string;
      password?: string;
      role?: UserRole;
      verified?: boolean;
      uniqueIdentifier?: string;
    },
  ) {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    return this.db.user.update({
      where: { id },
      data: updateData,
      include: {
        adminProfile: true,
        staffProfile: true,
        sellerProfile: true,
        buyerProfile: true,
      },
    });
  }

  async verify(id: number, uniqueIdentifier: string) {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    return this.db.user.update({
      where: { id },
      data: {
        verified: true,
        uniqueIdentifier,
      },
    });
  }

  async remove(id: number) {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    // Delete associated profile based on user role
    switch (user.role) {
      case UserRole.ADMIN:
        await this.db.adminProfile.delete({ where: { userId: id } });
        break;
      case UserRole.STAFF:
        await this.db.staffProfile.delete({ where: { userId: id } });
        break;
      case UserRole.SELLER:
        await this.db.sellerProfile.delete({ where: { userId: id } });
        break;
      case UserRole.BUYER:
        await this.db.buyerProfile.delete({ where: { userId: id } });
        break;
    }

    await this.db.user.delete({
      where: { id },
    });

    return true;
  }
}
