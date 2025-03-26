"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellersRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var c = (0, core_1.initContract)();
exports.sellersRouter = c.router({
    getProfile: {
        method: "GET",
        path: "/sellers/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.SellerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    createProfile: {
        method: "POST",
        path: "/sellers/profile",
        body: schemas_1.SellerProfileSchema.omit({
            id: true,
            createdAt: true,
            updatedAt: true,
        }),
        responses: {
            201: schemas_1.SellerProfileSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    updateProfile: {
        method: "PUT",
        path: "/sellers/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        body: schemas_1.SellerProfileSchema.omit({
            id: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
        }).partial(),
        responses: {
            200: schemas_1.SellerProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
});
