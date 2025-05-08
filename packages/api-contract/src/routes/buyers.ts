import z from "zod";
import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  BuyerProfileSchema,
  ProductSchema,
  OrderSchema,
} from "../schemas";

const CartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
});

const c = initContract();

export const buyersRouter = c.router({
  getProfile: {
    method: "GET",
    path: "/buyer/profile",
    responses: {
      200: BuyerProfileSchema,
      404: ErrorSchema,
    },
  },
  updateProfile: {
    method: "PUT",
    path: "/buyers/profile",
    body: BuyerProfileSchema.omit({
      id: true,
      userId: true,
      createdAt: true,
      updatedAt: true,
    }).partial(),
    responses: {
      200: BuyerProfileSchema,
      404: ErrorSchema,
    },
  },

  // Product related endpoints
  getProducts: {
    method: "GET",
    path: "/products",
    query: z.object({
      offset: z.string().optional().default("0"),
      limit: z.string().optional().default("10"),
      search: z.string().optional(),
      grade: z.string().optional(),
      sortBy: z.enum(["price", "createdAt", "name"]).optional(),
      sortOrder: z.enum(["asc", "desc"]).optional(),
    }),
    responses: {
      200: z.object({
        data: z.array(ProductSchema),
        total: z.number(),
        offset: z.number(),
        limit: z.number(),
      }),
      400: ErrorSchema,
    },
  },

  // Cart related endpoints
  getCart: {
    method: "GET",
    path: "/cart",
    responses: {
      200: z.array(CartItemSchema),
      404: ErrorSchema,
    },
  },

  addToCart: {
    method: "POST",
    path: "/cart",
    body: CartItemSchema,
    responses: {
      200: z.array(CartItemSchema),
      400: ErrorSchema,
    },
  },

  updateCartItem: {
    method: "PUT",
    path: "/cart/:productId",
    body: z.object({
      quantity: z.number(),
    }),
    responses: {
      200: z.array(CartItemSchema),
      404: ErrorSchema,
    },
  },

  removeFromCart: {
    method: "DELETE",
    path: "/cart/:productId",
    responses: {
      200: z.array(CartItemSchema),
      404: ErrorSchema,
    },
  },

  // Order related endpoints
  placeOrder: {
    method: "POST",
    path: "/orders",
    body: z.object({
      items: z.array(CartItemSchema),
      shippingAddress: z.string(),
    }),
    responses: {
      201: OrderSchema,
      400: ErrorSchema,
    },
  },

  getOrders: {
    method: "GET",
    path: "/orders",
    responses: {
      200: z.array(OrderSchema),
      404: ErrorSchema,
    },
  },

  getOrderById: {
    method: "GET",
    path: "/orders/:orderId",
    responses: {
      200: OrderSchema,
      404: ErrorSchema,
    },
  },
});
