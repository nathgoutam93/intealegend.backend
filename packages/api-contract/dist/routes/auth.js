"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var c = (0, core_1.initContract)();
exports.authRouter = c.router({
    login: {
        method: "POST",
        path: "/auth/login",
        body: zod_1.default.object({
            identifier: zod_1.default.string(), // Can be email or uniqueIdentifier
            password: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.LoginResponseSchema,
            400: schemas_1.ErrorSchema,
            401: schemas_1.ErrorSchema,
        },
    },
    register: {
        method: "POST",
        path: "/auth/register",
        body: zod_1.default.object({
            email: zod_1.default.string().email(),
            password: zod_1.default.string().min(8),
            role: zod_1.default.enum(["SELLER", "BUYER"]),
            profile: zod_1.default.union([
                schemas_1.SellerProfileSchema.omit({
                    id: true,
                    userId: true,
                    createdAt: true,
                    updatedAt: true,
                }),
                schemas_1.BuyerProfileSchema.omit({
                    id: true,
                    userId: true,
                    createdAt: true,
                    updatedAt: true,
                }),
            ]),
        }),
        responses: {
            201: schemas_1.UserSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    adminLogin: {
        method: "POST",
        path: "/auth/admin/login",
        body: zod_1.default.object({
            email: zod_1.default.string().email(),
            password: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.LoginResponseSchema,
            400: schemas_1.ErrorSchema,
            401: schemas_1.ErrorSchema,
        },
    },
});
