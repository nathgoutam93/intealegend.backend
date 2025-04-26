import { Controller, Inject, Req, UseGuards } from '@nestjs/common';
import { contract } from '@intealegend/api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { SellerService } from './seller.service';
import { JwtGuard } from 'src/auth/jwt.guard';
import { PRISMA_TOKEN } from 'src/database/constants';
import { PrismaClient, SellerProfile } from '@intealegend/database';
import { SellerGuard } from 'src/auth/seller.guard';

@Controller()
@UseGuards(JwtGuard, SellerGuard)
export class SellerController {
  constructor(
    @Inject(PRISMA_TOKEN) private db: PrismaClient,
    private readonly sellerService: SellerService,
  ) {}

  @TsRestHandler(contract.sellers)
  handler(@Req() req) {
    return tsRestHandler(contract.sellers, {
      getProfile: async () => {
        const profile = await this.sellerService.getSellerProfile(
          req.seller.id,
        );

        return {
          status: 200,
          body: profile,
        };
      },
      updateProfile: async ({ body }) => {
        const profile = await this.sellerService.updateSellerProfile(
          req.seller.id,
          body,
        );

        return {
          status: 201,
          body: profile,
        };
      },
      stats: async () => {
        const stats = await this.sellerService.getStats(req.seller.id);
        return {
          status: 200,
          body: stats,
        };
      },
      getProduct: async ({ params: { id } }) => {
        const product = await this.sellerService.getProduct(
          parseInt(id),
          req.seller.id,
        );

        return {
          status: 200,
          body: product,
        };
      },
      getProducts: async ({
        query: { limit, offset, search, sortBy, sortOrder, status },
      }) => {
        const products = await this.sellerService.getProducts({
          sellerId: req.seller.id,
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
          search,
          sortBy,
          sortOrder: sortOrder as 'asc' | 'desc',
          status,
        });

        return {
          status: 200,
          body: products,
        };
      },
      createProduct: async ({ body }) => {
        const product = await this.sellerService.createProduct(
          req.seller.id,
          body,
        );
        return {
          status: 201,
          body: product,
        };
      },
      updateProduct: async ({ params: { id }, body }) => {
        const product = await this.sellerService.updateProduct(
          parseInt(id),
          req.seller.id,
          body,
        );
        return {
          status: 200,
          body: product,
        };
      },
      getOrders: async ({
        query: { limit, offset, status, sortBy, sortOrder, startDate, endDate },
      }) => {
        const orders = await this.sellerService.getOrders({
          sellerId: req.seller.id,
          limit: limit ? parseInt(limit) : undefined,
          offset: offset ? parseInt(offset) : undefined,
          status,
          sortBy,
          sortOrder: sortOrder as 'asc' | 'desc',
          startDate,
          endDate,
        });

        return {
          status: 200,
          body: orders,
        };
      },
      getOrder: async ({ params: { id } }) => {
        const order = await this.sellerService.getOrder(
          parseInt(id),
          req.seller.id,
        );

        return {
          status: 200,
          body: order,
        };
      },
      updateOrderStatus: async ({ params: { id }, body: { status } }) => {
        const order = await this.sellerService.updateOrderStatus(
          parseInt(id),
          req.seller.id,
          status,
        );

        return {
          status: 200,
          body: order,
        };
      },
      getBrandMarks: async () => {
        const brandMarks = await this.sellerService.getBrandMarks(
          req.seller.id,
        );
        return {
          status: 200,
          body: brandMarks,
        };
      },
      createBrandMark: async ({ body }) => {
        const brandMark = await this.sellerService.createBrandMark(
          req.seller.id,
          body,
        );
        return {
          status: 201,
          body: brandMark,
        };
      },
      updateBrandMark: async ({ params: { id }, body }) => {
        const brandMark = await this.sellerService.updateBrandMark(
          parseInt(id),
          req.seller.id,
          body,
        );
        return {
          status: 200,
          body: brandMark,
        };
      },
      getBrandMark: async ({ params: { id } }) => {
        const brandMark = await this.sellerService.getBrandMark(
          parseInt(id),
          req.seller.id,
        );
        return {
          status: 200,
          body: brandMark,
        };
      },
    });
  }
}
