"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.ProductSchema = zod_1.default.object({
    id: zod_1.default.number(),
    name: zod_1.default.string(),
    description: zod_1.default.string().nullable(),
    imageUrl: zod_1.default.string().nullable(),
    grade: zod_1.default.string(),
    mark: zod_1.default.string(),
    invoiceNo: zod_1.default.string(),
    weightPerUnit: zod_1.default.number(),
    sampleWeight: zod_1.default.number().nullable(),
    productionMonth: zod_1.default.string(),
    location: zod_1.default.string(),
    origin: zod_1.default.string(),
    pricePerUnit: zod_1.default.number(),
    score: zod_1.default.number().nullable(),
    mbp: zod_1.default.number().nullable(),
    sellerId: zod_1.default.number(),
    cartItems: zod_1.default.array(zod_1.default.any()).optional(),
    orderItems: zod_1.default.array(zod_1.default.any()).optional(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
