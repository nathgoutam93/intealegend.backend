import z from "zod";
export declare const adminRouter: {
    stats: {
        method: "GET";
        path: "/admin/stats";
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
        path: "/admin/users";
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
        path: "/admin/users/verify";
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
