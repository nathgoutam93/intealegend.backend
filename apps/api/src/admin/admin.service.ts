import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@intealegend/database';
import { PRISMA_TOKEN } from 'src/database/constants';
import { generateUniqueIdentifier } from 'src/utils/identifier';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AdminService {
  constructor(
    @Inject(PRISMA_TOKEN) private db: PrismaClient,
    private mailService: MailService,
  ) {}

  async getProfile(userId: string) {
    const profile = await this.db.adminProfile.findUnique({
      where: { userId: Number(userId) },
      include: { user: true },
    });

    if (!profile) {
      throw new NotFoundException('Admin profile not found');
    }

    return profile;
  }

  async createProfile({
    fullName,
    userId,
  }: {
    fullName: string;
    userId: number;
  }) {
    const profile = await this.db.adminProfile.create({
      data: { fullName, userId },
      include: { user: true },
    });

    return profile;
  }

  async getStats() {
    const [totalUsers, totalSellers, totalBuyers, totalPendingVerifications] =
      await Promise.all([
        this.db.user.count(),
        this.db.user.count({ where: { role: 'SELLER', verified: true } }),
        this.db.user.count({ where: { role: 'BUYER', verified: true } }),
        this.db.user.count({ where: { verified: false } }),
      ]);

    return {
      totalUsers,
      totalSellers,
      totalBuyers,
      totalPendingVerifications,
    };
  }

  async listVerifiedUsers({
    role,
    limit,
    offset,
  }: {
    role: 'SELLER' | 'BUYER';
    limit: number;
    offset: number;
  }) {
    const where = { verified: true, role };

    // Only fetch users that have their respective profiles to avoid null
    const [users, total] = await Promise.all([
      this.db.user.findMany({
        where: {
          ...where,
          ...(role === 'SELLER'
            ? { sellerProfile: { isNot: null } }
            : { buyerProfile: { isNot: null } }),
        },
        select: {
          id: true,
          email: true,
          role: true,
          verified: true,
          createdAt: true,
          uniqueIdentifier: true,
          updatedAt: true,
          sellerProfile:
            role === 'SELLER'
              ? {
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
                }
              : false,
          buyerProfile:
            role === 'BUYER'
              ? {
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
                }
              : false,
        },
        take: limit,
        skip: offset,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.db.user.count({
        where: {
          ...where,
          ...(role === 'SELLER'
            ? { sellerProfile: { isNot: null } }
            : { buyerProfile: { isNot: null } }),
        },
      }),
    ]);

    return {
      data: {
        role,
        users: users.map((user) => ({
          ...user,
          profile:
            role === 'SELLER'
              ? user.sellerProfile! // Safe to use ! because we filtered null profiles
              : user.buyerProfile!, // Safe to use ! because we filtered null profiles
          sellerProfile: undefined,
          buyerProfile: undefined,
        })),
      },
      total,
      limit,
      offset,
    };
  }

  async listPendingVerifications({
    role,
    limit,
    offset,
  }: {
    role?: 'SELLER' | 'BUYER';
    limit: number;
    offset: number;
  }) {
    const where = { verified: false, role };

    const [users, total] = await Promise.all([
      this.db.user.findMany({
        where,
        select: {
          id: true,
          email: true,
          role: true,
          verified: true,
          createdAt: true,
          sellerProfile:
            role === 'SELLER'
              ? {
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
                }
              : false,
          buyerProfile:
            role === 'BUYER'
              ? {
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
                }
              : false,
        },
        take: limit,
        skip: offset,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      this.db.user.count({ where }),
    ]);

    return {
      data: {
        role,
        users: users.map((user) => ({
          ...user,
          profile: role === 'SELLER' ? user.sellerProfile : user.buyerProfile,
          sellerProfile: undefined,
          buyerProfile: undefined,
          createdAt: user.createdAt.toISOString(),
        })),
      },
      total,
      limit,
      offset,
    };
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
