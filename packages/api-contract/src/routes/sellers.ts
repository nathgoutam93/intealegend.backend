import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  SellerProfileSchema,
  SellerStatsSchema,
  ProductSchema,
  OrderSchema,
} from "../schemas";
import z from "zod";
import { BrandMarkSchema } from "../schemas/brandMark";

const c = initContract();

export const sellersRouter = c.router({
  getProfile: {
    method: "GET",
    path: "/seller/profile",
    responses: {
      200: SellerProfileSchema,
      404: ErrorSchema,
    },
  },
  updateProfile: {
    method: "PUT",
    path: "/seller/profile",
    body: SellerProfileSchema.omit({
      id: true,
      userId: true,
      createdAt: true,
      updatedAt: true,
    }).partial(),
    responses: {
      200: SellerProfileSchema,
      404: ErrorSchema,
    },
  },
  stats: {
    method: "GET",
    path: "/seller/stats",
    responses: {
      200: SellerStatsSchema,
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
  getProducts: {
    method: "GET",
    path: "/seller/products",
    query: z.object({
      offset: z.string().optional().default("0"),
      limit: z.string().optional().default("10"),
      search: z.string().optional(),
      sortBy: z.enum(["price", "createdAt", "name"]).optional(),
      sortOrder: z.enum(["asc", "desc"]).optional(),
      minPrice: z.string().optional(),
      maxPrice: z.string().optional(),
      grade: z.string().optional(),
      origin: z.string().optional(),
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
  createProduct: {
    method: "POST",
    path: "/seller/products",
    body: ProductSchema.omit({
      id: true,
      sellerId: true,
      brandMark: true,
      createdAt: true,
      updatedAt: true,
    }),
    responses: {
      201: ProductSchema,
      401: ErrorSchema,
      400: ErrorSchema,
    },
  },
  updateProduct: {
    method: "PATCH",
    path: "/seller/products/:id",
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
    path: "/seller/products/:id",
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
    path: "/seller/orders",
    query: z.object({
      offset: z.string().optional().default("0"),
      limit: z.string().optional().default("10"),
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
    },
  },
  updateOrderStatus: {
    method: "PATCH",
    path: "/seller/orders/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      status: z.enum([
        "ACCEPTED",
        "DESPATCHED",
        "ON_WAY",
        "DELIVERED",
        "CANCELLED",
      ]),
    }),
    responses: {
      200: OrderSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
  getOrder: {
    method: "GET",
    path: "/seller/orders/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: OrderSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
  getBrandMarks: {
    method: "GET",
    path: "/seller/brand-marks",
    responses: {
      200: z.array(BrandMarkSchema),
      401: ErrorSchema,
    },
  },
  createBrandMark: {
    method: "POST",
    path: "/seller/brand-marks",
    body: BrandMarkSchema.omit({
      id: true,
      sellerId: true,
      status: true,
      verifiedAt: true,
      createdAt: true,
      updatedAt: true,
    }),
    responses: {
      201: BrandMarkSchema,
      401: ErrorSchema,
      400: ErrorSchema,
    },
  },
  updateBrandMark: {
    method: "PATCH",
    path: "/seller/brand-marks/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: BrandMarkSchema.omit({
      id: true,
      sellerId: true,
      status: true,
      verifiedAt: true,
      createdAt: true,
      updatedAt: true,
    }).partial(),
    responses: {
      200: BrandMarkSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
  getBrandMark: {
    method: "GET",
    path: "/seller/brand-marks/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: BrandMarkSchema,
      401: ErrorSchema,
      404: ErrorSchema,
    },
  },
});
