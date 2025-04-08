import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OrderStatus, Prisma, PrismaClient } from '@intealegend/database';
import { PRISMA_TOKEN } from 'src/database/constants';

@Injectable()
export class SellerService {
  constructor(@Inject(PRISMA_TOKEN) private db: PrismaClient) {}

  async getSellerProfile(id: number) {
    const profile = await this.db.sellerProfile.findFirst({
      where: {
        userId: id,
      },
      include: { user: true },
    });

    if (!profile) {
      throw new NotFoundException('seller profile not found');
    }

    return profile;
  }

  async updateSellerProfile(id: number, data: any) {
    return this.db.sellerProfile.update({
      where: {
        userId: id,
      },
      data,
    });
  }

  async getStats(id: number) {
    // Implement stats aggregation logic
    const stats = await this.db.$transaction([
      this.db.product.count({
        where: {
          sellerId: id,
        },
      }),
      this.db.orderItem.count({
        where: {
          product: {
            sellerId: id,
          },
        },
      }),
      this.db.orderItem.aggregate({
        where: {
          product: {
            sellerId: id,
          },
        },
        _sum: {
          totalPrice: true,
        },
      }),
    ]);

    return {
      totalProducts: stats[0],
      totalOrders: stats[1],
      totalSales: stats[2]._sum.totalPrice || 0,
    };
  }

  async getProduct(productId: number, sellerId: number) {
    const product = await this.db.product.findFirst({
      where: {
        id: productId,
        sellerId,
      },
    });

    if (!product) {
      throw new NotFoundException('seller profile not found');
    }

    return product;
  }

  async getProducts({
    sellerId,
    limit = 10,
    offset = 0,
    search,
    grade,
    origin,
    sortBy = 'createdAt',
    sortOrder = 'desc',
    minPrice,
    maxPrice,
  }: {
    sellerId: number;
    limit?: number;
    offset?: number;
    search?: string;
    grade?: string;
    origin?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    minPrice?: number;
    maxPrice?: number;
  }) {
    const where: Prisma.ProductWhereInput = {
      sellerId,
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ],
      }),
      ...(grade && { grade }),
      ...(origin && { origin }),
      ...(minPrice && { price: { gte: minPrice } }),
      ...(maxPrice && { price: { lte: maxPrice } }),
    };

    const [products, total] = await this.db.$transaction([
      this.db.product.findMany({
        where,
        orderBy: {
          [sortBy]: sortOrder,
        },
        take: limit,
        skip: offset,
      }),
      this.db.product.count({ where }),
    ]);

    return {
      data: products,
      total,
      limit,
      offset,
    };
  }

  async createProduct(sellerId: number, data: any) {
    return this.db.product.create({
      data: {
        sellerId,
        ...data,
      },
    });
  }

  async updateProduct(productId: number, sellerId: number, data: any) {
    return this.db.product.update({
      where: {
        id: productId,
        sellerId,
      },
      data,
    });
  }

  async getOrders({
    sellerId,
    limit = 10,
    offset = 0,
    status,
    sortBy = 'createdAt',
    sortOrder = 'desc',
    startDate,
    endDate,
  }: {
    sellerId: number;
    limit?: number;
    offset?: number;
    status?: OrderStatus;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    startDate?: string;
    endDate?: string;
  }) {
    const where: Prisma.OrderWhereInput = {
      orderItems: {
        some: {
          product: {
            sellerId,
          },
        },
      },
      ...(status && { status }),
      ...(startDate &&
        endDate && {
          createdAt: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        }),
    };

    const [orders, total] = await this.db.$transaction([
      this.db.order.findMany({
        where,
        include: {
          orderItems: {
            include: {
              product: true,
            },
          },
          buyer: true,
        },
        orderBy: {
          [sortBy]: sortOrder,
        },
        take: limit,
        skip: offset,
      }),
      this.db.order.count({ where }),
    ]);

    return {
      data: orders,
      total,
      limit,
      offset,
    };
  }

  async getOrder(orderId: number, sellerId: number) {
    const order = await this.db.order.findFirst({
      where: {
        id: orderId,
        orderItems: {
          some: {
            product: {
              sellerId,
            },
          },
        },
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
        buyer: true,
      },
    });

    if (!order) {
      throw new NotFoundException('order not found');
    }

    return order;
  }

  async updateOrderStatus(
    orderId: number,
    sellerId: number,
    status: OrderStatus,
  ) {
    const order = await this.db.order.update({
      where: {
        id: orderId,
        orderItems: {
          some: {
            product: {
              sellerId,
            },
          },
        },
      },
      data: {
        status,
      },
      include: {
        orderItems: true,
      },
    });

    return order;
  }
}
