"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordResponseSchema = exports.ResetPasswordRequestSchema = exports.ForgotPasswordResponseSchema = exports.ForgotPasswordRequestSchema = exports.LoginResponseSchema = exports.ErrorSchema = void 0;
var zod_1 = __importDefault(require("zod"));
var user_1 = require("./user");
exports.ErrorSchema = zod_1.default.object({
    message: zod_1.default.string(),
    code: zod_1.default.string(),
    timestamp: zod_1.default.string(),
});
exports.LoginResponseSchema = zod_1.default.object({
    accessToken: zod_1.default.string(),
    refreshToken: zod_1.default.string(),
    user: user_1.UserSchema,
});
// Forgot Password: Request by userId (buyer or seller)
exports.ForgotPasswordRequestSchema = zod_1.default.object({
    identifier: zod_1.default.string(),
});
exports.ForgotPasswordResponseSchema = zod_1.default.object({
    message: zod_1.default.string(), // e.g. "Reset link sent" or similar
});
// Reset Password: Set new password using userId
exports.ResetPasswordRequestSchema = zod_1.default.object({
    newPassword: zod_1.default.string().min(8),
    resetToken: zod_1.default.string(),
});
exports.ResetPasswordResponseSchema = zod_1.default.object({
    message: zod_1.default.string(), // e.g. "Password updated successfully"
});
