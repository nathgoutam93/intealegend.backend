import z from "zod";
export declare const authRouter: {
    forgotPassword: {
        method: "POST";
        body: z.ZodObject<{
            identifier: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            identifier: string;
        }, {
            identifier: string;
        }>;
        path: "/auth/forgot-password";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
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
    resetPassword: {
        method: "POST";
        body: z.ZodObject<{
            newPassword: z.ZodString;
            resetToken: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            resetToken: string;
        }, {
            newPassword: string;
            resetToken: string;
        }>;
        path: "/auth/reset-password";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
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
    login: {
        method: "POST";
        body: z.ZodObject<{
            identifier: z.ZodString;
            password: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            identifier: string;
            password: string;
        }, {
            identifier: string;
            password: string;
        }>;
        path: "/auth/login";
        responses: {
            200: z.ZodObject<{
                accessToken: z.ZodString;
                refreshToken: z.ZodString;
                user: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                    superSeller: z.ZodBoolean;
                    verified: z.ZodBoolean;
                    isSuspended: z.ZodBoolean;
                    uniqueIdentifier: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
                    uniqueIdentifier: string | null;
                }, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
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
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
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
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
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
        metadata: {
            rawRequest: boolean;
        };
        method: "POST";
        contentType: "multipart/form-data";
        body: z.ZodObject<{
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodEnum<["SELLER", "BUYER"]>;
            profile: z.ZodUnion<[z.ZodObject<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, "passthrough", z.ZodTypeAny, z.objectOutputType<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">, z.objectInputType<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">>, z.ZodObject<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, "passthrough", z.ZodTypeAny, z.objectOutputType<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">, z.objectInputType<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">>]>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodEnum<["SELLER", "BUYER"]>;
            profile: z.ZodUnion<[z.ZodObject<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, "passthrough", z.ZodTypeAny, z.objectOutputType<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">, z.objectInputType<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">>, z.ZodObject<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, "passthrough", z.ZodTypeAny, z.objectOutputType<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">, z.objectInputType<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">>]>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            email: z.ZodString;
            password: z.ZodString;
            role: z.ZodEnum<["SELLER", "BUYER"]>;
            profile: z.ZodUnion<[z.ZodObject<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, "passthrough", z.ZodTypeAny, z.objectOutputType<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">, z.objectInputType<Omit<{
                tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">>, z.ZodObject<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, "passthrough", z.ZodTypeAny, z.objectOutputType<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">, z.objectInputType<Omit<{
                town: z.ZodString;
                transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
                bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                phone: z.ZodString;
                email: z.ZodString;
                secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                address: z.ZodString;
                state: z.ZodString;
                district: z.ZodString;
                pincode: z.ZodString;
                businessName: z.ZodString;
                businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                ownerName: z.ZodString;
                id: z.ZodNumber;
            }, "id" | "userId" | "createdAt" | "updatedAt">, z.ZodTypeAny, "passthrough">>]>;
        }, z.ZodTypeAny, "passthrough">>;
        path: "/auth/register";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                email: z.ZodString;
                role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                superSeller: z.ZodBoolean;
                verified: z.ZodBoolean;
                isSuspended: z.ZodBoolean;
                uniqueIdentifier: z.ZodNullable<z.ZodString>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                email: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                superSeller: boolean;
                verified: boolean;
                isSuspended: boolean;
                uniqueIdentifier: string | null;
            }, {
                email: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                superSeller: boolean;
                verified: boolean;
                isSuspended: boolean;
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
        path: "/auth/admin/login";
        responses: {
            200: z.ZodObject<{
                accessToken: z.ZodString;
                refreshToken: z.ZodString;
                user: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    role: z.ZodEnum<["SELLER", "BUYER", "ADMIN", "STAFF"]>;
                    superSeller: z.ZodBoolean;
                    verified: z.ZodBoolean;
                    isSuspended: z.ZodBoolean;
                    uniqueIdentifier: z.ZodNullable<z.ZodString>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
                    uniqueIdentifier: string | null;
                }, {
                    email: string;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    role: "SELLER" | "BUYER" | "ADMIN" | "STAFF";
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
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
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
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
                    superSeller: boolean;
                    verified: boolean;
                    isSuspended: boolean;
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
