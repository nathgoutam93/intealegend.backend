import z from "zod";
export declare const adminRouter: {
    stats: {
        method: "GET";
        path: "/admin/stats";
        responses: {
            200: z.ZodObject<{
                users: z.ZodObject<{
                    total: z.ZodNumber;
                    seller: z.ZodNumber;
                    buyer: z.ZodNumber;
                    pending: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    total: number;
                    seller: number;
                    buyer: number;
                    pending: number;
                }, {
                    total: number;
                    seller: number;
                    buyer: number;
                    pending: number;
                }>;
                products: z.ZodObject<{
                    total: z.ZodNumber;
                    listed: z.ZodNumber;
                    pending: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    total: number;
                    pending: number;
                    listed: number;
                }, {
                    total: number;
                    pending: number;
                    listed: number;
                }>;
                orders: z.ZodObject<{
                    total: z.ZodNumber;
                    pending: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    total: number;
                    pending: number;
                }, {
                    total: number;
                    pending: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                users: {
                    total: number;
                    seller: number;
                    buyer: number;
                    pending: number;
                };
                products: {
                    total: number;
                    pending: number;
                    listed: number;
                };
                orders: {
                    total: number;
                    pending: number;
                };
            }, {
                users: {
                    total: number;
                    seller: number;
                    buyer: number;
                    pending: number;
                };
                products: {
                    total: number;
                    pending: number;
                    listed: number;
                };
                orders: {
                    total: number;
                    pending: number;
                };
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
                total: number;
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
            }, {
                total: number;
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
    getProducts: {
        query: z.ZodObject<{
            offset: z.ZodDefault<z.ZodOptional<z.ZodString>>;
            limit: z.ZodDefault<z.ZodOptional<z.ZodString>>;
            search: z.ZodOptional<z.ZodString>;
            sortBy: z.ZodOptional<z.ZodEnum<["price", "createdAt", "name"]>>;
            sortOrder: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
            status: z.ZodOptional<z.ZodEnum<["published", "draft"]>>;
        }, "strip", z.ZodTypeAny, {
            limit: string;
            offset: string;
            status?: "published" | "draft" | undefined;
            search?: string | undefined;
            sortBy?: "createdAt" | "name" | "price" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }, {
            status?: "published" | "draft" | undefined;
            search?: string | undefined;
            limit?: string | undefined;
            offset?: string | undefined;
            sortBy?: "createdAt" | "name" | "price" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }>;
        method: "GET";
        path: "/admin/products";
        responses: {
            200: z.ZodObject<{
                data: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodNullable<z.ZodString>;
                    description: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    mark: z.ZodNumber;
                    grade: z.ZodString;
                    invoiceNo: z.ZodString;
                    weightPerUnit: z.ZodNumber;
                    sampleWeight: z.ZodNullable<z.ZodNumber>;
                    productionMonth: z.ZodString;
                    location: z.ZodString;
                    origin: z.ZodString;
                    pricePerUnit: z.ZodNumber;
                    mbp: z.ZodNullable<z.ZodNumber>;
                    quantity: z.ZodNumber;
                    appearanceScore: z.ZodNumber;
                    liquorScore: z.ZodNumber;
                    tasteScore: z.ZodNumber;
                    infusionScore: z.ZodNumber;
                    gradingScore: z.ZodNumber;
                    volumeScore: z.ZodNumber;
                    status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
                    isLive: z.ZodBoolean;
                    sellerId: z.ZodNumber;
                    brandMark: z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        logo: z.ZodNullable<z.ZodString>;
                        certificate: z.ZodNullable<z.ZodString>;
                        isDefault: z.ZodBoolean;
                        status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
                        verifiedAt: z.ZodNullable<z.ZodDate>;
                        sellerId: z.ZodNumber;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                        sellerId: number;
                    }, {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                        sellerId: number;
                    }>;
                    cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    sellerId: number;
                    description: string | null;
                    imageUrl: string | null;
                    mark: number;
                    grade: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    quantity: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                        sellerId: number;
                    };
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    sellerId: number;
                    description: string | null;
                    imageUrl: string | null;
                    mark: number;
                    grade: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    quantity: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                        sellerId: number;
                    };
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }>, "many">;
                total: z.ZodNumber;
                offset: z.ZodNumber;
                limit: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                total: number;
                limit: number;
                offset: number;
                data: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    sellerId: number;
                    description: string | null;
                    imageUrl: string | null;
                    mark: number;
                    grade: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    quantity: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                        sellerId: number;
                    };
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }[];
            }, {
                total: number;
                limit: number;
                offset: number;
                data: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    sellerId: number;
                    description: string | null;
                    imageUrl: string | null;
                    mark: number;
                    grade: string;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    origin: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    quantity: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                        sellerId: number;
                    };
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }[];
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
            status: z.ZodOptional<z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mark: z.ZodOptional<z.ZodNumber>;
            grade: z.ZodOptional<z.ZodString>;
            invoiceNo: z.ZodOptional<z.ZodString>;
            weightPerUnit: z.ZodOptional<z.ZodNumber>;
            sampleWeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            productionMonth: z.ZodOptional<z.ZodString>;
            location: z.ZodOptional<z.ZodString>;
            origin: z.ZodOptional<z.ZodString>;
            pricePerUnit: z.ZodOptional<z.ZodNumber>;
            mbp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            quantity: z.ZodOptional<z.ZodNumber>;
            appearanceScore: z.ZodOptional<z.ZodNumber>;
            liquorScore: z.ZodOptional<z.ZodNumber>;
            tasteScore: z.ZodOptional<z.ZodNumber>;
            infusionScore: z.ZodOptional<z.ZodNumber>;
            gradingScore: z.ZodOptional<z.ZodNumber>;
            volumeScore: z.ZodOptional<z.ZodNumber>;
            isLive: z.ZodOptional<z.ZodBoolean>;
            brandMark: z.ZodOptional<z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodString;
                logo: z.ZodNullable<z.ZodString>;
                certificate: z.ZodNullable<z.ZodString>;
                isDefault: z.ZodBoolean;
                status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
                verifiedAt: z.ZodNullable<z.ZodDate>;
                sellerId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
                sellerId: number;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
                sellerId: number;
            }>>;
            cartItems: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
            orderItems: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
        }, "strip", z.ZodTypeAny, {
            status?: "PENDING" | "APPROVED" | "REJECTED" | undefined;
            name?: string | null | undefined;
            description?: string | null | undefined;
            imageUrl?: string | null | undefined;
            mark?: number | undefined;
            grade?: string | undefined;
            invoiceNo?: string | undefined;
            weightPerUnit?: number | undefined;
            sampleWeight?: number | null | undefined;
            productionMonth?: string | undefined;
            location?: string | undefined;
            origin?: string | undefined;
            pricePerUnit?: number | undefined;
            mbp?: number | null | undefined;
            quantity?: number | undefined;
            appearanceScore?: number | undefined;
            liquorScore?: number | undefined;
            tasteScore?: number | undefined;
            infusionScore?: number | undefined;
            gradingScore?: number | undefined;
            volumeScore?: number | undefined;
            isLive?: boolean | undefined;
            brandMark?: {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
                sellerId: number;
            } | undefined;
            cartItems?: any[] | undefined;
            orderItems?: any[] | undefined;
        }, {
            status?: "PENDING" | "APPROVED" | "REJECTED" | undefined;
            name?: string | null | undefined;
            description?: string | null | undefined;
            imageUrl?: string | null | undefined;
            mark?: number | undefined;
            grade?: string | undefined;
            invoiceNo?: string | undefined;
            weightPerUnit?: number | undefined;
            sampleWeight?: number | null | undefined;
            productionMonth?: string | undefined;
            location?: string | undefined;
            origin?: string | undefined;
            pricePerUnit?: number | undefined;
            mbp?: number | null | undefined;
            quantity?: number | undefined;
            appearanceScore?: number | undefined;
            liquorScore?: number | undefined;
            tasteScore?: number | undefined;
            infusionScore?: number | undefined;
            gradingScore?: number | undefined;
            volumeScore?: number | undefined;
            isLive?: boolean | undefined;
            brandMark?: {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
                sellerId: number;
            } | undefined;
            cartItems?: any[] | undefined;
            orderItems?: any[] | undefined;
        }>;
        path: "/admin/products/:id";
        responses: {
            200: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodNullable<z.ZodString>;
                description: z.ZodNullable<z.ZodString>;
                imageUrl: z.ZodNullable<z.ZodString>;
                mark: z.ZodNumber;
                grade: z.ZodString;
                invoiceNo: z.ZodString;
                weightPerUnit: z.ZodNumber;
                sampleWeight: z.ZodNullable<z.ZodNumber>;
                productionMonth: z.ZodString;
                location: z.ZodString;
                origin: z.ZodString;
                pricePerUnit: z.ZodNumber;
                mbp: z.ZodNullable<z.ZodNumber>;
                quantity: z.ZodNumber;
                appearanceScore: z.ZodNumber;
                liquorScore: z.ZodNumber;
                tasteScore: z.ZodNumber;
                infusionScore: z.ZodNumber;
                gradingScore: z.ZodNumber;
                volumeScore: z.ZodNumber;
                status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
                isLive: z.ZodBoolean;
                sellerId: z.ZodNumber;
                brandMark: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    logo: z.ZodNullable<z.ZodString>;
                    certificate: z.ZodNullable<z.ZodString>;
                    isDefault: z.ZodBoolean;
                    status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
                    verifiedAt: z.ZodNullable<z.ZodDate>;
                    sellerId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                }, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                }>;
                cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                sellerId: number;
                description: string | null;
                imageUrl: string | null;
                mark: number;
                grade: string;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                origin: string;
                pricePerUnit: number;
                mbp: number | null;
                quantity: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                };
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                sellerId: number;
                description: string | null;
                imageUrl: string | null;
                mark: number;
                grade: string;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                origin: string;
                pricePerUnit: number;
                mbp: number | null;
                quantity: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                };
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
        path: "/admin/products/:id";
        responses: {
            200: z.ZodObject<{
                id: z.ZodNumber;
                name: z.ZodNullable<z.ZodString>;
                description: z.ZodNullable<z.ZodString>;
                imageUrl: z.ZodNullable<z.ZodString>;
                mark: z.ZodNumber;
                grade: z.ZodString;
                invoiceNo: z.ZodString;
                weightPerUnit: z.ZodNumber;
                sampleWeight: z.ZodNullable<z.ZodNumber>;
                productionMonth: z.ZodString;
                location: z.ZodString;
                origin: z.ZodString;
                pricePerUnit: z.ZodNumber;
                mbp: z.ZodNullable<z.ZodNumber>;
                quantity: z.ZodNumber;
                appearanceScore: z.ZodNumber;
                liquorScore: z.ZodNumber;
                tasteScore: z.ZodNumber;
                infusionScore: z.ZodNumber;
                gradingScore: z.ZodNumber;
                volumeScore: z.ZodNumber;
                status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
                isLive: z.ZodBoolean;
                sellerId: z.ZodNumber;
                brandMark: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    logo: z.ZodNullable<z.ZodString>;
                    certificate: z.ZodNullable<z.ZodString>;
                    isDefault: z.ZodBoolean;
                    status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
                    verifiedAt: z.ZodNullable<z.ZodDate>;
                    sellerId: z.ZodNumber;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                }, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                }>;
                cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                sellerId: number;
                description: string | null;
                imageUrl: string | null;
                mark: number;
                grade: string;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                origin: string;
                pricePerUnit: number;
                mbp: number | null;
                quantity: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                };
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                sellerId: number;
                description: string | null;
                imageUrl: string | null;
                mark: number;
                grade: string;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                origin: string;
                pricePerUnit: number;
                mbp: number | null;
                quantity: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                    sellerId: number;
                };
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
};
