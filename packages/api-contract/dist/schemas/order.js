"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = exports.OrderItemSchema = void 0;
var zod_1 = __importDefault(require("zod"));
var profile_1 = require("./profile");
var product_1 = require("./product");
exports.OrderItemSchema = zod_1.default.object({
    id: zod_1.default.number(),
    orderId: zod_1.default.number(),
    productId: zod_1.default.number(),
    product: product_1.ProductSchema,
    quantity: zod_1.default.number().int(),
    unitPrice: zod_1.default.number(),
    totalPrice: zod_1.default.number(),
    totalWeight: zod_1.default.number(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
exports.OrderSchema = zod_1.default.object({
    id: zod_1.default.number(),
    userId: zod_1.default.number(),
    buyer: profile_1.BuyerProfileSchema.pick({
        businessName: true,
        ownerName: true,
        transportName: true,
        gstNumber: true,
    }),
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
    subtotal: zod_1.default.number(),
    totalAmount: zod_1.default.number(),
    estimatedWeight: zod_1.default.number(),
    deliveryCharges: zod_1.default.number().nullable(),
    gstAmount: zod_1.default.number(),
    otherCharges: zod_1.default.number().nullable(),
    roundOff: zod_1.default.number().nullable(),
    orderItems: zod_1.default.array(exports.OrderItemSchema),
    invoice: zod_1.default.string().nullable(),
    invoice_url: zod_1.default.string().nullable(),
    cn: zod_1.default.string().nullable(),
    cn_url: zod_1.default.string().nullable(),
    transport: zod_1.default.string().nullable(),
    shippingAddress: zod_1.default.string(),
    shippingState: zod_1.default.string(),
    shippingDistrict: zod_1.default.string(),
    shippingPincode: zod_1.default.string(),
    shippingPhone: zod_1.default.string(),
    shippingEmail: zod_1.default.string().nullable(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
