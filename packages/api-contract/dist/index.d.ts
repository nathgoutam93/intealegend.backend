import { UserSchema, PendingUserSchema, SellerProfileSchema, BuyerProfileSchema } from "./schemas";
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
        getProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            method: "GET";
            path: "/api/admin/profile/:userId";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    fullName: z.ZodString;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                }, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
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
        createProfile: {
            method: "POST";
            body: z.ZodObject<{
                fullName: z.ZodString;
                userId: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                userId: number;
                fullName: string;
            }, {
                userId: number;
                fullName: string;
            }>;
            path: "/api/admin/profile";
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    fullName: z.ZodString;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                }, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
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
        listVerifiedUsers: {
            query: z.ZodObject<{
                role: z.ZodEnum<["SELLER", "BUYER"]>;
                limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
                offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                role: "SELLER" | "BUYER";
                limit: number;
                offset: number;
            }, {
                role: "SELLER" | "BUYER";
                limit?: number | undefined;
                offset?: number | undefined;
            }>;
            method: "GET";
            path: "/api/admin/users/verified";
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
        listPendingVerifications: {
            query: z.ZodObject<{
                role: z.ZodEnum<["SELLER", "BUYER"]>;
                limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
                offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                role: "SELLER" | "BUYER";
                limit: number;
                offset: number;
            }, {
                role: "SELLER" | "BUYER";
                limit?: number | undefined;
                offset?: number | undefined;
            }>;
            method: "GET";
            path: "/api/admin/verifications/pending";
            responses: {
                200: z.ZodObject<{
                    data: z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
                        role: z.ZodLiteral<"SELLER">;
                        users: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            email: z.ZodString;
                            role: z.ZodEnum<["SELLER", "BUYER"]>;
                            verified: z.ZodBoolean;
                            createdAt: z.ZodString;
                            profile: z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
                                tmcoNumber: z.ZodNullable<z.ZodString>;
                                cancelledCheque: z.ZodNullable<z.ZodString>;
                                transportName: z.ZodNullable<z.ZodString>;
                                brandName: z.ZodNullable<z.ZodString>;
                                brandLogo: z.ZodNullable<z.ZodString>;
                                brandCertificate: z.ZodNullable<z.ZodString>;
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
                                role: z.ZodLiteral<"SELLER">;
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
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                role: "SELLER";
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
                                role: "SELLER";
                            }>, z.ZodObject<{
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
                                role: z.ZodLiteral<"BUYER">;
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
                                role: "BUYER";
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
                                role: "BUYER";
                            }>]>;
                        }, "strip", z.ZodTypeAny, {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }, {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }[];
                        role: "SELLER";
                    }, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }[];
                        role: "SELLER";
                    }>, z.ZodObject<{
                        role: z.ZodLiteral<"BUYER">;
                        users: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            email: z.ZodString;
                            role: z.ZodEnum<["SELLER", "BUYER"]>;
                            verified: z.ZodBoolean;
                            createdAt: z.ZodString;
                            profile: z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
                                tmcoNumber: z.ZodNullable<z.ZodString>;
                                cancelledCheque: z.ZodNullable<z.ZodString>;
                                transportName: z.ZodNullable<z.ZodString>;
                                brandName: z.ZodNullable<z.ZodString>;
                                brandLogo: z.ZodNullable<z.ZodString>;
                                brandCertificate: z.ZodNullable<z.ZodString>;
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
                                role: z.ZodLiteral<"SELLER">;
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
                                tmcoNumber: string | null;
                                cancelledCheque: string | null;
                                transportName: string | null;
                                brandName: string | null;
                                brandLogo: string | null;
                                brandCertificate: string | null;
                                role: "SELLER";
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
                                role: "SELLER";
                            }>, z.ZodObject<{
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
                                role: z.ZodLiteral<"BUYER">;
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
                                role: "BUYER";
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
                                role: "BUYER";
                            }>]>;
                        }, "strip", z.ZodTypeAny, {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }, {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }[];
                        role: "BUYER";
                    }, {
                        users: {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
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
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }[];
                        role: "SELLER";
                    } | {
                        users: {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
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
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
                            };
                        }[];
                        role: "SELLER";
                    } | {
                        users: {
                            email: string;
                            id: number;
                            createdAt: string;
                            role: "SELLER" | "BUYER";
                            verified: boolean;
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
                                role: "SELLER";
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
                                role: "BUYER";
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
            path: "/api/admin/verify-users";
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
        getProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            method: "GET";
            path: "/api/staff/profile/:userId";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    fullName: z.ZodString;
                    permissions: z.ZodObject<{
                        users: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            delete: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }>;
                        sellers: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            verify: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }>;
                        buyers: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            verify: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }>;
                        staff: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            delete: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    }, {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    }>;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                    permissions: {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    };
                }, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                    permissions: {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    };
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
        createProfile: {
            method: "POST";
            body: z.ZodObject<{
                fullName: z.ZodString;
                userId: z.ZodNumber;
                permissions: z.ZodObject<{
                    users: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                    sellers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    buyers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    staff: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }>;
            }, "strip", z.ZodTypeAny, {
                userId: number;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }, {
                userId: number;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }>;
            path: "/api/staff/profile";
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    fullName: z.ZodString;
                    permissions: z.ZodObject<{
                        users: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            delete: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }>;
                        sellers: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            verify: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }>;
                        buyers: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            verify: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }>;
                        staff: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            delete: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    }, {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    }>;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                    permissions: {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    };
                }, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                    permissions: {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
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
            };
        };
        updateProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            method: "PUT";
            body: z.ZodObject<{
                fullName: z.ZodOptional<z.ZodString>;
                permissions: z.ZodOptional<z.ZodObject<{
                    users: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                    sellers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    buyers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    staff: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }>>;
            }, "strip", z.ZodTypeAny, {
                fullName?: string | undefined;
                permissions?: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                } | undefined;
            }, {
                fullName?: string | undefined;
                permissions?: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                } | undefined;
            }>;
            path: "/api/staff/profile/:userId";
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    fullName: z.ZodString;
                    permissions: z.ZodObject<{
                        users: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            delete: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }>;
                        sellers: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            verify: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }>;
                        buyers: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            verify: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        }>;
                        staff: z.ZodObject<{
                            read: z.ZodBoolean;
                            write: z.ZodBoolean;
                            delete: z.ZodBoolean;
                        }, "strip", z.ZodTypeAny, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }, {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    }, {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    }>;
                    userId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                    permissions: {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    };
                }, {
                    id: number;
                    userId: number;
                    createdAt: Date;
                    updatedAt: Date;
                    fullName: string;
                    permissions: {
                        users: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                        sellers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        buyers: {
                            read: boolean;
                            write: boolean;
                            verify: boolean;
                        };
                        staff: {
                            read: boolean;
                            write: boolean;
                            delete: boolean;
                        };
                    };
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
        deleteProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            method: "DELETE";
            path: "/api/staff/profile/:userId";
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
    };
    sellers: {
        getProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            method: "GET";
            path: "/api/sellers/profile/:userId";
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
        createProfile: {
            method: "POST";
            body: z.ZodObject<Omit<{
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
            }, "id" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
                userId: number;
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
                userId: number;
            }>;
            path: "/api/sellers/profile";
            responses: {
                201: z.ZodObject<{
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
        updateProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
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
            path: "/api/sellers/profile/:userId";
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
    };
    buyers: {
        getProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
            method: "GET";
            path: "/api/buyers/profile/:userId";
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
        createProfile: {
            method: "POST";
            body: z.ZodObject<Omit<{
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
            }, "id" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
                userId: number;
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
                userId: number;
            }>;
            path: "/api/buyers/profile";
            responses: {
                201: z.ZodObject<{
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
        updateProfile: {
            pathParams: z.ZodObject<{
                userId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                userId: string;
            }, {
                userId: string;
            }>;
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
            path: "/api/buyers/profile/:userId";
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
    };
};
export type Contract = typeof contract;
export type User = z.infer<typeof UserSchema>;
export type PendingUser = z.infer<typeof PendingUserSchema>;
export type SellerProfile = z.infer<typeof SellerProfileSchema>;
export type BuyerProfile = z.infer<typeof BuyerProfileSchema>;
