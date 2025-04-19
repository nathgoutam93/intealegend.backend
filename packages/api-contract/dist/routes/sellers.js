"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellersRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var brandMark_1 = require("../schemas/brandMark");
var c = (0, core_1.initContract)();
exports.sellersRouter = c.router({
    getProfile: {
        method: "GET",
        path: "/seller/profile",
        responses: {
            200: schemas_1.SellerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    updateProfile: {
        method: "PUT",
        path: "/seller/profile",
        body: schemas_1.SellerProfileSchema.omit({
            id: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
        }).partial(),
        responses: {
            200: schemas_1.SellerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    stats: {
        method: "GET",
        path: "/seller/stats",
        responses: {
            200: schemas_1.SellerStatsSchema,
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
        },
    },
    getProducts: {
        method: "GET",
        path: "/seller/products",
        query: zod_1.default.object({
            offset: zod_1.default.string().optional().default("0"),
            limit: zod_1.default.string().optional().default("10"),
            search: zod_1.default.string().optional(),
            sortBy: zod_1.default.enum(["price", "createdAt", "name"]).optional(),
            sortOrder: zod_1.default.enum(["asc", "desc"]).optional(),
            minPrice: zod_1.default.string().optional(),
            maxPrice: zod_1.default.string().optional(),
            grade: zod_1.default.string().optional(),
            origin: zod_1.default.string().optional(),
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
    createProduct: {
        method: "POST",
        path: "/seller/products",
        body: schemas_1.ProductSchema.omit({
            id: true,
            sellerId: true,
            brandMark: true,
            createdAt: true,
            updatedAt: true,
        }),
        responses: {
            201: schemas_1.ProductSchema,
            401: schemas_1.ErrorSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    updateProduct: {
        method: "PATCH",
        path: "/seller/products/:id",
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
        path: "/seller/products/:id",
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
        path: "/seller/orders",
        query: zod_1.default.object({
            offset: zod_1.default.string().optional().default("0"),
            limit: zod_1.default.string().optional().default("10"),
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
        },
    },
    updateOrderStatus: {
        method: "PATCH",
        path: "/seller/orders/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        body: zod_1.default.object({
            status: zod_1.default.enum([
                "ACCEPTED",
                "DESPATCHED",
                "ON_WAY",
                "DELIVERED",
                "CANCELLED",
            ]),
        }),
        responses: {
            200: schemas_1.OrderSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    getOrder: {
        method: "GET",
        path: "/seller/orders/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.OrderSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    getBrandMarks: {
        method: "GET",
        path: "/seller/brand-marks",
        responses: {
            200: zod_1.default.array(brandMark_1.BrandMarkSchema),
            401: schemas_1.ErrorSchema,
        },
    },
    createBrandMark: {
        method: "POST",
        path: "/seller/brand-marks",
        body: brandMark_1.BrandMarkSchema.omit({
            id: true,
            sellerId: true,
            status: true,
            verifiedAt: true,
            createdAt: true,
            updatedAt: true,
        }),
        responses: {
            201: brandMark_1.BrandMarkSchema,
            401: schemas_1.ErrorSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    updateBrandMark: {
        method: "PATCH",
        path: "/seller/brand-marks/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        body: brandMark_1.BrandMarkSchema.omit({
            id: true,
            sellerId: true,
            status: true,
            verifiedAt: true,
            createdAt: true,
            updatedAt: true,
        }).partial(),
        responses: {
            200: brandMark_1.BrandMarkSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    getBrandMark: {
        method: "GET",
        path: "/seller/brand-marks/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        responses: {
            200: brandMark_1.BrandMarkSchema,
            401: schemas_1.ErrorSchema,
            404: schemas_1.ErrorSchema,
        },
    },
});
