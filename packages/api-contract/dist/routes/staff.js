"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRouter = void 0;
var core_1 = require("@ts-rest/core");
var schemas_1 = require("../schemas");
var zod_1 = __importDefault(require("zod"));
var profile_1 = require("../schemas/profile");
var c = (0, core_1.initContract)();
exports.staffRouter = c.router({
    getProfile: {
        method: "GET",
        path: "/staff/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        responses: {
            200: schemas_1.StaffProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    createProfile: {
        method: "POST",
        path: "/staff/profile",
        body: zod_1.default.object({
            fullName: zod_1.default.string(),
            userId: zod_1.default.number(),
            permissions: profile_1.StaffPermissionsSchema,
        }),
        responses: {
            201: schemas_1.StaffProfileSchema,
            400: schemas_1.ErrorSchema,
        },
    },
    updateProfile: {
        method: "PUT",
        path: "/staff/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        body: zod_1.default.object({
            fullName: zod_1.default.string().optional(),
            permissions: profile_1.StaffPermissionsSchema.optional(),
        }),
        responses: {
            200: schemas_1.StaffProfileSchema,
            404: schemas_1.ErrorSchema,
        },
    },
    deleteProfile: {
        method: "DELETE",
        path: "/staff/profile/:userId",
        pathParams: zod_1.default.object({
            userId: zod_1.default.string(),
        }),
        responses: {
            204: zod_1.default.null(),
            404: schemas_1.ErrorSchema,
        },
    },
});
