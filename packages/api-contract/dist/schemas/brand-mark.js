"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandMarkSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.BrandMarkSchema = zod_1.default.object({
    id: zod_1.default.number(),
    name: zod_1.default.string(),
    logo: zod_1.default.string().nullable(),
    certificate: zod_1.default.string().nullable(),
    isDefault: zod_1.default.boolean(),
    status: zod_1.default.enum(["PENDING", "APPROVED", "REJECTED"]),
    verifiedAt: zod_1.default.date().nullable(),
});
