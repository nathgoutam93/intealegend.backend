"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var c = (0, core_1.initContract)();
exports.usersRouter = c.router({
    findAll: {
        method: "GET",
        path: "/users",
        query: zod_1.default.object({
            role: zod_1.default.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]).optional(),
            verified: zod_1.default.boolean().optional(),
            limit: zod_1.default.number().min(1).max(100).optional().default(10),
            offset: zod_1.default.number().min(0).optional().default(0),
        }),
        responses: {
            200: zod_1.default.object({
                data: schemas_1.UserSchema.array(),
                total: zod_1.default.number(),
                limit: zod_1.default.number(),
                offset: zod_1.default.number(),
            }),
            400: schemas_1.ErrorSchema,
        },
    },
    findOne: {
        method: "GET",
        path: "/users/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.UserSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    create: {
        method: "POST",
        path: "/users",
        body: zod_1.default.object({
            email: zod_1.default.string().email(),
            password: zod_1.default.string().min(8),
            role: zod_1.default.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]),
        }),
        responses: {
            201: schemas_1.UserSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    update: {
        method: "PUT",
        path: "/users/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        body: zod_1.default.object({
            email: zod_1.default.string().email().optional(),
            password: zod_1.default.string().min(8).optional(),
            role: zod_1.default.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]).optional(),
            verified: zod_1.default.boolean().optional(),
            uniqueIdentifier: zod_1.default.string().optional(),
        }),
        responses: {
            200: schemas_1.UserSchema,
            404: schemas_1.ErrorSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    delete: {
        method: "DELETE",
        path: "/users/:id",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        responses: {
            204: zod_1.default.null(),
            404: schemas_1.ErrorSchema,
        },
    },
    verify: {
        method: "POST",
        path: "/users/:id/verify",
        pathParams: zod_1.default.object({
            id: zod_1.default.string(),
        }),
        body: zod_1.default.object({
            uniqueIdentifier: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.UserSchema,
            404: schemas_1.ErrorSchema,
            400: schemas_1.ErrorSchema,
        },
    },
});
