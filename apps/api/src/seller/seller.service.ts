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
      totalSales: stats[2]._sum.totalPrice?.toNumber() || 0,
    };
  }

  async getProduct(productId: number, sellerId: number) {
    const product = await this.db.product.findFirst({
      where: {
        id: productId,
        sellerId,
      },
      include: {
        brandMark: true,
      },
    });

    if (!product) {
      throw new NotFoundException('seller profile not found');
    }

    return { ...product, pricePerUnit: product.pricePerUnit.toNumber() };
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

  async createProduct(sellerId: number, data: any) {
    const product = await this.db.product.create({
      data: {
        sellerId,
        ...data,
      },
      include: {
        brandMark: true,
      },
    });

    return {
      ...product,
      pricePerUnit: product.pricePerUnit.toNumber(),
    };
  }

  async updateProduct(productId: number, sellerId: number, data: any) {
    const updatedProduct = await this.db.product.update({
      where: {
        id: productId,
        sellerId,
      },
      data,
      include: {
        brandMark: true,
      },
    });

    return {
      ...updatedProduct,
      pricePerUnit: updatedProduct.pricePerUnit.toNumber(),
    };
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
      data: orders.map((o) => ({
        ...o,
        orderItems: o.orderItems.map((oi) => ({
          ...oi,
          unitPrice: oi.unitPrice.toNumber(),
          totalPrice: oi.totalPrice.toNumber(),
        })),
        totalAmount: o.totalAmount.toNumber(),
        deliveryCharges: o.deliveryCharges?.toNumber() ?? null,
        gstAmount: o.gstAmount.toNumber(),
        otherCharges: o.otherCharges?.toNumber() ?? null,
        roundOff: o.roundOff?.toNumber() ?? null,
      })),
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

  async getBrandMarks(sellerId: number) {
    return this.db.brandMark.findMany({
      where: {
        sellerId,
      },
    });
  }

  async createBrandMark(sellerId: number, data: any) {
    if (data.isDefault) {
      await this.db.brandMark.updateMany({
        where: {
          sellerId,
        },
        data: {
          isDefault: false,
        },
      });
    }

    return this.db.brandMark.create({
      data: {
        sellerId,
        status: 'PENDING',
        ...data,
      },
    });
  }

  async updateBrandMark(brandMarkId: number, sellerId: number, data: any) {
    return this.db.brandMark.update({
      where: {
        id: brandMarkId,
        sellerId,
      },
      data,
    });
  }

  async getBrandMark(brandMarkId: number, sellerId: number) {
    const brandMark = await this.db.brandMark.findFirst({
      where: {
        id: brandMarkId,
        sellerId,
      },
    });

    if (!brandMark) {
      throw new NotFoundException('brand mark not found');
    }

    return brandMark;
  }
}
