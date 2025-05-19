import { Controller, Req, UseGuards } from '@nestjs/common';
import { contract } from '@intealegend/api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { AdminService } from './admin.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller()
@UseGuards(JwtGuard) // Add this decorator to protect all routes in this controller
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @TsRestHandler(contract.admin)
  handler(@Req() req) {
    if (req.user.role != 'ADMIN') {
      return {
        status: 401,
        body: {
          message: 'Unauthorized',
          code: 'UNAUTHORIZED',
          timestamp: new Date().toISOString(),
        },
      };
    }

    return tsRestHandler(contract.admin, {
      stats: async () => {
        const stats = await this.adminService.getStats();
        return {
          status: 200,
          body: stats,
        };
      },
      listUsers: async ({ query }) => {
        const res = await this.adminService.listUsers(query);

        return {
          status: 200,
          body: res,
        };
      },
      verifyRegistration: async ({ body }) => {
        const res = await this.adminService.verifyRegistrations(body.userIds);

        return {
          status: 200,
          body: res,
        };
      },
      getProducts: async ({
        query: { limit, offset, search, sortBy, sortOrder, status },
      }) => {
        const products = await this.adminService.getProducts({
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
      updateProduct: async ({ params: { id }, body }) => {
        const product = await this.adminService.updateProduct(
          parseInt(id),
          body,
        );
        return {
          status: 200,
          body: product,
        };
      },
      getProduct: async ({ params: { id } }) => {
        const product = await this.adminService.getProduct(parseInt(id));
        return {
          status: 200,
          body: product,
        };
      },
      getOrders: async ({ query }) => {
        const orders = await this.adminService.getOrders({
          limit: query.limit ? Number(query.limit) : undefined,
          offset: query.offset ? Number(query.offset) : undefined,
          status: query.status,
          startDate: query.startDate,
          endDate: query.endDate,
          sortBy: query.sortBy,
          sortOrder: query.sortOrder,
        });

        return {
          status: 200,
          body: {
            ...orders,
            data: orders.data.map((order) => ({
              ...order,
              totalAmount: Number(order.totalAmount),
              deliveryCharges: order.deliveryCharges
                ? Number(order.deliveryCharges)
                : null,
              gstAmount: Number(order.gstAmount),
              otherCharges: order.otherCharges
                ? Number(order.otherCharges)
                : null,
              roundOff: order.roundOff ? Number(order.roundOff) : null,
              orderItems: order.orderItems.map((item) => ({
                ...item,
                unitPrice: Number(item.unitPrice),
                totalPrice: Number(item.totalPrice),
              })),
            })),
          },
        };
      },
      getOrder: async ({ params: { id } }) => {
        const order = await this.adminService.getOrder(parseInt(id));

        return {
          status: 200,
          body: order,
        };
      },
      updateOrder: async ({ params: { id }, body }) => {
        const order = await this.adminService.updateOrder(parseInt(id), body);

        return {
          status: 200,
          body: {
            ...order,
            totalAmount: Number(order.totalAmount),
            deliveryCharges: order.deliveryCharges
              ? Number(order.deliveryCharges)
              : null,
            gstAmount: Number(order.gstAmount),
            otherCharges: order.otherCharges
              ? Number(order.otherCharges)
              : null,
            roundOff: order.roundOff ? Number(order.roundOff) : null,
            orderItems: order.orderItems.map((item) => ({
              ...item,
              unitPrice: Number(item.unitPrice),
              totalPrice: Number(item.totalPrice),
            })),
          },
        };
      },
    });
  }
}
