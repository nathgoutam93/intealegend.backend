import {
  Controller,
  Req,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { contract } from '@intealegend/api-contract';
import { TsRestHandler, tsRestHandler } from '@ts-rest/nest';
import { AdminService } from './admin.service';
import { JwtGuard } from '../auth/jwt.guard';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { StorageService } from 'src/storage/storage.service';

@Controller()
@UseGuards(JwtGuard) // Add this decorator to protect all routes in this controller
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly storageService: StorageService,
  ) {}

  @TsRestHandler(contract.admin)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'invoice', maxCount: 1 },
      { name: 'cn', maxCount: 1 },
    ]),
  )
  handler(
    @Req() req,
    @UploadedFiles() files: Record<string, Express.Multer.File[]>,
  ) {
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
      toggleUserBan: async ({ body, params: { id } }) => {
        const res = await this.adminService.toggleUserBan(parseInt(id));

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
              subtotal: Number(order.subtotal),
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
            subtotal: Number(order.subtotal),
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
      uploadInvoice: async ({ params: { id }, body: {} }) => {
        let invoice_url = '';

        if (files) {
          for (const [fieldName, fieldFiles] of Object.entries(files)) {
            if (fieldFiles?.length > 0) {
              const file = fieldFiles[0];
              const url = await this.storageService.upload(
                file.originalname,
                file.buffer,
                fieldName === 'brandLogo', // Only optimize brand logo
              );
              if (fieldName === 'invoice') {
                invoice_url = url;
              }
            }
          }
        }

        const result = await this.adminService.uploadInvoice(
          parseInt(id),
          invoice_url,
        );
        return {
          status: 200,
          body: result,
        };
      },
      uploadCn: async ({ params: { id }, body: {} }) => {
        let cn_url = '';

        if (files) {
          for (const [fieldName, fieldFiles] of Object.entries(files)) {
            if (fieldFiles?.length > 0) {
              const file = fieldFiles[0];
              const url = await this.storageService.upload(
                file.originalname,
                file.buffer,
                fieldName === 'brandLogo', // Only optimize brand logo
              );
              if (fieldName === 'cn') {
                cn_url = url;
              }
            }
          }
        }

        const result = await this.adminService.uploadCn(parseInt(id), cn_url);
        return {
          status: 200,
          body: result,
        };
      },
    });
  }
}
