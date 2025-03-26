"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyersRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var c = (0, core_1.initContract)();
exports.buyersRouter = c.router({
    getProfile: {
        method: "GET",
        path: "/buyers/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.BuyerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    createProfile: {
        method: "POST",
        path: "/buyers/profile",
        body: schemas_1.BuyerProfileSchema.omit({
            id: true,
            createdAt: true,
            updatedAt: true,
        }),
        responses: {
            201: schemas_1.BuyerProfileSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    updateProfile: {
        method: "PUT",
        path: "/buyers/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        body: schemas_1.BuyerProfileSchema.omit({
            id: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
        }).partial(),
        responses: {
            200: schemas_1.BuyerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
});
