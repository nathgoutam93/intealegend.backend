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
exports.contract = void 0;
var core_1 = require("@ts-rest/core");
var zod_1 = __importDefault(require("zod"));
var c = (0, core_1.initContract)();
// Shared error schema
var ErrorSchema = zod_1.default.object({
    message: zod_1.default.string(),
    code: zod_1.default.string(),
    timestamp: zod_1.default.string(),
});
// Base user schema
var UserSchema = zod_1.default.object({
    id: zod_1.default.number(),
    email: zod_1.default.string().email(),
    role: zod_1.default.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]),
    verified: zod_1.default.boolean(),
    uniqueIdentifier: zod_1.default.string().nullable(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
var AdminProfileSchema = zod_1.default.object({
    id: zod_1.default.number(),
    fullName: zod_1.default.string(),
    userId: zod_1.default.number(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
var StaffPermissionsSchema = zod_1.default.object({
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
var StaffProfileSchema = zod_1.default.object({
    id: zod_1.default.number(),
    fullName: zod_1.default.string(),
    permissions: StaffPermissionsSchema,
    userId: zod_1.default.number(),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
});
// Common schemas that are shared between profiles
var BusinessInfoSchema = zod_1.default.object({
    businessName: zod_1.default.string(),
    businessType: zod_1.default.string(),
    ownerName: zod_1.default.string(),
});
var AddressInfoSchema = zod_1.default.object({
    address: zod_1.default.string(),
    state: zod_1.default.string(),
    district: zod_1.default.string(),
    pincode: zod_1.default.string(),
});
var ContactInfoSchema = zod_1.default.object({
    phone: zod_1.default.string(),
    email: zod_1.default.string().email(),
    secondaryContactName: zod_1.default.string().nullable(),
    secondaryContactDesignation: zod_1.default.string().nullable(),
    secondaryContactNumber: zod_1.default.string().nullable(),
});
var BusinessDocumentsSchema = zod_1.default.object({
    panNumber: zod_1.default.string(),
    panCard: zod_1.default.string().nullable(),
    gstNumber: zod_1.default.string(),
    gstCertificate: zod_1.default.string().nullable(),
    fssaiNumber: zod_1.default.string().nullable(),
    fssaiLicense: zod_1.default.string().nullable(),
});
var BankingInfoSchema = zod_1.default.object({
    bankAccountNumber: zod_1.default.string(),
    bankIfscCode: zod_1.default.string(),
});
// Profile schemas
var SellerProfileSchema = zod_1.default.object(__assign(__assign(__assign(__assign(__assign(__assign({ id: zod_1.default.number() }, BusinessInfoSchema.shape), AddressInfoSchema.shape), ContactInfoSchema.shape), BusinessDocumentsSchema.shape), BankingInfoSchema.shape), { tmcoNumber: zod_1.default.string().nullable(), cancelledCheque: zod_1.default.string().nullable(), transportName: zod_1.default.string().nullable(), brandName: zod_1.default.string().nullable(), brandLogo: zod_1.default.string().nullable(), brandCertificate: zod_1.default.string().nullable(), userId: zod_1.default.number(), createdAt: zod_1.default.date(), updatedAt: zod_1.default.date() }));
var BuyerProfileSchema = zod_1.default.object(__assign(__assign(__assign(__assign(__assign(__assign({ id: zod_1.default.number() }, BusinessInfoSchema.shape), AddressInfoSchema.shape), ContactInfoSchema.shape), BusinessDocumentsSchema.shape), BankingInfoSchema.shape), { userId: zod_1.default.number(), createdAt: zod_1.default.date(), updatedAt: zod_1.default.date() }));
var LoginResponseSchema = zod_1.default.object({
    accessToken: zod_1.default.string(),
    user: UserSchema,
});
// Define the pending user schema with role-specific profiles
var PendingUserSchema = zod_1.default.object({
    id: zod_1.default.number(),
    email: zod_1.default.string(),
    role: zod_1.default.enum(["SELLER", "BUYER"]),
    verified: zod_1.default.boolean(),
    createdAt: zod_1.default.string(),
    profile: zod_1.default.discriminatedUnion("role", [
        zod_1.default.object(__assign(__assign(__assign(__assign(__assign(__assign({ role: zod_1.default.literal("SELLER") }, BusinessInfoSchema.shape), AddressInfoSchema.shape), ContactInfoSchema.shape), BusinessDocumentsSchema.shape), BankingInfoSchema.shape), { tmcoNumber: zod_1.default.string().nullable(), cancelledCheque: zod_1.default.string().nullable(), transportName: zod_1.default.string().nullable(), brandName: zod_1.default.string().nullable(), brandLogo: zod_1.default.string().nullable(), brandCertificate: zod_1.default.string().nullable() })),
        zod_1.default.object(__assign(__assign(__assign(__assign(__assign({ role: zod_1.default.literal("BUYER") }, BusinessInfoSchema.shape), AddressInfoSchema.shape), ContactInfoSchema.shape), BusinessDocumentsSchema.shape), BankingInfoSchema.shape)),
    ]),
});
exports.contract = c.router({
    users: {
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
                    data: UserSchema.array(),
                    total: zod_1.default.number(),
                    limit: zod_1.default.number(),
                    offset: zod_1.default.number(),
                }),
                400: ErrorSchema,
            },
        },
        getPendingRegistrations: {
            method: "GET",
            path: "/users/pending",
            responses: {
                200: zod_1.default.array(PendingUserSchema),
                500: ErrorSchema,
            },
        },
        findOne: {
            method: "GET",
            path: "/users/:id",
            pathParams: zod_1.default.object({
                id: zod_1.default.string(),
            }),
            responses: {
                200: UserSchema,
                404: ErrorSchema,
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
                201: UserSchema,
                400: ErrorSchema,
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
                200: UserSchema,
                404: ErrorSchema,
                400: ErrorSchema,
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
                404: ErrorSchema,
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
                200: UserSchema,
                404: ErrorSchema,
                400: ErrorSchema,
            },
        },
        verifyRegistration: {
            method: "POST",
            path: "/users/verify",
            body: zod_1.default.object({
                userIds: zod_1.default.number().array(),
            }),
            responses: {
                200: zod_1.default.object({
                    message: zod_1.default.string(),
                    verifiedUsers: zod_1.default.number(),
                }),
            },
        },
    },
    admin: {
        getProfile: {
            method: "GET",
            path: "/admin/profile/:userId",
            pathParams: zod_1.default.object({
                userId: zod_1.default.string(),
            }),
            responses: {
                200: AdminProfileSchema,
                404: ErrorSchema,
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
                201: AdminProfileSchema,
                400: ErrorSchema,
            },
        },
    },
    sellers: {
        getProfile: {
            method: "GET",
            path: "/sellers/profile/:userId",
            pathParams: zod_1.default.object({
                userId: zod_1.default.string(),
            }),
            responses: {
                200: SellerProfileSchema,
                404: ErrorSchema,
            },
        },
        createProfile: {
            method: "POST",
            path: "/sellers/profile",
            body: SellerProfileSchema.omit({
                id: true,
                createdAt: true,
                updatedAt: true,
            }),
            responses: {
                201: SellerProfileSchema,
                400: ErrorSchema,
            },
        },
        updateProfile: {
            method: "PUT",
            path: "/sellers/profile/:userId",
            pathParams: zod_1.default.object({
                userId: zod_1.default.string(),
            }),
            body: SellerProfileSchema.omit({
                id: true,
                userId: true,
                createdAt: true,
                updatedAt: true,
            }).partial(),
            responses: {
                200: SellerProfileSchema,
                404: ErrorSchema,
            },
        },
    },
    buyers: {
        getProfile: {
            method: "GET",
            path: "/buyers/profile/:userId",
            pathParams: zod_1.default.object({
                userId: zod_1.default.string(),
            }),
            responses: {
                200: BuyerProfileSchema,
                404: ErrorSchema,
            },
        },
        createProfile: {
            method: "POST",
            path: "/buyers/profile",
            body: BuyerProfileSchema.omit({
                id: true,
                createdAt: true,
                updatedAt: true,
            }),
            responses: {
                201: BuyerProfileSchema,
                400: ErrorSchema,
            },
        },
        updateProfile: {
            method: "PUT",
            path: "/buyers/profile/:userId",
            pathParams: zod_1.default.object({
                userId: zod_1.default.string(),
            }),
            body: BuyerProfileSchema.omit({
                id: true,
                userId: true,
                createdAt: true,
                updatedAt: true,
            }).partial(),
            responses: {
                200: BuyerProfileSchema,
                404: ErrorSchema,
            },
        },
    },
    staff: {
        getProfile: {
            method: "GET",
            path: "/staff/profile/:userId",
            pathParams: zod_1.default.object({
                userId: zod_1.default.string(),
            }),
            responses: {
                200: StaffProfileSchema,
                404: ErrorSchema,
            },
        },
        createProfile: {
            method: "POST",
            path: "/staff/profile",
            body: zod_1.default.object({
                fullName: zod_1.default.string(),
                userId: zod_1.default.number(),
                permissions: StaffPermissionsSchema,
            }),
            responses: {
                201: StaffProfileSchema,
                400: ErrorSchema,
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
                permissions: StaffPermissionsSchema.optional(),
            }),
            responses: {
                200: StaffProfileSchema,
                404: ErrorSchema,
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
                404: ErrorSchema,
            },
        },
    },
    auth: {
        login: {
            method: "POST",
            path: "/auth/login",
            body: zod_1.default.object({
                identifier: zod_1.default.string(), // Can be email or uniqueIdentifier
                password: zod_1.default.string(),
            }),
            responses: {
                200: LoginResponseSchema,
                400: ErrorSchema,
                401: ErrorSchema,
            },
        },
        register: {
            method: "POST",
            path: "/auth/register",
            body: zod_1.default.object({
                email: zod_1.default.string().email(),
                password: zod_1.default.string().min(8),
                role: zod_1.default.enum(["SELLER", "BUYER"]),
                profile: zod_1.default.union([
                    SellerProfileSchema.omit({
                        id: true,
                        userId: true,
                        createdAt: true,
                        updatedAt: true,
                    }),
                    BuyerProfileSchema.omit({
                        id: true,
                        userId: true,
                        createdAt: true,
                        updatedAt: true,
                    }),
                ]),
            }),
            responses: {
                201: UserSchema,
                400: ErrorSchema,
            },
        },
        adminLogin: {
            method: "POST",
            path: "/auth/admin/login",
            body: zod_1.default.object({
                email: zod_1.default.string().email(),
                password: zod_1.default.string(),
            }),
            responses: {
                200: LoginResponseSchema,
                400: ErrorSchema,
                401: ErrorSchema,
            },
        },
    },
}, { pathPrefix: "/api" });
