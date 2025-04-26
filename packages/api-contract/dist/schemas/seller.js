"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerStatsSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.SellerStatsSchema = zod_1.default.object({
    totalSales: zod_1.default.number(),
    products: zod_1.default.object({
        total: zod_1.default.number(),
        listed: zod_1.default.number(),
    }),
    totalOrders: zod_1.default.number(),
});
