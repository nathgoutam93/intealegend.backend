import { UserSchema, PendingUserSchema, SellerProfileSchema, BuyerProfileSchema, ProductSchema } from "./schemas";
import z from "zod";
export declare const contract: {
    auth: {
        login: {
            method: "POST";
            body: z.ZodObject<{
                identifier: z.ZodString;
                password: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                password: string;
                identifier: string;
            }, {
                password: string;
                identifier: string;
            }>;
            path: "/api/auth/login";
            responses: {
                200: z.ZodObject<{
                    accessToken: z.ZodString;
                    refreshToken: z.ZodString;
                    user: z.ZodObject<{
                        id: z.ZodNumber;
                        email: z.ZodString;
                        role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                        verified: z.ZodBoolean;
                        uniqueIdentifier: z.ZodNullable<z.ZodString>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }, {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    accessToken: string;
                    refreshToken: string;
                    user: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    };
                }, {
                    accessToken: string;
                    refreshToken: string;
                    user: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    };
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        register: {
            method: "POST";
            body: z.ZodObject<{
                email: z.ZodString;
                password: z.ZodString;
                role: z.ZodEnum<["SELLER", "BUYER"]>;
                profile: z.ZodUnion<[z.ZodObject<Omit<{
                    tmcoNumber: z.ZodNullable<z.ZodString>;
                    cancelledCheque: z.ZodNullable<z.ZodString>;
                    transportName: z.ZodNullable<z.ZodString>;
                    brandName: z.ZodNullable<z.ZodString>;
                    brandLogo: z.ZodNullable<z.ZodString>;
                    brandCertificate: z.ZodNullable<z.ZodString>;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                    bankAccountNumber: z.ZodString;
                    bankIfscCode: z.ZodString;
                    panNumber: z.ZodString;
                    panCard: z.ZodNullable<z.ZodString>;
                    gstNumber: z.ZodString;
                    gstCertificate: z.ZodNullable<z.ZodString>;
                    fssaiNumber: z.ZodNullable<z.ZodString>;
                    fssaiLicense: z.ZodNullable<z.ZodString>;
                    phone: z.ZodString;
                    email: z.ZodString;
                    secondaryContactName: z.ZodNullable<z.ZodString>;
                    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                    secondaryContactNumber: z.ZodNullable<z.ZodString>;
                    address: z.ZodString;
                    state: z.ZodString;
                    district: z.ZodString;
                    pincode: z.ZodString;
                    businessName: z.ZodString;
                    businessType: z.ZodString;
                    ownerName: z.ZodString;
                    id: z.ZodNumber;
                }, "id" | "userId" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                }, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                }>, z.ZodObject<Omit<{
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                    bankAccountNumber: z.ZodString;
                    bankIfscCode: z.ZodString;
                    panNumber: z.ZodString;
                    panCard: z.ZodNullable<z.ZodString>;
                    gstNumber: z.ZodString;
                    gstCertificate: z.ZodNullable<z.ZodString>;
                    fssaiNumber: z.ZodNullable<z.ZodString>;
                    fssaiLicense: z.ZodNullable<z.ZodString>;
                    phone: z.ZodString;
                    email: z.ZodString;
                    secondaryContactName: z.ZodNullable<z.ZodString>;
                    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                    secondaryContactNumber: z.ZodNullable<z.ZodString>;
                    address: z.ZodString;
                    state: z.ZodString;
                    district: z.ZodString;
                    pincode: z.ZodString;
                    businessName: z.ZodString;
                    businessType: z.ZodString;
                    ownerName: z.ZodString;
                    id: z.ZodNumber;
                }, "id" | "userId" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                }, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                }>]>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                role: "SELLER" | "BUYER";
                profile: {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                } | {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                };
                password: string;
            }, {
                email: string;
                role: "SELLER" | "BUYER";
                profile: {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                } | {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                };
                password: string;
            }>;
            path: "/api/auth/register";
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                    verified: z.ZodBoolean;
                    uniqueIdentifier: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        adminLogin: {
            method: "POST";
            body: z.ZodObject<{
                email: z.ZodString;
                password: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                email: string;
                password: string;
            }, {
                email: string;
                password: string;
            }>;
            path: "/api/auth/admin/login";
            responses: {
                200: z.ZodObject<{
                    accessToken: z.ZodString;
                    refreshToken: z.ZodString;
                    user: z.ZodObject<{
                        id: z.ZodNumber;
                        email: z.ZodString;
                        role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                        verified: z.ZodBoolean;
                        uniqueIdentifier: z.ZodNullable<z.ZodString>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }, {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    accessToken: string;
                    refreshToken: string;
                    user: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    };
                }, {
                    accessToken: string;
                    refreshToken: string;
                    user: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    };
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
    };
    users: {
        findAll: {
            query: z.ZodObject<{
                role: z.ZodOptional<z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>>;
                verified: z.ZodOptional<z.ZodBoolean>;
                limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
                offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                limit: number;
                offset: number;
                role?: "SELLER" | "BUYER" | "ADMIN" | "STAFF" | undefined;
                verified?: boolean | undefined;
            }, {
                role?: "SELLER" | "BUYER" | "ADMIN" | "STAFF" | undefined;
                verified?: boolean | undefined;
                limit?: number | undefined;
                offset?: number | undefined;
            }>;
            method: "GET";
            path: "/api/users";
            responses: {
                200: z.ZodObject<{
                    data: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        email: z.ZodString;
                        role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                        verified: z.ZodBoolean;
                        uniqueIdentifier: z.ZodNullable<z.ZodString>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }, {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }>, "many">;
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    offset: number;
                    data: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }[];
                    total: number;
                }, {
                    limit: number;
                    offset: number;
                    data: {
                        email: string;
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                        verified: boolean;
                        uniqueIdentifier: string | null;
                    }[];
                    total: number;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        findOne: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "GET";
            path: "/api/users/:id";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                    verified: z.ZodBoolean;
                    uniqueIdentifier: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        create: {
            method: "POST";
            body: z.ZodObject<{
                email: z.ZodString;
                password: z.ZodString;
                role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
            }, "strip", z.ZodTypeAny, {
                email: string;
                role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                password: string;
            }, {
                email: string;
                role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                password: string;
            }>;
            path: "/api/users";
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                    verified: z.ZodBoolean;
                    uniqueIdentifier: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        update: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "PUT";
            body: z.ZodObject<{
                email: z.ZodOptional<z.ZodString>;
                password: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>>;
                verified: z.ZodOptional<z.ZodBoolean>;
                uniqueIdentifier: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                email?: string | undefined;
                role?: "SELLER" | "BUYER" | "ADMIN" | "STAFF" | undefined;
                verified?: boolean | undefined;
                uniqueIdentifier?: string | undefined;
                password?: string | undefined;
            }, {
                email?: string | undefined;
                role?: "SELLER" | "BUYER" | "ADMIN" | "STAFF" | undefined;
                verified?: boolean | undefined;
                uniqueIdentifier?: string | undefined;
                password?: string | undefined;
            }>;
            path: "/api/users/:id";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                    verified: z.ZodBoolean;
                    uniqueIdentifier: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        delete: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "DELETE";
            path: "/api/users/:id";
            responses: {
                204: z.ZodNull;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        verify: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "POST";
            body: z.ZodObject<{
                uniqueIdentifier: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                uniqueIdentifier: string;
            }, {
                uniqueIdentifier: string;
            }>;
            path: "/api/users/:id/verify";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                    verified: z.ZodBoolean;
                    uniqueIdentifier: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    verified: boolean;
                    uniqueIdentifier: string | null;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
    };
    admin: {
        stats: {
            method: "GET";
            path: "/api/admin/stats";
            responses: {
                200: z.ZodObject<{
                    totalUsers: z.ZodNumber;
                    totalSellers: z.ZodNumber;
                    totalBuyers: z.ZodNumber;
                    totalPendingVerifications: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    totalUsers: number;
                    totalSellers: number;
                    totalBuyers: number;
                    totalPendingVerifications: number;
                }, {
                    totalUsers: number;
                    totalSellers: number;
                    totalBuyers: number;
                    totalPendingVerifications: number;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        listUsers: {
            query: z.ZodObject<{
                role: z.ZodEnum<["SELLER", "BUYER"]>;
                verified: z.ZodOptional<z.ZodEffects<z.ZodString, boolean, string>>;
                limit: z.ZodDefault<z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>>;
                offset: z.ZodDefault<z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, number, string>, z.ZodNumber>>>;
            }, "strip", z.ZodTypeAny, {
                role: "SELLER" | "BUYER";
                limit: number;
                offset: number;
                verified?: boolean | undefined;
            }, {
                role: "SELLER" | "BUYER";
                verified?: string | undefined;
                limit?: string | undefined;
                offset?: string | undefined;
            }>;
            method: "GET";
            path: "/api/admin/users";
            responses: {
                200: z.ZodObject<{
                    data: z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
                        role: z.ZodLiteral<"SELLER">;
                        users: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                            id: z.ZodNumber;
                            email: z.ZodString;
                            role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                            verified: z.ZodBoolean;
                            uniqueIdentifier: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodDate;
                            updatedAt: z.ZodDate;
                        }, {
                            profile: z.ZodObject<{
                                tmcoNumber: z.ZodNullable<z.ZodString>;
                                cancelledCheque: z.ZodNullable<z.ZodString>;
                                transportName: z.ZodNullable<z.ZodString>;
                                brandName: z.ZodNullable<z.ZodString>;
                                brandLogo: z.ZodNullable<z.ZodString>;
                                brandCertificate: z.ZodNullable<z.ZodString>;
                                userId: z.ZodNumber;
                                createdAt: z.ZodDate;
                                updatedAt: z.ZodDate;
                                bankAccountNumber: z.ZodString;
                                bankIfscCode: z.ZodString;
                                panNumber: z.ZodString;
                                panCard: z.ZodNullable<z.ZodString>;
                                gstNumber: z.ZodString;
                                gstCertificate: z.ZodNullable<z.ZodString>;
                                fssaiNumber: z.ZodNullable<z.ZodString>;
                                fssaiLicense: z.ZodNullable<z.ZodString>;
                                phone: z.ZodString;
                                email: z.ZodString;
                                secondaryContactName: z.ZodNullable<z.ZodString>;
                                secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                                secondaryContactNumber: z.ZodNullable<z.ZodString>;
                                address: z.ZodString;
                                state: z.ZodString;
                                district: z.ZodString;
                                pincode: z.ZodString;
                                businessName: z.ZodString;
                                businessType: z.ZodString;
                                ownerName: z.ZodString;
                                id: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            }, {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            }>;
                        }>, "strip", z.ZodTypeAny, {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }, {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "SELLER";
                    }, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "SELLER";
                    }>, z.ZodObject<{
                        role: z.ZodLiteral<"BUYER">;
                        users: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
                            id: z.ZodNumber;
                            email: z.ZodString;
                            role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                            verified: z.ZodBoolean;
                            uniqueIdentifier: z.ZodNullable<z.ZodString>;
                            createdAt: z.ZodDate;
                            updatedAt: z.ZodDate;
                        }, {
                            profile: z.ZodObject<{
                                userId: z.ZodNumber;
                                createdAt: z.ZodDate;
                                updatedAt: z.ZodDate;
                                bankAccountNumber: z.ZodString;
                                bankIfscCode: z.ZodString;
                                panNumber: z.ZodString;
                                panCard: z.ZodNullable<z.ZodString>;
                                gstNumber: z.ZodString;
                                gstCertificate: z.ZodNullable<z.ZodString>;
                                fssaiNumber: z.ZodNullable<z.ZodString>;
                                fssaiLicense: z.ZodNullable<z.ZodString>;
                                phone: z.ZodString;
                                email: z.ZodString;
                                secondaryContactName: z.ZodNullable<z.ZodString>;
                                secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                                secondaryContactNumber: z.ZodNullable<z.ZodString>;
                                address: z.ZodString;
                                state: z.ZodString;
                                district: z.ZodString;
                                pincode: z.ZodString;
                                businessName: z.ZodString;
                                businessType: z.ZodString;
                                ownerName: z.ZodString;
                                id: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            }, {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            }>;
                        }>, "strip", z.ZodTypeAny, {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }, {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "BUYER";
                    }, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "BUYER";
                    }>]>;
                    total: z.ZodNumber;
                    limit: z.ZodNumber;
                    offset: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    offset: number;
                    data: {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "SELLER";
                    } | {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "BUYER";
                    };
                    total: number;
                }, {
                    limit: number;
                    offset: number;
                    data: {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "SELLER";
                    } | {
                        users: {
                            email: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                            verified: boolean;
                            uniqueIdentifier: string | null;
                            profile: {
                                businessName: string;
                                businessType: string;
                                ownerName: string;
                                address: string;
                                state: string;
                                district: string;
                                pincode: string;
                                phone: string;
                                email: string;
                                secondaryContactName: string | null;
                                secondaryContactDesignation: string | null;
                                secondaryContactNumber: string | null;
                                panNumber: string;
                                panCard: string | null;
                                gstNumber: string;
                                gstCertificate: string | null;
                                fssaiNumber: string | null;
                                fssaiLicense: string | null;
                                bankAccountNumber: string;
                                bankIfscCode: string;
                                id: number;
                                userId: number;
                                createdAt: Date;
                                updatedAt: Date;
                            };
                        }[];
                        role: "BUYER";
                    };
                    total: number;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        verifyRegistration: {
            method: "POST";
            body: z.ZodObject<{
                userIds: z.ZodArray<z.ZodNumber, "many">;
            }, "strip", z.ZodTypeAny, {
                userIds: number[];
            }, {
                userIds: number[];
            }>;
            path: "/api/admin/users/verify";
            responses: {
                200: z.ZodObject<{
                    message: z.ZodString;
                    verifiedUsers: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                    verifiedUsers: number;
                }, {
                    message: string;
                    verifiedUsers: number;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
    };
    staff: {
        [x: string]: import("@ts-rest/core").AppRouter | import("@ts-rest/core").AppRoute;
    };
    sellers: {
        getProfile: {
            method: "GET";
            path: "/api/seller/profile";
            responses: {
                200: z.ZodObject<{
                    tmcoNumber: z.ZodNullable<z.ZodString>;
                    cancelledCheque: z.ZodNullable<z.ZodString>;
                    transportName: z.ZodNullable<z.ZodString>;
                    brandName: z.ZodNullable<z.ZodString>;
                    brandLogo: z.ZodNullable<z.ZodString>;
                    brandCertificate: z.ZodNullable<z.ZodString>;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                    bankAccountNumber: z.ZodString;
                    bankIfscCode: z.ZodString;
                    panNumber: z.ZodString;
                    panCard: z.ZodNullable<z.ZodString>;
                    gstNumber: z.ZodString;
                    gstCertificate: z.ZodNullable<z.ZodString>;
                    fssaiNumber: z.ZodNullable<z.ZodString>;
                    fssaiLicense: z.ZodNullable<z.ZodString>;
                    phone: z.ZodString;
                    email: z.ZodString;
                    secondaryContactName: z.ZodNullable<z.ZodString>;
                    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                    secondaryContactNumber: z.ZodNullable<z.ZodString>;
                    address: z.ZodString;
                    state: z.ZodString;
                    district: z.ZodString;
                    pincode: z.ZodString;
                    businessName: z.ZodString;
                    businessType: z.ZodString;
                    ownerName: z.ZodString;
                    id: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        updateProfile: {
            method: "PUT";
            body: z.ZodObject<{
                businessName: z.ZodOptional<z.ZodString>;
                businessType: z.ZodOptional<z.ZodString>;
                ownerName: z.ZodOptional<z.ZodString>;
                address: z.ZodOptional<z.ZodString>;
                state: z.ZodOptional<z.ZodString>;
                district: z.ZodOptional<z.ZodString>;
                pincode: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodString>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodString>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankAccountNumber: z.ZodOptional<z.ZodString>;
                bankIfscCode: z.ZodOptional<z.ZodString>;
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                businessName?: string | undefined;
                businessType?: string | undefined;
                ownerName?: string | undefined;
                address?: string | undefined;
                state?: string | undefined;
                district?: string | undefined;
                pincode?: string | undefined;
                phone?: string | undefined;
                email?: string | undefined;
                secondaryContactName?: string | null | undefined;
                secondaryContactDesignation?: string | null | undefined;
                secondaryContactNumber?: string | null | undefined;
                panNumber?: string | undefined;
                panCard?: string | null | undefined;
                gstNumber?: string | undefined;
                gstCertificate?: string | null | undefined;
                fssaiNumber?: string | null | undefined;
                fssaiLicense?: string | null | undefined;
                bankAccountNumber?: string | undefined;
                bankIfscCode?: string | undefined;
                tmcoNumber?: string | null | undefined;
                cancelledCheque?: string | null | undefined;
                transportName?: string | null | undefined;
                brandName?: string | null | undefined;
                brandLogo?: string | null | undefined;
                brandCertificate?: string | null | undefined;
            }, {
                businessName?: string | undefined;
                businessType?: string | undefined;
                ownerName?: string | undefined;
                address?: string | undefined;
                state?: string | undefined;
                district?: string | undefined;
                pincode?: string | undefined;
                phone?: string | undefined;
                email?: string | undefined;
                secondaryContactName?: string | null | undefined;
                secondaryContactDesignation?: string | null | undefined;
                secondaryContactNumber?: string | null | undefined;
                panNumber?: string | undefined;
                panCard?: string | null | undefined;
                gstNumber?: string | undefined;
                gstCertificate?: string | null | undefined;
                fssaiNumber?: string | null | undefined;
                fssaiLicense?: string | null | undefined;
                bankAccountNumber?: string | undefined;
                bankIfscCode?: string | undefined;
                tmcoNumber?: string | null | undefined;
                cancelledCheque?: string | null | undefined;
                transportName?: string | null | undefined;
                brandName?: string | null | undefined;
                brandLogo?: string | null | undefined;
                brandCertificate?: string | null | undefined;
            }>;
            path: "/api/seller/profile";
            responses: {
                200: z.ZodObject<{
                    tmcoNumber: z.ZodNullable<z.ZodString>;
                    cancelledCheque: z.ZodNullable<z.ZodString>;
                    transportName: z.ZodNullable<z.ZodString>;
                    brandName: z.ZodNullable<z.ZodString>;
                    brandLogo: z.ZodNullable<z.ZodString>;
                    brandCertificate: z.ZodNullable<z.ZodString>;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                    bankAccountNumber: z.ZodString;
                    bankIfscCode: z.ZodString;
                    panNumber: z.ZodString;
                    panCard: z.ZodNullable<z.ZodString>;
                    gstNumber: z.ZodString;
                    gstCertificate: z.ZodNullable<z.ZodString>;
                    fssaiNumber: z.ZodNullable<z.ZodString>;
                    fssaiLicense: z.ZodNullable<z.ZodString>;
                    phone: z.ZodString;
                    email: z.ZodString;
                    secondaryContactName: z.ZodNullable<z.ZodString>;
                    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                    secondaryContactNumber: z.ZodNullable<z.ZodString>;
                    address: z.ZodString;
                    state: z.ZodString;
                    district: z.ZodString;
                    pincode: z.ZodString;
                    businessName: z.ZodString;
                    businessType: z.ZodString;
                    ownerName: z.ZodString;
                    id: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    tmcoNumber: string | null;
                    cancelledCheque: string | null;
                    transportName: string | null;
                    brandName: string | null;
                    brandLogo: string | null;
                    brandCertificate: string | null;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        stats: {
            method: "GET";
            path: "/api/seller/stats";
            responses: {
                200: z.ZodObject<{
                    totalSales: z.ZodNumber;
                    totalProducts: z.ZodNumber;
                    totalOrders: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    totalSales: number;
                    totalProducts: number;
                    totalOrders: number;
                }, {
                    totalSales: number;
                    totalProducts: number;
                    totalOrders: number;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                403: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getProducts: {
            query: z.ZodObject<{
                offset: z.ZodDefault<z.ZodOptional<z.ZodString>>;
                limit: z.ZodDefault<z.ZodOptional<z.ZodString>>;
                search: z.ZodOptional<z.ZodString>;
                sortBy: z.ZodOptional<z.ZodEnum<["price", "createdAt", "name"]>>;
                sortOrder: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                minPrice: z.ZodOptional<z.ZodString>;
                maxPrice: z.ZodOptional<z.ZodString>;
                grade: z.ZodOptional<z.ZodString>;
                origin: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                limit: string;
                offset: string;
                search?: string | undefined;
                grade?: string | undefined;
                origin?: string | undefined;
                sortBy?: "createdAt" | "name" | "price" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
                minPrice?: string | undefined;
                maxPrice?: string | undefined;
            }, {
                search?: string | undefined;
                grade?: string | undefined;
                origin?: string | undefined;
                limit?: string | undefined;
                offset?: string | undefined;
                sortBy?: "createdAt" | "name" | "price" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
                minPrice?: string | undefined;
                maxPrice?: string | undefined;
            }>;
            method: "GET";
            path: "/api/seller/products";
            responses: {
                200: z.ZodObject<{
                    data: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        description: z.ZodNullable<z.ZodString>;
                        imageUrl: z.ZodNullable<z.ZodString>;
                        grade: z.ZodString;
                        mark: z.ZodString;
                        invoiceNo: z.ZodString;
                        weightPerUnit: z.ZodNumber;
                        sampleWeight: z.ZodNullable<z.ZodNumber>;
                        productionMonth: z.ZodString;
                        location: z.ZodString;
                        origin: z.ZodString;
                        pricePerUnit: z.ZodNumber;
                        score: z.ZodNullable<z.ZodNumber>;
                        mbp: z.ZodNullable<z.ZodNumber>;
                        sellerId: z.ZodNumber;
                        cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                        orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        description: string | null;
                        imageUrl: string | null;
                        grade: string;
                        mark: string;
                        invoiceNo: string;
                        weightPerUnit: number;
                        sampleWeight: number | null;
                        productionMonth: string;
                        location: string;
                        origin: string;
                        pricePerUnit: number;
                        score: number | null;
                        mbp: number | null;
                        sellerId: number;
                        cartItems?: any[] | undefined;
                        orderItems?: any[] | undefined;
                    }, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        description: string | null;
                        imageUrl: string | null;
                        grade: string;
                        mark: string;
                        invoiceNo: string;
                        weightPerUnit: number;
                        sampleWeight: number | null;
                        productionMonth: string;
                        location: string;
                        origin: string;
                        pricePerUnit: number;
                        score: number | null;
                        mbp: number | null;
                        sellerId: number;
                        cartItems?: any[] | undefined;
                        orderItems?: any[] | undefined;
                    }>, "many">;
                    total: z.ZodNumber;
                    offset: z.ZodNumber;
                    limit: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    offset: number;
                    data: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        description: string | null;
                        imageUrl: string | null;
                        grade: string;
                        mark: string;
                        invoiceNo: string;
                        weightPerUnit: number;
                        sampleWeight: number | null;
                        productionMonth: string;
                        location: string;
                        origin: string;
                        pricePerUnit: number;
                        score: number | null;
                        mbp: number | null;
                        sellerId: number;
                        cartItems?: any[] | undefined;
                        orderItems?: any[] | undefined;
                    }[];
                    total: number;
                }, {
                    limit: number;
                    offset: number;
                    data: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        description: string | null;
                        imageUrl: string | null;
                        grade: string;
                        mark: string;
                        invoiceNo: string;
                        weightPerUnit: number;
                        sampleWeight: number | null;
                        productionMonth: string;
                        location: string;
                        origin: string;
                        pricePerUnit: number;
                        score: number | null;
                        mbp: number | null;
                        sellerId: number;
                        cartItems?: any[] | undefined;
                        orderItems?: any[] | undefined;
                    }[];
                    total: number;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        createProduct: {
            method: "POST";
            body: z.ZodObject<Omit<{
                id: z.ZodNumber;
                name: z.ZodString;
                description: z.ZodNullable<z.ZodString>;
                imageUrl: z.ZodNullable<z.ZodString>;
                grade: z.ZodString;
                mark: z.ZodString;
                invoiceNo: z.ZodString;
                weightPerUnit: z.ZodNumber;
                sampleWeight: z.ZodNullable<z.ZodNumber>;
                productionMonth: z.ZodString;
                location: z.ZodString;
                origin: z.ZodString;
                pricePerUnit: z.ZodNumber;
                score: z.ZodNullable<z.ZodNumber>;
                mbp: z.ZodNullable<z.ZodNumber>;
                sellerId: z.ZodNumber;
                cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "id" | "createdAt" | "updatedAt" | "sellerId">, "strip", z.ZodTypeAny, {
                name: string;
                description: string | null;
                imageUrl: string | null;
                grade: string;
                mark: string;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                origin: string;
                pricePerUnit: number;
                score: number | null;
                mbp: number | null;
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }, {
                name: string;
                description: string | null;
                imageUrl: string | null;
                grade: string;
                mark: string;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                origin: string;
                pricePerUnit: number;
                score: number | null;
                mbp: number | null;
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }>;
            path: "/api/seller/products";
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    grade: z.ZodString;
                    mark: z.ZodString;
                    invoiceNo: z.ZodString;
                    weightPerUnit: z.ZodNumber;
                    sampleWeight: z.ZodNullable<z.ZodNumber>;
                    productionMonth: z.ZodString;
                    location: z.ZodString;
                    origin: z.ZodString;
                    pricePerUnit: z.ZodNumber;
                    score: z.ZodNullable<z.ZodNumber>;
                    mbp: z.ZodNullable<z.ZodNumber>;
                    sellerId: z.ZodNumber;
                    cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        updateProduct: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "PATCH";
            body: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                grade: z.ZodOptional<z.ZodString>;
                mark: z.ZodOptional<z.ZodString>;
                invoiceNo: z.ZodOptional<z.ZodString>;
                weightPerUnit: z.ZodOptional<z.ZodNumber>;
                sampleWeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                productionMonth: z.ZodOptional<z.ZodString>;
                location: z.ZodOptional<z.ZodString>;
                origin: z.ZodOptional<z.ZodString>;
                pricePerUnit: z.ZodOptional<z.ZodNumber>;
                score: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                mbp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                cartItems: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
                orderItems: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                description?: string | null | undefined;
                imageUrl?: string | null | undefined;
                grade?: string | undefined;
                mark?: string | undefined;
                invoiceNo?: string | undefined;
                weightPerUnit?: number | undefined;
                sampleWeight?: number | null | undefined;
                productionMonth?: string | undefined;
                location?: string | undefined;
                origin?: string | undefined;
                pricePerUnit?: number | undefined;
                score?: number | null | undefined;
                mbp?: number | null | undefined;
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }, {
                name?: string | undefined;
                description?: string | null | undefined;
                imageUrl?: string | null | undefined;
                grade?: string | undefined;
                mark?: string | undefined;
                invoiceNo?: string | undefined;
                weightPerUnit?: number | undefined;
                sampleWeight?: number | null | undefined;
                productionMonth?: string | undefined;
                location?: string | undefined;
                origin?: string | undefined;
                pricePerUnit?: number | undefined;
                score?: number | null | undefined;
                mbp?: number | null | undefined;
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }>;
            path: "/api/seller/products/:id";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    grade: z.ZodString;
                    mark: z.ZodString;
                    invoiceNo: z.ZodString;
                    weightPerUnit: z.ZodNumber;
                    sampleWeight: z.ZodNullable<z.ZodNumber>;
                    productionMonth: z.ZodString;
                    location: z.ZodString;
                    origin: z.ZodString;
                    pricePerUnit: z.ZodNumber;
                    score: z.ZodNullable<z.ZodNumber>;
                    mbp: z.ZodNullable<z.ZodNumber>;
                    sellerId: z.ZodNumber;
                    cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getProduct: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "GET";
            path: "/api/seller/products/:id";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    grade: z.ZodString;
                    mark: z.ZodString;
                    invoiceNo: z.ZodString;
                    weightPerUnit: z.ZodNumber;
                    sampleWeight: z.ZodNullable<z.ZodNumber>;
                    productionMonth: z.ZodString;
                    location: z.ZodString;
                    origin: z.ZodString;
                    pricePerUnit: z.ZodNumber;
                    score: z.ZodNullable<z.ZodNumber>;
                    mbp: z.ZodNullable<z.ZodNumber>;
                    sellerId: z.ZodNumber;
                    cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getOrders: {
            query: z.ZodObject<{
                offset: z.ZodDefault<z.ZodOptional<z.ZodString>>;
                limit: z.ZodDefault<z.ZodOptional<z.ZodString>>;
                status: z.ZodOptional<z.ZodEnum<["PENDING", "ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>>;
                startDate: z.ZodOptional<z.ZodString>;
                endDate: z.ZodOptional<z.ZodString>;
                sortBy: z.ZodOptional<z.ZodEnum<["createdAt", "totalAmount"]>>;
                sortOrder: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
            }, "strip", z.ZodTypeAny, {
                limit: string;
                offset: string;
                status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                sortBy?: "createdAt" | "totalAmount" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            }, {
                status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                limit?: string | undefined;
                offset?: string | undefined;
                sortBy?: "createdAt" | "totalAmount" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
                startDate?: string | undefined;
                endDate?: string | undefined;
            }>;
            method: "GET";
            path: "/api/seller/orders";
            responses: {
                200: z.ZodObject<{
                    data: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        buyerId: z.ZodNumber;
                        status: z.ZodDefault<z.ZodEnum<["PENDING", "ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>>;
                        totalAmount: z.ZodNumber;
                        estimatedWeight: z.ZodNumber;
                        deliveryCharges: z.ZodNullable<z.ZodNumber>;
                        gstAmount: z.ZodNumber;
                        otherCharges: z.ZodNullable<z.ZodNumber>;
                        roundOff: z.ZodNullable<z.ZodNumber>;
                        orderItems: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            orderId: z.ZodNumber;
                            productId: z.ZodNumber;
                            quantity: z.ZodNumber;
                            unitPrice: z.ZodNumber;
                            totalPrice: z.ZodNumber;
                            totalWeight: z.ZodNumber;
                            createdAt: z.ZodDate;
                            updatedAt: z.ZodDate;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            orderId: number;
                            productId: number;
                            quantity: number;
                            unitPrice: number;
                            totalPrice: number;
                            totalWeight: number;
                        }, {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            orderId: number;
                            productId: number;
                            quantity: number;
                            unitPrice: number;
                            totalPrice: number;
                            totalWeight: number;
                        }>, "many">;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderItems: {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            orderId: number;
                            productId: number;
                            quantity: number;
                            unitPrice: number;
                            totalPrice: number;
                            totalWeight: number;
                        }[];
                        buyerId: number;
                        totalAmount: number;
                        estimatedWeight: number;
                        deliveryCharges: number | null;
                        gstAmount: number;
                        otherCharges: number | null;
                        roundOff: number | null;
                    }, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderItems: {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            orderId: number;
                            productId: number;
                            quantity: number;
                            unitPrice: number;
                            totalPrice: number;
                            totalWeight: number;
                        }[];
                        buyerId: number;
                        totalAmount: number;
                        estimatedWeight: number;
                        deliveryCharges: number | null;
                        gstAmount: number;
                        otherCharges: number | null;
                        roundOff: number | null;
                        status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                    }>, "many">;
                    total: z.ZodNumber;
                    offset: z.ZodNumber;
                    limit: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    limit: number;
                    offset: number;
                    data: {
                        status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderItems: {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            orderId: number;
                            productId: number;
                            quantity: number;
                            unitPrice: number;
                            totalPrice: number;
                            totalWeight: number;
                        }[];
                        buyerId: number;
                        totalAmount: number;
                        estimatedWeight: number;
                        deliveryCharges: number | null;
                        gstAmount: number;
                        otherCharges: number | null;
                        roundOff: number | null;
                    }[];
                    total: number;
                }, {
                    limit: number;
                    offset: number;
                    data: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderItems: {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date;
                            orderId: number;
                            productId: number;
                            quantity: number;
                            unitPrice: number;
                            totalPrice: number;
                            totalWeight: number;
                        }[];
                        buyerId: number;
                        totalAmount: number;
                        estimatedWeight: number;
                        deliveryCharges: number | null;
                        gstAmount: number;
                        otherCharges: number | null;
                        roundOff: number | null;
                        status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                    }[];
                    total: number;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        updateOrderStatus: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "PATCH";
            body: z.ZodObject<{
                status: z.ZodEnum<["ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
            }, {
                status: "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
            }>;
            path: "/api/seller/orders/:id";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    buyerId: z.ZodNumber;
                    status: z.ZodDefault<z.ZodEnum<["PENDING", "ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>>;
                    totalAmount: z.ZodNumber;
                    estimatedWeight: z.ZodNumber;
                    deliveryCharges: z.ZodNullable<z.ZodNumber>;
                    gstAmount: z.ZodNumber;
                    otherCharges: z.ZodNullable<z.ZodNumber>;
                    roundOff: z.ZodNullable<z.ZodNumber>;
                    orderItems: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        orderId: z.ZodNumber;
                        productId: z.ZodNumber;
                        quantity: z.ZodNumber;
                        unitPrice: z.ZodNumber;
                        totalPrice: z.ZodNumber;
                        totalWeight: z.ZodNumber;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }>, "many">;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                    status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getOrder: {
            pathParams: z.ZodObject<{
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
            }, {
                id: string;
            }>;
            method: "GET";
            path: "/api/seller/orders/:id";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    buyerId: z.ZodNumber;
                    status: z.ZodDefault<z.ZodEnum<["PENDING", "ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>>;
                    totalAmount: z.ZodNumber;
                    estimatedWeight: z.ZodNumber;
                    deliveryCharges: z.ZodNullable<z.ZodNumber>;
                    gstAmount: z.ZodNumber;
                    otherCharges: z.ZodNullable<z.ZodNumber>;
                    roundOff: z.ZodNullable<z.ZodNumber>;
                    orderItems: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        orderId: z.ZodNumber;
                        productId: z.ZodNumber;
                        quantity: z.ZodNumber;
                        unitPrice: z.ZodNumber;
                        totalPrice: z.ZodNumber;
                        totalWeight: z.ZodNumber;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }>, "many">;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                    status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
    };
    buyers: {
        getProfile: {
            method: "GET";
            path: "/api/buyer/profile";
            responses: {
                200: z.ZodObject<{
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                    bankAccountNumber: z.ZodString;
                    bankIfscCode: z.ZodString;
                    panNumber: z.ZodString;
                    panCard: z.ZodNullable<z.ZodString>;
                    gstNumber: z.ZodString;
                    gstCertificate: z.ZodNullable<z.ZodString>;
                    fssaiNumber: z.ZodNullable<z.ZodString>;
                    fssaiLicense: z.ZodNullable<z.ZodString>;
                    phone: z.ZodString;
                    email: z.ZodString;
                    secondaryContactName: z.ZodNullable<z.ZodString>;
                    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                    secondaryContactNumber: z.ZodNullable<z.ZodString>;
                    address: z.ZodString;
                    state: z.ZodString;
                    district: z.ZodString;
                    pincode: z.ZodString;
                    businessName: z.ZodString;
                    businessType: z.ZodString;
                    ownerName: z.ZodString;
                    id: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        updateProfile: {
            method: "PUT";
            body: z.ZodObject<{
                businessName: z.ZodOptional<z.ZodString>;
                businessType: z.ZodOptional<z.ZodString>;
                ownerName: z.ZodOptional<z.ZodString>;
                address: z.ZodOptional<z.ZodString>;
                state: z.ZodOptional<z.ZodString>;
                district: z.ZodOptional<z.ZodString>;
                pincode: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodString>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodString>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankAccountNumber: z.ZodOptional<z.ZodString>;
                bankIfscCode: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                businessName?: string | undefined;
                businessType?: string | undefined;
                ownerName?: string | undefined;
                address?: string | undefined;
                state?: string | undefined;
                district?: string | undefined;
                pincode?: string | undefined;
                phone?: string | undefined;
                email?: string | undefined;
                secondaryContactName?: string | null | undefined;
                secondaryContactDesignation?: string | null | undefined;
                secondaryContactNumber?: string | null | undefined;
                panNumber?: string | undefined;
                panCard?: string | null | undefined;
                gstNumber?: string | undefined;
                gstCertificate?: string | null | undefined;
                fssaiNumber?: string | null | undefined;
                fssaiLicense?: string | null | undefined;
                bankAccountNumber?: string | undefined;
                bankIfscCode?: string | undefined;
            }, {
                businessName?: string | undefined;
                businessType?: string | undefined;
                ownerName?: string | undefined;
                address?: string | undefined;
                state?: string | undefined;
                district?: string | undefined;
                pincode?: string | undefined;
                phone?: string | undefined;
                email?: string | undefined;
                secondaryContactName?: string | null | undefined;
                secondaryContactDesignation?: string | null | undefined;
                secondaryContactNumber?: string | null | undefined;
                panNumber?: string | undefined;
                panCard?: string | null | undefined;
                gstNumber?: string | undefined;
                gstCertificate?: string | null | undefined;
                fssaiNumber?: string | null | undefined;
                fssaiLicense?: string | null | undefined;
                bankAccountNumber?: string | undefined;
                bankIfscCode?: string | undefined;
            }>;
            path: "/api/buyers/profile";
            responses: {
                200: z.ZodObject<{
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                    bankAccountNumber: z.ZodString;
                    bankIfscCode: z.ZodString;
                    panNumber: z.ZodString;
                    panCard: z.ZodNullable<z.ZodString>;
                    gstNumber: z.ZodString;
                    gstCertificate: z.ZodNullable<z.ZodString>;
                    fssaiNumber: z.ZodNullable<z.ZodString>;
                    fssaiLicense: z.ZodNullable<z.ZodString>;
                    phone: z.ZodString;
                    email: z.ZodString;
                    secondaryContactName: z.ZodNullable<z.ZodString>;
                    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
                    secondaryContactNumber: z.ZodNullable<z.ZodString>;
                    address: z.ZodString;
                    state: z.ZodString;
                    district: z.ZodString;
                    pincode: z.ZodString;
                    businessName: z.ZodString;
                    businessType: z.ZodString;
                    ownerName: z.ZodString;
                    id: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }, {
                    businessName: string;
                    businessType: string;
                    ownerName: string;
                    address: string;
                    state: string;
                    district: string;
                    pincode: string;
                    phone: string;
                    email: string;
                    secondaryContactName: string | null;
                    secondaryContactDesignation: string | null;
                    secondaryContactNumber: string | null;
                    panNumber: string;
                    panCard: string | null;
                    gstNumber: string;
                    gstCertificate: string | null;
                    fssaiNumber: string | null;
                    fssaiLicense: string | null;
                    bankAccountNumber: string;
                    bankIfscCode: string;
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getProducts: {
            query: z.ZodObject<{
                offset: z.ZodDefault<z.ZodOptional<z.ZodString>>;
                limit: z.ZodDefault<z.ZodOptional<z.ZodString>>;
                search: z.ZodOptional<z.ZodString>;
                sortBy: z.ZodOptional<z.ZodEnum<["price", "createdAt", "name"]>>;
                sortOrder: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                minPrice: z.ZodOptional<z.ZodString>;
                maxPrice: z.ZodOptional<z.ZodString>;
                grade: z.ZodOptional<z.ZodString>;
                origin: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                limit: string;
                offset: string;
                search?: string | undefined;
                grade?: string | undefined;
                origin?: string | undefined;
                sortBy?: "createdAt" | "name" | "price" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
                minPrice?: string | undefined;
                maxPrice?: string | undefined;
            }, {
                search?: string | undefined;
                grade?: string | undefined;
                origin?: string | undefined;
                limit?: string | undefined;
                offset?: string | undefined;
                sortBy?: "createdAt" | "name" | "price" | undefined;
                sortOrder?: "asc" | "desc" | undefined;
                minPrice?: string | undefined;
                maxPrice?: string | undefined;
            }>;
            method: "GET";
            path: "/api/products";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    description: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    grade: z.ZodString;
                    mark: z.ZodString;
                    invoiceNo: z.ZodString;
                    weightPerUnit: z.ZodNumber;
                    sampleWeight: z.ZodNullable<z.ZodNumber>;
                    productionMonth: z.ZodString;
                    location: z.ZodString;
                    origin: z.ZodString;
                    pricePerUnit: z.ZodNumber;
                    score: z.ZodNullable<z.ZodNumber>;
                    mbp: z.ZodNullable<z.ZodNumber>;
                    sellerId: z.ZodNumber;
                    cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    description: string | null;
                    imageUrl: string | null;
                    grade: string;
                    mark: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    score: number | null;
                    mbp: number | null;
                    sellerId: number;
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }>, "many">;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getCart: {
            method: "GET";
            path: "/api/cart";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    productId: z.ZodString;
                    quantity: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    productId: string;
                    quantity: number;
                }, {
                    productId: string;
                    quantity: number;
                }>, "many">;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        addToCart: {
            method: "POST";
            body: z.ZodObject<{
                productId: z.ZodString;
                quantity: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                productId: string;
                quantity: number;
            }, {
                productId: string;
                quantity: number;
            }>;
            path: "/api/cart";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    productId: z.ZodString;
                    quantity: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    productId: string;
                    quantity: number;
                }, {
                    productId: string;
                    quantity: number;
                }>, "many">;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        updateCartItem: {
            method: "PUT";
            body: z.ZodObject<{
                quantity: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                quantity: number;
            }, {
                quantity: number;
            }>;
            path: "/api/cart/:productId";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    productId: z.ZodString;
                    quantity: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    productId: string;
                    quantity: number;
                }, {
                    productId: string;
                    quantity: number;
                }>, "many">;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        removeFromCart: {
            method: "DELETE";
            path: "/api/cart/:productId";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    productId: z.ZodString;
                    quantity: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    productId: string;
                    quantity: number;
                }, {
                    productId: string;
                    quantity: number;
                }>, "many">;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        placeOrder: {
            method: "POST";
            body: z.ZodObject<{
                items: z.ZodArray<z.ZodObject<{
                    productId: z.ZodString;
                    quantity: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    productId: string;
                    quantity: number;
                }, {
                    productId: string;
                    quantity: number;
                }>, "many">;
                shippingAddress: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                items: {
                    productId: string;
                    quantity: number;
                }[];
                shippingAddress: string;
            }, {
                items: {
                    productId: string;
                    quantity: number;
                }[];
                shippingAddress: string;
            }>;
            path: "/api/orders";
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    buyerId: z.ZodNumber;
                    status: z.ZodDefault<z.ZodEnum<["PENDING", "ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>>;
                    totalAmount: z.ZodNumber;
                    estimatedWeight: z.ZodNumber;
                    deliveryCharges: z.ZodNullable<z.ZodNumber>;
                    gstAmount: z.ZodNumber;
                    otherCharges: z.ZodNullable<z.ZodNumber>;
                    roundOff: z.ZodNullable<z.ZodNumber>;
                    orderItems: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        orderId: z.ZodNumber;
                        productId: z.ZodNumber;
                        quantity: z.ZodNumber;
                        unitPrice: z.ZodNumber;
                        totalPrice: z.ZodNumber;
                        totalWeight: z.ZodNumber;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }>, "many">;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                    status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getOrders: {
            method: "GET";
            path: "/api/orders";
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    buyerId: z.ZodNumber;
                    status: z.ZodDefault<z.ZodEnum<["PENDING", "ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>>;
                    totalAmount: z.ZodNumber;
                    estimatedWeight: z.ZodNumber;
                    deliveryCharges: z.ZodNullable<z.ZodNumber>;
                    gstAmount: z.ZodNumber;
                    otherCharges: z.ZodNullable<z.ZodNumber>;
                    roundOff: z.ZodNullable<z.ZodNumber>;
                    orderItems: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        orderId: z.ZodNumber;
                        productId: z.ZodNumber;
                        quantity: z.ZodNumber;
                        unitPrice: z.ZodNumber;
                        totalPrice: z.ZodNumber;
                        totalWeight: z.ZodNumber;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }>, "many">;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                    status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                }>, "many">;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
        getOrderById: {
            method: "GET";
            path: "/api/orders/:orderId";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    buyerId: z.ZodNumber;
                    status: z.ZodDefault<z.ZodEnum<["PENDING", "ACCEPTED", "DESPATCHED", "ON_WAY", "DELIVERED", "CANCELLED"]>>;
                    totalAmount: z.ZodNumber;
                    estimatedWeight: z.ZodNumber;
                    deliveryCharges: z.ZodNullable<z.ZodNumber>;
                    gstAmount: z.ZodNumber;
                    otherCharges: z.ZodNullable<z.ZodNumber>;
                    roundOff: z.ZodNullable<z.ZodNumber>;
                    orderItems: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        orderId: z.ZodNumber;
                        productId: z.ZodNumber;
                        quantity: z.ZodNumber;
                        unitPrice: z.ZodNumber;
                        totalPrice: z.ZodNumber;
                        totalWeight: z.ZodNumber;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }, {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }>, "many">;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    orderItems: {
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        orderId: number;
                        productId: number;
                        quantity: number;
                        unitPrice: number;
                        totalPrice: number;
                        totalWeight: number;
                    }[];
                    buyerId: number;
                    totalAmount: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                    status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                    code: z.ZodString;
                    timestamp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    message: string;
                    timestamp: string;
                }, {
                    code: string;
                    message: string;
                    timestamp: string;
                }>;
            };
        };
    };
};
export type Contract = typeof contract;
export type User = z.infer<typeof UserSchema>;
export type PendingUser = z.infer<typeof PendingUserSchema>;
export type SellerProfile = z.infer<typeof SellerProfileSchema>;
export type BuyerProfile = z.infer<typeof BuyerProfileSchema>;
export type Product = z.infer<typeof ProductSchema>;
