"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var c = (0, core_1.initContract)();
exports.adminRouter = c.router({
    stats: {
        method: "GET",
        path: "/admin/stats",
        responses: {
            200: schemas_1.AdminStatsSchema,
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
        },
    },
    listUsers: {
        method: "GET",
        path: "/admin/users",
        query: zod_1.default.object({
            role: zod_1.default.enum(["SELLER", "BUYER"]),
            verified: zod_1.default
                .string()
                .transform(function (str) { return str === "true"; })
                .optional(),
            limit: zod_1.default
                .string()
                .transform(function (val) { return parseInt(val); })
                .pipe(zod_1.default.number().min(1).max(100))
                .optional()
                .default("10"),
            offset: zod_1.default
                .string()
                .transform(function (val) { return parseInt(val); })
                .pipe(zod_1.default.number().min(0))
                .optional()
                .default("0"),
        }),
        responses: {
            200: zod_1.default.object({
                data: zod_1.default.discriminatedUnion("role", [
                    zod_1.default.object({
                        role: zod_1.default.literal("SELLER"),
                        users: schemas_1.UserSchema.extend({
                            profile: schemas_1.SellerProfileSchema,
                        }).array(),
                    }),
                    zod_1.default.object({
                        role: zod_1.default.literal("BUYER"),
                        users: schemas_1.UserSchema.extend({
                            profile: schemas_1.BuyerProfileSchema,
                        }).array(),
                    }),
                ]),
                total: zod_1.default.number(),
                limit: zod_1.default.number(),
                offset: zod_1.default.number(),
            }),
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    verifyRegistration: {
        method: "POST",
        path: "/admin/users/verify",
        body: zod_1.default.object({
            userIds: zod_1.default.number().array(),
        }),
        responses: {
            200: zod_1.default.object({
                message: zod_1.default.string(),
                verifiedUsers: zod_1.default.number(),
            }),
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
        },
    },
    toggleUserBan: {
        method: "POST",
        path: "/admin/users/:id/ban",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        body: zod_1.default.object({}),
        responses: {
            200: schemas_1.UserSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    getProducts: {
        method: "GET",
        path: "/admin/products",
        query: zod_1.default.object({
            offset: zod_1.default.string().optional().default("0"),
            limit: zod_1.default.string().optional().default("10"),
            search: zod_1.default.string().optional(),
            sortBy: zod_1.default.enum(["price", "createdAt", "name"]).optional(),
            sortOrder: zod_1.default.enum(["asc", "desc"]).optional(),
            status: zod_1.default.enum(["published", "draft"]).optional(),
        }),
        responses: {
            200: zod_1.default.object({
                data: zod_1.default.array(schemas_1.ProductSchema),
                total: zod_1.default.number(),
                offset: zod_1.default.number(),
                limit: zod_1.default.number(),
            }),
            401: schemas_1.ErrorSchema,
        },
    },
    updateProduct: {
        method: "PATCH",
        path: "/admin/products/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        body: schemas_1.ProductSchema.omit({
            id: true,
            sellerId: true,
            createdAt: true,
            updatedAt: true,
        }).partial(),
        responses: {
            200: schemas_1.ProductSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    getProduct: {
        method: "GET",
        path: "/admin/products/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.ProductSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    getOrders: {
        method: "GET",
        path: "/admin/orders",
        query: zod_1.default.object({
            offset: zod_1.default
                .string()
                .transform(function (val) { return parseInt(val); })
                .pipe(zod_1.default.number().min(0))
                .optional()
                .default("0"),
            limit: zod_1.default
                .string()
                .transform(function (val) { return parseInt(val); })
                .pipe(zod_1.default.number().min(1).max(100))
                .optional()
                .default("10"),
            status: zod_1.default
                .enum([
                "PENDING",
                "ACCEPTED",
                "DESPATCHED",
                "ON_WAY",
                "DELIVERED",
                "CANCELLED",
            ])
                .optional(),
            startDate: zod_1.default.string().optional(), // ISO date string
            endDate: zod_1.default.string().optional(), // ISO date string
            sortBy: zod_1.default.enum(["createdAt", "totalAmount"]).optional(),
            sortOrder: zod_1.default.enum(["asc", "desc"]).optional(),
        }),
        responses: {
            200: zod_1.default.object({
                data: zod_1.default.array(schemas_1.OrderSchema),
                total: zod_1.default.number(),
                offset: zod_1.default.number(),
                limit: zod_1.default.number(),
            }),
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
        },
    },
    getOrder: {
        method: "GET",
        path: "/admin/orders/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.OrderSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    updateOrder: {
        method: "PATCH",
        path: "/admin/orders/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        body: zod_1.default.object({
            status: zod_1.default
                .enum([
                "PENDING",
                "ACCEPTED",
                "DESPATCHED",
                "ON_WAY",
                "DELIVERED",
                "CANCELLED",
            ])
                .optional(),
            invoice: zod_1.default.string().nullable().optional(),
            cn: zod_1.default.string().nullable().optional(),
            transport: zod_1.default.string().nullable().optional(),
            deliveryCharges: zod_1.default.number().nullable().optional(),
            otherCharges: zod_1.default.number().nullable().optional(),
            roundOff: zod_1.default.number().nullable().optional(),
        }),
        responses: {
            200: schemas_1.OrderSchema,
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    uploadInvoice: {
        method: "POST",
        path: "/admin/orders/:id/invoice",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        contentType: "multipart/form-data",
        body: zod_1.default.object({}).passthrough(),
        responses: {
            200: schemas_1.OrderSchema,
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    uploadCn: {
        method: "POST",
        path: "/admin/orders/:id/cn",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        contentType: "multipart/form-data",
        body: zod_1.default.object({}).passthrough(),
        responses: {
            200: schemas_1.OrderSchema,
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
});
