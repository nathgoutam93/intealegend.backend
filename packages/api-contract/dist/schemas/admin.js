"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardStatsSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.DashboardStatsSchema = zod_1.default.object({
    totalUsers: zod_1.default.number(),
    totalSellers: zod_1.default.number(),
    totalBuyers: zod_1.default.number(),
    totalPendingVerifications: zod_1.default.number(),
});
