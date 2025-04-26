"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminStatsSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.AdminStatsSchema = zod_1.default.object({
    users: zod_1.default.object({
        total: zod_1.default.number(),
        seller: zod_1.default.number(),
        buyer: zod_1.default.number(),
        pending: zod_1.default.number(),
    }),
    products: zod_1.default.object({
        total: zod_1.default.number(),
        listed: zod_1.default.number(),
        pending: zod_1.default.number(),
    }),
    orders: zod_1.default.object({
        total: zod_1.default.number(),
        pending: zod_1.default.number(),
    }),
});
