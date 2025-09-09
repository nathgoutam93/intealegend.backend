import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  UserSchema,
  SellerProfileSchema,
  BuyerProfileSchema,
  AdminStatsSchema,
  ProductSchema,
  OrderSchema,
} from "../schemas";
import z from "zod";

const c = initContract();

export const adminRouter = c.router({
  stats: {
    method: "GET",
    path: "/admin/stats",
    responses: {
      200: AdminStatsSchema,
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
  listUsers: {
    method: "GET",
    path: "/admin/users",
    query: z.object({
      role: z.enum(["SELLER", "BUYER"]),
      verified: z
        .string()
        .transform((str) => str === "true")
        .optional(),
      limit: z
        .string()
        .transform((val) => parseInt(val))
        .pipe(z.number().min(1).max(100))
        .optional()
        .default("10"),
      offset: z
        .string()
        .transform((val) => parseInt(val))
        .pipe(z.number().min(0))
        .optional()
        .default("0"),
    }),
    responses: {
      200: z.object({
        data: z.discriminatedUnion("role", [
          z.object({
            role: z.literal("SELLER"),
            users: UserSchema.extend({
              profile: SellerProfileSchema,
            }).array(),
          }),
          z.object({
            role: z.literal("BUYER"),
            users: UserSchema.extend({
              profile: BuyerProfileSchema,
            }).array(),
          }),
        ]),
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
      }),
      401: ErrorSchema,
      403: ErrorSchema,
      400: ErrorSchema,
    },
  },
  verifyRegistration: {
    method: "POST",
    path: "/admin/users/verify",
    body: z.object({
      userIds: z.number().array(),
    }),
    responses: {
      200: z.object({
        message: z.string(),
        verifiedUsers: z.number(),
      }),
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
  deleteRegistration: {
    method: "POST",
    path: "/admin/users/delete",
    body: z.object({
      userIds: z.number().array(),
    }),
    responses: {
      200: z.object({
        message: z.string(),
        deletedUsers: z.number(),
      }),
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
  toggleUserBan: {
    method: "POST",
    path: "/admin/users/:id/ban",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({}),
    responses: {
      200: UserSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
  getProducts: {
    method: "GET",
    path: "/admin/products",
    query: z.object({
      offset: z.string().optional().default("0"),
      limit: z.string().optional().default("10"),
      search: z.string().optional(),
      sortBy: z.enum(["price", "createdAt", "name"]).optional(),
      sortOrder: z.enum(["asc", "desc"]).optional(),
      status: z.enum(["published", "draft"]).optional(),
    }),
    responses: {
      200: z.object({
        data: z.array(ProductSchema),
        total: z.number(),
        offset: z.number(),
        limit: z.number(),
      }),
      401: ErrorSchema,
    },
  },
  updateProduct: {
    method: "PATCH",
    path: "/admin/products/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: ProductSchema.omit({
      id: true,
      sellerId: true,
      createdAt: true,
      updatedAt: true,
    }).partial(),
    responses: {
      200: ProductSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
  getProduct: {
    method: "GET",
    path: "/admin/products/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: ProductSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
  getOrders: {
    method: "GET",
    path: "/admin/orders",
    query: z.object({
      offset: z
        .string()
        .transform((val) => parseInt(val))
        .pipe(z.number().min(0))
        .optional()
        .default("0"),
      limit: z
        .string()
        .transform((val) => parseInt(val))
        .pipe(z.number().min(1).max(100))
        .optional()
        .default("10"),
      status: z
        .enum([
          "PENDING",
          "ACCEPTED",
          "DESPATCHED",
          "ON_WAY",
          "DELIVERED",
          "CANCELLED",
        ])
        .optional(),
      startDate: z.string().optional(), // ISO date string
      endDate: z.string().optional(), // ISO date string
      sortBy: z.enum(["createdAt", "totalAmount"]).optional(),
      sortOrder: z.enum(["asc", "desc"]).optional(),
    }),
    responses: {
      200: z.object({
        data: z.array(OrderSchema),
        total: z.number(),
        offset: z.number(),
        limit: z.number(),
      }),
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
  getOrder: {
    method: "GET",
    path: "/admin/orders/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: OrderSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
  updateOrder: {
    method: "PATCH",
    path: "/admin/orders/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      status: z
        .enum([
          "PENDING",
          "ACCEPTED",
          "DESPATCHED",
          "ON_WAY",
          "DELIVERED",
          "CANCELLED",
        ])
        .optional(),
      invoice: z.string().nullable().optional(),
      cn: z.string().nullable().optional(),
      transport: z.string().nullable().optional(),
      deliveryCharges: z.number().nullable().optional(),
      otherCharges: z.number().nullable().optional(),
      roundOff: z.number().nullable().optional(),
    }),
    responses: {
      200: OrderSchema,
      401: ErrorSchema,
      403: ErrorSchema,
      404: ErrorSchema,
    },
  },
  uploadInvoice: {
    method: "POST",
    path: "/admin/orders/:id/invoice",
    pathParams: z.object({
      id: z.string(),
    }),
    contentType: "multipart/form-data",
    body: z.object({}).passthrough(),
    responses: {
      200: OrderSchema,
      401: ErrorSchema,
      403: ErrorSchema,
      404: ErrorSchema,
    },
  },
  uploadCn: {
    method: "POST",
    path: "/admin/orders/:id/cn",
    pathParams: z.object({
      id: z.string(),
    }),
    contentType: "multipart/form-data",
    body: z.object({}).passthrough(),
    responses: {
      200: OrderSchema,
      401: ErrorSchema,
      403: ErrorSchema,
      404: ErrorSchema,
    },
  },
});
