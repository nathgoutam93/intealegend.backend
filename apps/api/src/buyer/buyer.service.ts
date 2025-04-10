import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OrderStatus, PrismaClient } from '@intealegend/database';
import { PRISMA_TOKEN } from 'src/database/constants';

@Injectable()
export class BuyerService {
  constructor(@Inject(PRISMA_TOKEN) private db: PrismaClient) {}

  async getProfile(user: any) {
    const profile = await this.db.buyerProfile.findFirst({
      where: { userId: user.id },
      include: { user: true },
    });

    if (!profile) {
      throw new NotFoundException('buyer profile not found');
    }

    return profile;
  }

  async updateProfile(user: any, data: any) {
    return this.db.buyerProfile.update({
      where: { userId: user.id },
      data,
    });
  }

  async getProducts(query: any) {
    const { offset = 0, limit = 10, search } = query;

    const where = search
      ? {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        }
      : {};

    return this.db.product.findMany({
      where,
      take: parseInt(limit),
      skip: parseInt(offset),
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getCart(user: any) {
    const cartItems = await this.db.cartItem.findMany({
      where: { buyerId: user.id },
    });

    if (!cartItems.length) {
      throw new NotFoundException('cart is empty');
    }

    return cartItems.map((item) => ({
      ...item,
      productId: item.productId.toString(),
    }));
  }

  async addToCart(user: any, item: { productId: number; quantity: number }) {
    const existing = await this.db.cartItem.findFirst({
      where: {
        buyerId: user.id,
        productId: item.productId,
      },
    });

    if (existing) {
      await this.db.cartItem.update({
        where: { id: existing.id },
        data: {
          quantity: existing.quantity + item.quantity,
        },
      });
    } else {
      await this.db.cartItem.create({
        data: {
          buyerId: user.id,
          productId: item.productId,
          quantity: item.quantity,
        },
      });
    }

    const items = await this.db.cartItem.findMany({
      where: { buyerId: user.id },
    });

    return items.map((item) => ({
      ...item,
      productId: item.productId.toString(),
    }));
  }

  async updateCartItem(user: any, productId: number, quantity: number) {
    const existing = await this.db.cartItem.findFirst({
      where: {
        buyerId: user.id,
        productId,
      },
    });

    if (!existing) {
      throw new NotFoundException('item not found in cart');
    }

    await this.db.cartItem.update({
      where: { id: existing.id },
      data: { quantity },
    });

    const items = await this.db.cartItem.findMany({
      where: { buyerId: user.id },
    });

    return items.map((item) => ({
      ...item,
      productId: item.productId.toString(),
    }));
  }

  async removeFromCart(user: any, productId: number) {
    const existing = await this.db.cartItem.findFirst({
      where: {
        buyerId: user.id,
        productId,
      },
    });

    if (!existing) {
      throw new NotFoundException('item not found in cart');
    }

    await this.db.cartItem.delete({
      where: { id: existing.id },
    });

    const items = await this.db.cartItem.findMany({
      where: { buyerId: user.id },
    });

    return items.map((item) => ({
      ...item,
      productId: item.productId.toString(),
    }));
  }

  async placeOrder(
    user: any,
    data: {
      items: { productId: string; quantity: number }[];
      shippingAddress: string;
    },
  ) {
    const itemsWithProductData = await Promise.all(
      data.items.map(async (item) => {
        const product = await this.db.product.findUnique({
          where: { id: Number(item.productId) },
        });

        if (!product) {
          throw new NotFoundException(
            `Product with id ${item.productId} not found`,
          );
        }

        const unitPrice = product.pricePerUnit;
        const totalWeight = item.quantity * product.weightPerUnit;
        const totalPrice = unitPrice * item.quantity;

        return {
          productId: product.id,
          quantity: item.quantity,
          unitPrice,
          totalWeight,
          totalPrice,
        };
      }),
    );

    // Calculate totals
    const estimatedWeight = itemsWithProductData.reduce(
      (sum, i) => sum + i.totalWeight,
      0,
    );
    const subtotal = itemsWithProductData.reduce(
      (sum, i) => sum + i.totalPrice,
      0,
    );

    const gstAmount = parseFloat((subtotal * 0.05).toFixed(2)); // Assuming 5% GST
    const deliveryCharges = 50; // Flat delivery charge — replace with dynamic logic if needed
    const otherCharges = 0;
    const roundOff = parseFloat(
      (
        Math.round(subtotal + gstAmount + deliveryCharges + otherCharges) -
        (subtotal + gstAmount + deliveryCharges + otherCharges)
      ).toFixed(2),
    );
    const totalAmount = parseFloat(
      (
        subtotal +
        gstAmount +
        deliveryCharges +
        otherCharges +
        roundOff
      ).toFixed(2),
    );

    // Create order and items
    const order = await this.db.order.create({
      data: {
        buyerId: user.id,
        status: 'PENDING',
        estimatedWeight,
        gstAmount,
        deliveryCharges,
        otherCharges,
        roundOff,
        totalAmount,
        orderItems: {
          create: itemsWithProductData.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalWeight: item.totalWeight,
            totalPrice: item.totalPrice,
          })),
        },
      },
      include: {
        orderItems: true,
      },
    });

    // Clear cart
    await this.db.cartItem.deleteMany({
      where: { buyerId: user.id },
    });

    return order;
  }

  async getOrders(user: any) {
    const orders = await this.db.order.findMany({
      where: { buyerId: user.id },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!orders.length) {
      throw new NotFoundException('no orders found');
    }

    return orders;
  }

  async getOrderById(user: any, orderId: number) {
    const order = await this.db.order.findFirst({
      where: {
        id: orderId,
        buyerId: user.id,
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('order not found');
    }

    return order;
  }
}
