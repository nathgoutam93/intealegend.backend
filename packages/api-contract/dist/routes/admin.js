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
    stats: {
        method: "GET",
        path: "/admin/stats",
        responses: {
            200: schemas_1.AdminStatsSchema,
            401: schemas_1.ErrorSchema,
            403: schemas_1.ErrorSchema,
        },
    },
    listUsers: {
        method: "GET",
        path: "/admin/users",
        query: zod_1.default.object({
            role: zod_1.default.enum(["SELLER", "BUYER"]),
            verified: zod_1.default
                .string()
                .transform(function (str) { return str === "true"; })
                .optional(),
            limit: zod_1.default
                .string()
                .transform(function (val) { return parseInt(val); })
                .pipe(zod_1.default.number().min(1).max(100))
                .optional()
                .default("10"),
            offset: zod_1.default
                .string()
                .transform(function (val) { return parseInt(val); })
                .pipe(zod_1.default.number().min(0))
                .optional()
                .default("0"),
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
    verifyRegistration: {
        method: "POST",
        path: "/admin/users/verify",
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
