import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, Prisma } from '@intealegend/database';
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
    const [
      totalUsers,
      totalSellers,
      totalBuyers,
      pendingUsers,
      totalProducts,
      totalListed,
      pendingProducts,
      totalOrders,
      pendingOrders,
    ] = await Promise.all([
      this.db.user.count(),
      this.db.user.count({ where: { role: 'SELLER', verified: true } }),
      this.db.user.count({ where: { role: 'BUYER', verified: true } }),
      this.db.user.count({ where: { verified: false } }),
      this.db.product.count(),
      this.db.product.count({
        where: {
          isLive: true,
          status: { not: 'REJECTED' },
        },
      }),
      this.db.product.count({
        where: {
          isLive: false,
          status: { not: 'REJECTED' },
        },
      }),
      this.db.order.count({
        where: {
          status: 'DELIVERED',
        },
      }),
      this.db.order.count({
        where: {
          status: 'PENDING',
        },
      }),
    ]);

    return {
      users: {
        total: totalUsers,
        seller: totalSellers,
        buyer: totalBuyers,
        pending: pendingUsers,
      },
      products: {
        total: totalProducts,
        listed: totalListed,
        pending: pendingProducts,
      },
      orders: {
        total: totalOrders,
        pending: pendingOrders,
      },
    };
  }

  async listUsers({
    role,
    verified,
    limit,
    offset,
  }: {
    role: 'SELLER' | 'BUYER';
    verified?: boolean;
    limit: number;
    offset: number;
  }) {
    const where = { verified, role };

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
                  include: {
                    BrandMarks: true,
                  },
                }
              : false,
          buyerProfile: role === 'BUYER',
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

    if (role === 'SELLER') {
      return {
        data: {
          role: 'SELLER' as const,
          users: users.map((user) => ({
            ...user,
            profile: user.sellerProfile!,
            sellerProfile: undefined,
            buyerProfile: undefined,
          })),
        },
        total,
        limit,
        offset,
      };
    } else {
      return {
        data: {
          role: 'BUYER' as const,
          users: users.map((user) => ({
            ...user,
            profile: user.buyerProfile!,
            sellerProfile: undefined,
            buyerProfile: undefined,
          })),
        },
        total,
        limit,
        offset,
      };
    }
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

  async updateProduct(id: number, data: any) {
    const product = await this.db.product.update({
      where: { id },
      data,
      include: {
        brandMark: true,
      },
    });

    return {
      ...product,
      pricePerUnit: product.pricePerUnit.toNumber(),
    };
  }

  async getProduct(id: number) {
    const product = await this.db.product.findUnique({
      where: { id },
      include: {
        brandMark: true,
      },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return {
      ...product,
      pricePerUnit: product.pricePerUnit.toNumber(),
    };
  }

  async getProducts(query: {
    limit?: number;
    offset?: number;
    search?: string;
    sortBy?: 'price' | 'createdAt' | 'name';
    sortOrder?: 'asc' | 'desc';
    status?: 'draft' | 'published';
  }) {
    const { limit = 10, offset = 0, search, sortBy, sortOrder, status } = query;

    const where: Prisma.ProductWhereInput = {
      ...(search && {
        OR: [
          {
            brandMark: {
              name: { contains: search, mode: Prisma.QueryMode.insensitive },
            },
          },
        ],
      }),
      status: { not: 'REJECTED' },
      ...(status && { isLive: status === 'published' }),
    };

    let orderBy = sortBy ? { price: 'pricePerUnit' }[sortBy] : undefined;

    const [products, total] = await this.db.$transaction([
      this.db.product.findMany({
        where,
        orderBy: {
          [orderBy]: sortOrder,
        },
        take: limit,
        skip: offset,
        include: {
          brandMark: true,
        },
      }),
      this.db.product.count({ where }),
    ]);

    return {
      data: products.map((p) => ({
        ...p,
        pricePerUnit: p.pricePerUnit.toNumber(),
      })),
      total,
      limit,
      offset,
    };
  }

  async getOrders({
    limit = 10,
    offset = 0,
    status,
    startDate,
    endDate,
    sortBy = 'createdAt',
    sortOrder = 'desc',
  }: {
    limit?: number;
    offset?: number;
    status?:
      | 'PENDING'
      | 'ACCEPTED'
      | 'DESPATCHED'
      | 'ON_WAY'
      | 'DELIVERED'
      | 'CANCELLED';
    startDate?: string;
    endDate?: string;
    sortBy?: 'createdAt' | 'totalAmount';
    sortOrder?: 'asc' | 'desc';
  }) {
    const where: Prisma.OrderWhereInput = {};

    if (status) {
      where.status = status;
    }

    if (startDate || endDate) {
      where.createdAt = {
        ...(startDate && { gte: new Date(startDate) }),
        ...(endDate && { lte: new Date(endDate) }),
      };
    }

    const [total, orders] = await Promise.all([
      this.db.order.count({ where }),
      this.db.order.findMany({
        where,
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
        },
        orderBy: {
          [sortBy]: sortOrder,
        },
        skip: offset,
        take: limit,
      }),
    ]);

    return {
      data: orders,
      total,
      offset,
      limit,
    };
  }

  async getOrder(orderId: number) {
    const order = await this.db.order.findFirst({
      where: {
        id: orderId,
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
        user: true,
      },
    });

    if (!order) {
      throw new NotFoundException('order not found');
    }

    return {
      ...order,
      orderItems: order.orderItems.map((oi) => ({
        ...oi,
        unitPrice: oi.unitPrice.toNumber(),
        totalPrice: oi.totalPrice.toNumber(),
      })),
      totalAmount: order.totalAmount.toNumber(),
      deliveryCharges: order.deliveryCharges?.toNumber() ?? null,
      gstAmount: order.gstAmount.toNumber(),
      otherCharges: order.otherCharges?.toNumber() ?? null,
      roundOff: order.roundOff?.toNumber() ?? null,
    };
  }

  async updateOrder(
    id: number,
    data: {
      status?:
        | 'PENDING'
        | 'ACCEPTED'
        | 'DESPATCHED'
        | 'ON_WAY'
        | 'DELIVERED'
        | 'CANCELLED';
      deliveryCharges?: number | null;
      otherCharges?: number | null;
      roundOff?: number | null;
    },
  ) {
    const prismaData: Prisma.OrderUpdateInput = {
      status: data.status,
      ...(data.deliveryCharges !== undefined && {
        deliveryCharges: new Prisma.Decimal(data.deliveryCharges || 0),
      }),
      ...(data.otherCharges !== undefined && {
        otherCharges: new Prisma.Decimal(data.otherCharges || 0),
      }),
      ...(data.roundOff !== undefined && {
        roundOff: new Prisma.Decimal(data.roundOff || 0),
      }),
    };

    const order = await this.db.order.update({
      where: { id },
      data: prismaData,
      include: {
        orderItems: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }
}
