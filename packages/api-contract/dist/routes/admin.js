"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var c = (0, core_1.initContract)();
exports.adminRouter = c.router({
    getProfile: {
        method: "GET",
        path: "/admin/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.AdminProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    createProfile: {
        method: "POST",
        path: "/admin/profile",
        body: zod_1.default.object({
            fullName: zod_1.default.string(),
            userId: zod_1.default.number(),
        }),
        responses: {
            201: schemas_1.AdminProfileSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    stats: {
        method: "GET",
        path: "/admin/stats",
        responses: {
            200: schemas_1.DashboardStatsSchema,
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
        },
    },
    listVerifiedUsers: {
        method: "GET",
        path: "/admin/users/verified",
        query: zod_1.default.object({
            role: zod_1.default.enum(["SELLER", "BUYER"]),
            limit: zod_1.default.number().min(1).max(100).optional().default(10),
            offset: zod_1.default.number().min(0).optional().default(0),
        }),
        responses: {
            200: zod_1.default.object({
                data: zod_1.default.discriminatedUnion("role", [
                    zod_1.default.object({
                        role: zod_1.default.literal("SELLER"),
                        users: schemas_1.UserSchema.extend({
                            profile: schemas_1.SellerProfileSchema,
                        }).array(),
                    }),
                    zod_1.default.object({
                        role: zod_1.default.literal("BUYER"),
                        users: schemas_1.UserSchema.extend({
                            profile: schemas_1.BuyerProfileSchema,
                        }).array(),
                    }),
                ]),
                total: zod_1.default.number(),
                limit: zod_1.default.number(),
                offset: zod_1.default.number(),
            }),
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    listPendingVerifications: {
        method: "GET",
        path: "/admin/verifications/pending",
        query: zod_1.default.object({
            role: zod_1.default.enum(["SELLER", "BUYER"]),
            limit: zod_1.default.number().min(1).max(100).optional().default(10),
            offset: zod_1.default.number().min(0).optional().default(0),
        }),
        responses: {
            200: zod_1.default.object({
                data: zod_1.default.discriminatedUnion("role", [
                    zod_1.default.object({
                        role: zod_1.default.literal("SELLER"),
                        users: schemas_1.PendingUserSchema.array(),
                    }),
                    zod_1.default.object({
                        role: zod_1.default.literal("BUYER"),
                        users: schemas_1.PendingUserSchema.array(),
                    }),
                ]),
                total: zod_1.default.number(),
                limit: zod_1.default.number(),
                offset: zod_1.default.number(),
            }),
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    verifyRegistration: {
        method: "POST",
        path: "/admin/verify-users",
        body: zod_1.default.object({
            userIds: zod_1.default.number().array(),
        }),
        responses: {
            200: zod_1.default.object({
                message: zod_1.default.string(),
                verifiedUsers: zod_1.default.number(),
            }),
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
        },
    },
});
