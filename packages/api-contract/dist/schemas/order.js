"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.OrderItemSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.OrderItemSchema = zod_1.default.object({
    id: zod_1.default.number(),
    orderId: zod_1.default.number(),
    productId: zod_1.default.number(),
    quantity: zod_1.default.number().int(),
    unitPrice: zod_1.default.number(),
    totalPrice: zod_1.default.number(),
    totalWeight: zod_1.default.number(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
exports.OrderSchema = zod_1.default.object({
    id: zod_1.default.number(),
    buyerId: zod_1.default.number(),
    status: zod_1.default
        .enum([
        "PENDING",
        "ACCEPTED",
        "DESPATCHED",
        "ON_WAY",
        "DELIVERED",
        "CANCELLED",
    ])
        .default("PENDING"),
    totalAmount: zod_1.default.number(),
    estimatedWeight: zod_1.default.number(),
    deliveryCharges: zod_1.default.number().nullable(),
    gstAmount: zod_1.default.number(),
    otherCharges: zod_1.default.number().nullable(),
    roundOff: zod_1.default.number().nullable(),
    orderItems: zod_1.default.array(exports.OrderItemSchema),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
