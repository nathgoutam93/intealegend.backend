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
exports.StaffProfileSchema = exports.StaffPermissionsSchema = exports.AdminProfileSchema = exports.BuyerProfileSchema = exports.SellerProfileSchema = exports.BankingInfoSchema = exports.BusinessDocumentsSchema = exports.ContactInfoSchema = exports.AddressInfoSchema = exports.BusinessInfoSchema = void 0;
var zod_1 = __importDefault(require("zod"));
exports.BusinessInfoSchema = zod_1.default.object({
    businessName: zod_1.default.string(),
    businessType: zod_1.default.string(),
    ownerName: zod_1.default.string(),
});
exports.AddressInfoSchema = zod_1.default.object({
    address: zod_1.default.string(),
    state: zod_1.default.string(),
    district: zod_1.default.string(),
    pincode: zod_1.default.string(),
});
exports.ContactInfoSchema = zod_1.default.object({
    phone: zod_1.default.string(),
    email: zod_1.default.string().email(),
    secondaryContactName: zod_1.default.string().nullable(),
    secondaryContactDesignation: zod_1.default.string().nullable(),
    secondaryContactNumber: zod_1.default.string().nullable(),
});
exports.BusinessDocumentsSchema = zod_1.default.object({
    panNumber: zod_1.default.string(),
    panCard: zod_1.default.string().nullable(),
    gstNumber: zod_1.default.string(),
    gstCertificate: zod_1.default.string().nullable(),
    fssaiNumber: zod_1.default.string().nullable(),
    fssaiLicense: zod_1.default.string().nullable(),
});
exports.BankingInfoSchema = zod_1.default.object({
    bankAccountNumber: zod_1.default.string(),
    bankIfscCode: zod_1.default.string(),
});
exports.SellerProfileSchema = zod_1.default.object(__assign(__assign(__assign(__assign(__assign(__assign({ id: zod_1.default.number() }, exports.BusinessInfoSchema.shape), exports.AddressInfoSchema.shape), exports.ContactInfoSchema.shape), exports.BusinessDocumentsSchema.shape), exports.BankingInfoSchema.shape), { tmcoNumber: zod_1.default.string().nullable(), cancelledCheque: zod_1.default.string().nullable(), brandName: zod_1.default.string().nullable(), brandLogo: zod_1.default.string().nullable(), brandCertificate: zod_1.default.string().nullable(), userId: zod_1.default.number(), createdAt: zod_1.default.date(), updatedAt: zod_1.default.date() }));
exports.BuyerProfileSchema = zod_1.default.object(__assign(__assign(__assign(__assign(__assign(__assign({ id: zod_1.default.number() }, exports.BusinessInfoSchema.shape), exports.AddressInfoSchema.shape), exports.ContactInfoSchema.shape), exports.BusinessDocumentsSchema.shape), exports.BankingInfoSchema.shape), { transportName: zod_1.default.string().nullable(), userId: zod_1.default.number(), createdAt: zod_1.default.date(), updatedAt: zod_1.default.date() }));
exports.AdminProfileSchema = zod_1.default.object({
    id: zod_1.default.number(),
    fullName: zod_1.default.string(),
    userId: zod_1.default.number(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
exports.StaffPermissionsSchema = zod_1.default.object({
    users: zod_1.default.object({
        read: zod_1.default.boolean(),
        write: zod_1.default.boolean(),
        delete: zod_1.default.boolean(),
    }),
    sellers: zod_1.default.object({
        read: zod_1.default.boolean(),
        write: zod_1.default.boolean(),
        verify: zod_1.default.boolean(),
    }),
    buyers: zod_1.default.object({
        read: zod_1.default.boolean(),
        write: zod_1.default.boolean(),
        verify: zod_1.default.boolean(),
    }),
    staff: zod_1.default.object({
        read: zod_1.default.boolean(),
        write: zod_1.default.boolean(),
        delete: zod_1.default.boolean(),
    }),
});
exports.StaffProfileSchema = zod_1.default.object({
    id: zod_1.default.number(),
    fullName: zod_1.default.string(),
    permissions: exports.StaffPermissionsSchema,
    userId: zod_1.default.number(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
