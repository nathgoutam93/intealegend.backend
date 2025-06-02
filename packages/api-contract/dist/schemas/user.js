"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingUserSchema = exports.UserSchema = void 0;
var zod_1 = __importDefault(require("zod"));
var profile_1 = require("./profile");
exports.UserSchema = zod_1.default.object({
    id: zod_1.default.number(),
    email: zod_1.default.string().email(),
    role: zod_1.default.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]),
    superSeller: zod_1.default.boolean(),
    verified: zod_1.default.boolean(),
    isSuspended: zod_1.default.boolean(),
    uniqueIdentifier: zod_1.default.string().nullable(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
exports.PendingUserSchema = zod_1.default.object({
    id: zod_1.default.number(),
    email: zod_1.default.string(),
    role: zod_1.default.enum(["SELLER", "BUYER"]),
    verified: zod_1.default.boolean(),
    createdAt: zod_1.default.string(),
    profile: zod_1.default.discriminatedUnion("role", [
        zod_1.default.object(__assign(__assign(__assign(__assign(__assign(__assign({ role: zod_1.default.literal("SELLER") }, profile_1.BusinessInfoSchema.shape), profile_1.AddressInfoSchema.shape), profile_1.ContactInfoSchema.shape), profile_1.BusinessDocumentsSchema.shape), profile_1.BankingInfoSchema.shape), { tmcoNumber: zod_1.default.string().nullable(), cancelledCheque: zod_1.default.string().nullable(), brandName: zod_1.default.string().nullable(), brandLogo: zod_1.default.string().nullable(), brandCertificate: zod_1.default.string().nullable() })),
        zod_1.default.object(__assign(__assign(__assign(__assign(__assign(__assign({ role: zod_1.default.literal("BUYER") }, profile_1.BusinessInfoSchema.shape), profile_1.AddressInfoSchema.shape), profile_1.ContactInfoSchema.shape), profile_1.BusinessDocumentsSchema.shape), profile_1.BankingInfoSchema.shape), { transportName: zod_1.default.string().nullable() })),
    ]),
});
