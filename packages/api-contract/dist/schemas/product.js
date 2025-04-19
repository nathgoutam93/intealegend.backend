"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
// packages/api-contract/src/schemas/product.ts
var zod_1 = __importDefault(require("zod"));
var brandMark_1 = require("./brandMark");
exports.ProductSchema = zod_1.default.object({
    id: zod_1.default.number(),
    name: zod_1.default.string().nullable(),
    description: zod_1.default.string().nullable(),
    imageUrl: zod_1.default.string().nullable(),
    mark: zod_1.default.number(),
    grade: zod_1.default.string(),
    invoiceNo: zod_1.default.string(),
    weightPerUnit: zod_1.default.number(),
    sampleWeight: zod_1.default.number().nullable(),
    productionMonth: zod_1.default.string(),
    location: zod_1.default.string(),
    origin: zod_1.default.string(),
    pricePerUnit: zod_1.default.number(),
    mbp: zod_1.default.number().nullable(),
    score: zod_1.default.number(),
    appearanceScore: zod_1.default.number(),
    liquorScore: zod_1.default.number(),
    tasteScore: zod_1.default.number(),
    infusionScore: zod_1.default.number(),
    gradingScore: zod_1.default.number(),
    volumeScore: zod_1.default.number(),
    status: zod_1.default.enum(["PENDING", "APPROVED", "REJECTED"]),
    isLive: zod_1.default.boolean(),
    sellerId: zod_1.default.number(),
    brandMark: brandMark_1.BrandMarkSchema,
    cartItems: zod_1.default.array(zod_1.default.any()).optional(),
    orderItems: zod_1.default.array(zod_1.default.any()).optional(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
