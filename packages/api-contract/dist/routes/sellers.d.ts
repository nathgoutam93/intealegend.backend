import z from "zod";
export declare const sellersRouter: {
    getProfile: {
        pathParams: z.ZodObject<{
            userId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        method: "GET";
        path: "/sellers/profile/:userId";
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
        path: "/sellers/profile";
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
        path: "/sellers/profile/:userId";
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
