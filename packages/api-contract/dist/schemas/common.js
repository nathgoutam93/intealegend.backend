"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponseSchema = exports.ErrorSchema = void 0;
var zod_1 = __importDefault(require("zod"));
var user_1 = require("./user");
exports.ErrorSchema = zod_1.default.object({
    message: zod_1.default.string(),
    code: zod_1.default.string(),
    timestamp: zod_1.default.string(),
});
exports.LoginResponseSchema = zod_1.default.object({
    accessToken: zod_1.default.string(),
    user: user_1.UserSchema,
});
