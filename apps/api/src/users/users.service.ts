import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_TOKEN } from '../database/constants';
import { PrismaClient, User, Prisma, UserRole } from '@intealegend/database';
import { generateUniqueIdentifier } from '../utils/identifier';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PRISMA_TOKEN) private db: PrismaClient,
    private mailService: MailService,
  ) {}

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

  async getPendingRegistrations() {
    return this.db.user
      .findMany({
        where: {
          verified: false,
          OR: [{ role: 'SELLER' }, { role: 'BUYER' }],
        },
        select: {
          id: true,
          email: true,
          role: true,
          verified: true,
          createdAt: true,
          sellerProfile: {
            select: {
              businessName: true,
              businessType: true,
              address: true,
              state: true,
              pincode: true,
              phone: true,
              gstNumber: true,
              panNumber: true,
              tmcoNumber: true,
              cancelledCheque: true,
              transportName: true,
              brandName: true,
              brandLogo: true,
              brandCertificate: true,
              bankAccountNumber: true,
              bankIfscCode: true,
            },
          },
          buyerProfile: {
            select: {
              businessName: true,
              businessType: true,
              address: true,
              state: true,
              pincode: true,
              phone: true,
              gstNumber: true,
              panNumber: true,
              bankAccountNumber: true,
              bankIfscCode: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      })
      .then((users) =>
        users.map((user) => ({
          ...user,
          profile:
            user.role === 'SELLER'
              ? { role: 'SELLER', ...user.sellerProfile }
              : { role: 'BUYER', ...user.buyerProfile },
          sellerProfile: undefined,
          buyerProfile: undefined,
          createdAt: user.createdAt.toISOString(),
        })),
      );
  }

  async verifyRegistrations(userIds: number[]) {
    const verifiedUsers = await Promise.all(
      userIds.map(async (userId) => {
        const uniqueIdentifier = await generateUniqueIdentifier();

        const user = await this.db.user.update({
          where: { id: userId },
          data: {
            verified: true,
            uniqueIdentifier,
          },
          include: {
            sellerProfile: true,
            buyerProfile: true,
          },
        });

        // Fire and forget email sending
        this.mailService
          .sendVerificationComplete(user.email, uniqueIdentifier)
          .catch((e) => console.error('Error sending verification email:', e));

        return user;
      }),
    );

    return {
      message: 'Users verified successfully',
      verifiedUsers: verifiedUsers.length,
    };
  }
}
