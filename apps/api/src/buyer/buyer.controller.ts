import { Controller, Inject, Req, UseGuards } from '@nestjs/common';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { JwtGuard } from 'src/auth/jwt.guard';
import { BuyerService } from './buyer.service';
import { PRISMA_TOKEN } from 'src/database/constants';
import { PrismaClient } from '@intealegend/database';
import { contract } from '@intealegend/api-contract';

@Controller()
@UseGuards(JwtGuard)
export class BuyerController {
  constructor(
    @Inject(PRISMA_TOKEN) private db: PrismaClient,
    private readonly buyerService: BuyerService,
  ) {}

  @TsRestHandler(contract.buyers)
  handler(@Req() req) {
    return tsRestHandler(contract.buyers, {
      getProfile: async () => {
        const profile = await this.buyerService.getProfile(req.user);
        return {
          status: 200,
          body: profile,
        };
      },

      updateProfile: async ({ body }) => {
        const profile = await this.buyerService.updateProfile(req.user, body);
        return {
          status: 200,
          body: profile,
        };
      },

      getProducts: async ({
        query: { limit, offset, search, sortBy, sortOrder },
      }) => {
        const products = await this.buyerService.getProducts({
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
          search,
          sortBy,
          sortOrder: sortOrder as 'asc' | 'desc',
        });

        return {
          status: 200,
          body: products,
        };
      },

      getCart: async () => {
        const cart = await this.buyerService.getCart(req.user);
        return {
          status: 200,
          body: cart,
        };
      },

      addToCart: async ({ body }) => {
        const updatedCart = await this.buyerService.addToCart(req.user, {
          productId: parseInt(body.productId),
          quantity: body.quantity,
        });
        return {
          status: 200,
          body: updatedCart,
        };
      },

      updateCartItem: async ({ params, body }) => {
        const updatedCart = await this.buyerService.updateCartItem(
          req.user,
          parseInt(params.productId),
          body.quantity,
        );
        return {
          status: 200,
          body: updatedCart,
        };
      },

      removeFromCart: async ({ params }) => {
        const updatedCart = await this.buyerService.removeFromCart(
          req.user,
          parseInt(params.productId),
        );
        return {
          status: 200,
          body: updatedCart,
        };
      },

      placeOrder: async ({ body }) => {
        const order = await this.buyerService.placeOrder(req.user, body);
        return {
          status: 201,
          body: order,
        };
      },

      getOrders: async () => {
        const orders = await this.buyerService.getOrders(req.user);
        return {
          status: 200,
          body: orders,
        };
      },

      getOrderById: async ({ params }) => {
        const order = await this.buyerService.getOrderById(
          req.user,
          parseInt(params.orderId),
        );
        return {
          status: 200,
          body: order,
        };
      },
    });
  }
}
