"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyersRouter = void 0;
var zod_1 = __importDefault(require("zod"));
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var CartItemSchema = zod_1.default.object({
    productId: zod_1.default.string(),
    quantity: zod_1.default.number(),
});
var c = (0, core_1.initContract)();
exports.buyersRouter = c.router({
    getProfile: {
        method: "GET",
        path: "/buyer/profile",
        responses: {
            200: schemas_1.BuyerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    updateProfile: {
        method: "PUT",
        path: "/buyers/profile",
        body: schemas_1.BuyerProfileSchema.omit({
            id: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
        }).partial(),
        responses: {
            200: schemas_1.BuyerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    // Product related endpoints
    getProducts: {
        method: "GET",
        path: "/products",
        query: zod_1.default.object({
            offset: zod_1.default.string().optional().default("0"),
            limit: zod_1.default.string().optional().default("10"),
            search: zod_1.default.string().optional(),
            sortBy: zod_1.default.enum(["price", "createdAt", "name"]).optional(),
            sortOrder: zod_1.default.enum(["asc", "desc"]).optional(),
        }),
        responses: {
            200: zod_1.default.object({
                data: zod_1.default.array(schemas_1.ProductSchema),
                total: zod_1.default.number(),
                offset: zod_1.default.number(),
                limit: zod_1.default.number(),
            }),
            400: schemas_1.ErrorSchema,
        },
    },
    // Cart related endpoints
    getCart: {
        method: "GET",
        path: "/cart",
        responses: {
            200: zod_1.default.array(CartItemSchema),
            404: schemas_1.ErrorSchema,
        },
    },
    addToCart: {
        method: "POST",
        path: "/cart",
        body: CartItemSchema,
        responses: {
            200: zod_1.default.array(CartItemSchema),
            400: schemas_1.ErrorSchema,
        },
    },
    updateCartItem: {
        method: "PUT",
        path: "/cart/:productId",
        body: zod_1.default.object({
            quantity: zod_1.default.number(),
        }),
        responses: {
            200: zod_1.default.array(CartItemSchema),
            404: schemas_1.ErrorSchema,
        },
    },
    removeFromCart: {
        method: "DELETE",
        path: "/cart/:productId",
        responses: {
            200: zod_1.default.array(CartItemSchema),
            404: schemas_1.ErrorSchema,
        },
    },
    // Order related endpoints
    placeOrder: {
        method: "POST",
        path: "/orders",
        body: zod_1.default.object({
            items: zod_1.default.array(CartItemSchema),
            shippingAddress: zod_1.default.string(),
        }),
        responses: {
            201: schemas_1.OrderSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    getOrders: {
        method: "GET",
        path: "/orders",
        responses: {
            200: zod_1.default.array(schemas_1.OrderSchema),
            404: schemas_1.ErrorSchema,
        },
    },
    getOrderById: {
        method: "GET",
        path: "/orders/:orderId",
        responses: {
            200: schemas_1.OrderSchema,
            404: schemas_1.ErrorSchema,
        },
    },
});
