import z from "zod";
export declare const sellersRouter: {
    getProfile: {
        method: "GET";
        path: "/seller/profile";
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
                id: number;
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
                createdAt: Date;
                updatedAt: Date;
            }, {
                id: number;
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
        path: "/seller/profile";
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
                id: number;
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
                createdAt: Date;
                updatedAt: Date;
            }, {
                id: number;
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
        path: "/seller/stats";
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
            offset: string;
            limit: string;
            search?: string | undefined;
            sortBy?: "createdAt" | "price" | "name" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
            minPrice?: string | undefined;
            maxPrice?: string | undefined;
            grade?: string | undefined;
            origin?: string | undefined;
        }, {
            search?: string | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            sortBy?: "createdAt" | "price" | "name" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
            minPrice?: string | undefined;
            maxPrice?: string | undefined;
            grade?: string | undefined;
            origin?: string | undefined;
        }>;
        method: "GET";
        path: "/seller/products";
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
                    score: z.ZodNumber;
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
                        sellerId: number;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                    }, {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        sellerId: number;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                    }>;
                    cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    description: string | null;
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    grade: string;
                    origin: string;
                    imageUrl: string | null;
                    mark: number;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    score: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    sellerId: number;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        sellerId: number;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                    };
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }, {
                    description: string | null;
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    grade: string;
                    origin: string;
                    imageUrl: string | null;
                    mark: number;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    score: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    sellerId: number;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        sellerId: number;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                    };
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }>, "many">;
                total: z.ZodNumber;
                offset: z.ZodNumber;
                limit: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                offset: number;
                limit: number;
                data: {
                    description: string | null;
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    grade: string;
                    origin: string;
                    imageUrl: string | null;
                    mark: number;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    score: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    sellerId: number;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        sellerId: number;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                    };
                    cartItems?: any[] | undefined;
                    orderItems?: any[] | undefined;
                }[];
                total: number;
            }, {
                offset: number;
                limit: number;
                data: {
                    description: string | null;
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string | null;
                    grade: string;
                    origin: string;
                    imageUrl: string | null;
                    mark: number;
                    invoiceNo: string;
                    weightPerUnit: number;
                    sampleWeight: number | null;
                    productionMonth: string;
                    location: string;
                    pricePerUnit: number;
                    mbp: number | null;
                    score: number;
                    appearanceScore: number;
                    liquorScore: number;
                    tasteScore: number;
                    infusionScore: number;
                    gradingScore: number;
                    volumeScore: number;
                    isLive: boolean;
                    sellerId: number;
                    brandMark: {
                        status: "PENDING" | "APPROVED" | "REJECTED";
                        id: number;
                        createdAt: Date;
                        updatedAt: Date;
                        name: string;
                        sellerId: number;
                        logo: string | null;
                        certificate: string | null;
                        isDefault: boolean;
                        verifiedAt: Date | null;
                    };
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
            score: z.ZodNumber;
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }>;
            cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "id" | "createdAt" | "updatedAt" | "sellerId" | "brandMark">, "strip", z.ZodTypeAny, {
            description: string | null;
            status: "PENDING" | "APPROVED" | "REJECTED";
            name: string | null;
            grade: string;
            origin: string;
            imageUrl: string | null;
            mark: number;
            invoiceNo: string;
            weightPerUnit: number;
            sampleWeight: number | null;
            productionMonth: string;
            location: string;
            pricePerUnit: number;
            mbp: number | null;
            score: number;
            appearanceScore: number;
            liquorScore: number;
            tasteScore: number;
            infusionScore: number;
            gradingScore: number;
            volumeScore: number;
            isLive: boolean;
            cartItems?: any[] | undefined;
            orderItems?: any[] | undefined;
        }, {
            description: string | null;
            status: "PENDING" | "APPROVED" | "REJECTED";
            name: string | null;
            grade: string;
            origin: string;
            imageUrl: string | null;
            mark: number;
            invoiceNo: string;
            weightPerUnit: number;
            sampleWeight: number | null;
            productionMonth: string;
            location: string;
            pricePerUnit: number;
            mbp: number | null;
            score: number;
            appearanceScore: number;
            liquorScore: number;
            tasteScore: number;
            infusionScore: number;
            gradingScore: number;
            volumeScore: number;
            isLive: boolean;
            cartItems?: any[] | undefined;
            orderItems?: any[] | undefined;
        }>;
        path: "/seller/products";
        responses: {
            201: z.ZodObject<{
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
                score: z.ZodNumber;
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
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                }, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                }>;
                cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                description: string | null;
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                grade: string;
                origin: string;
                imageUrl: string | null;
                mark: number;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                pricePerUnit: number;
                mbp: number | null;
                score: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                sellerId: number;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                };
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }, {
                description: string | null;
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                grade: string;
                origin: string;
                imageUrl: string | null;
                mark: number;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                pricePerUnit: number;
                mbp: number | null;
                score: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                sellerId: number;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
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
            description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            status: z.ZodOptional<z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            grade: z.ZodOptional<z.ZodString>;
            origin: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            mark: z.ZodOptional<z.ZodNumber>;
            invoiceNo: z.ZodOptional<z.ZodString>;
            weightPerUnit: z.ZodOptional<z.ZodNumber>;
            sampleWeight: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            productionMonth: z.ZodOptional<z.ZodString>;
            location: z.ZodOptional<z.ZodString>;
            pricePerUnit: z.ZodOptional<z.ZodNumber>;
            mbp: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            score: z.ZodOptional<z.ZodNumber>;
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }>>;
            cartItems: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
            orderItems: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
        }, "strip", z.ZodTypeAny, {
            description?: string | null | undefined;
            status?: "PENDING" | "APPROVED" | "REJECTED" | undefined;
            name?: string | null | undefined;
            grade?: string | undefined;
            origin?: string | undefined;
            imageUrl?: string | null | undefined;
            mark?: number | undefined;
            invoiceNo?: string | undefined;
            weightPerUnit?: number | undefined;
            sampleWeight?: number | null | undefined;
            productionMonth?: string | undefined;
            location?: string | undefined;
            pricePerUnit?: number | undefined;
            mbp?: number | null | undefined;
            score?: number | undefined;
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            } | undefined;
            cartItems?: any[] | undefined;
            orderItems?: any[] | undefined;
        }, {
            description?: string | null | undefined;
            status?: "PENDING" | "APPROVED" | "REJECTED" | undefined;
            name?: string | null | undefined;
            grade?: string | undefined;
            origin?: string | undefined;
            imageUrl?: string | null | undefined;
            mark?: number | undefined;
            invoiceNo?: string | undefined;
            weightPerUnit?: number | undefined;
            sampleWeight?: number | null | undefined;
            productionMonth?: string | undefined;
            location?: string | undefined;
            pricePerUnit?: number | undefined;
            mbp?: number | null | undefined;
            score?: number | undefined;
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            } | undefined;
            cartItems?: any[] | undefined;
            orderItems?: any[] | undefined;
        }>;
        path: "/seller/products/:id";
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
                score: z.ZodNumber;
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
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                }, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                }>;
                cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                description: string | null;
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                grade: string;
                origin: string;
                imageUrl: string | null;
                mark: number;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                pricePerUnit: number;
                mbp: number | null;
                score: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                sellerId: number;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                };
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }, {
                description: string | null;
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                grade: string;
                origin: string;
                imageUrl: string | null;
                mark: number;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                pricePerUnit: number;
                mbp: number | null;
                score: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                sellerId: number;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
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
        path: "/seller/products/:id";
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
                score: z.ZodNumber;
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
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                }, {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                }>;
                cartItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                orderItems: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                description: string | null;
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                grade: string;
                origin: string;
                imageUrl: string | null;
                mark: number;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                pricePerUnit: number;
                mbp: number | null;
                score: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                sellerId: number;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
                };
                cartItems?: any[] | undefined;
                orderItems?: any[] | undefined;
            }, {
                description: string | null;
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                grade: string;
                origin: string;
                imageUrl: string | null;
                mark: number;
                invoiceNo: string;
                weightPerUnit: number;
                sampleWeight: number | null;
                productionMonth: string;
                location: string;
                pricePerUnit: number;
                mbp: number | null;
                score: number;
                appearanceScore: number;
                liquorScore: number;
                tasteScore: number;
                infusionScore: number;
                gradingScore: number;
                volumeScore: number;
                isLive: boolean;
                sellerId: number;
                brandMark: {
                    status: "PENDING" | "APPROVED" | "REJECTED";
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    sellerId: number;
                    logo: string | null;
                    certificate: string | null;
                    isDefault: boolean;
                    verifiedAt: Date | null;
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
            offset: string;
            limit: string;
            status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
            sortBy?: "createdAt" | "totalAmount" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        }, {
            status?: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED" | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            sortBy?: "createdAt" | "totalAmount" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
        }>;
        method: "GET";
        path: "/seller/orders";
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
                    totalAmount: number;
                    buyerId: number;
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
                    totalAmount: number;
                    buyerId: number;
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
                offset: number;
                limit: number;
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
                    totalAmount: number;
                    buyerId: number;
                    estimatedWeight: number;
                    deliveryCharges: number | null;
                    gstAmount: number;
                    otherCharges: number | null;
                    roundOff: number | null;
                }[];
                total: number;
            }, {
                offset: number;
                limit: number;
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
                    totalAmount: number;
                    buyerId: number;
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
        path: "/seller/orders/:id";
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
                totalAmount: number;
                buyerId: number;
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
                totalAmount: number;
                buyerId: number;
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
        path: "/seller/orders/:id";
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
                totalAmount: number;
                buyerId: number;
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
                totalAmount: number;
                buyerId: number;
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
    getBrandMarks: {
        method: "GET";
        path: "/seller/brand-marks";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }>, "many">;
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
    createBrandMark: {
        method: "POST";
        body: z.ZodObject<Omit<{
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
        }, "status" | "id" | "createdAt" | "updatedAt" | "sellerId" | "verifiedAt">, "strip", z.ZodTypeAny, {
            name: string;
            logo: string | null;
            certificate: string | null;
            isDefault: boolean;
        }, {
            name: string;
            logo: string | null;
            certificate: string | null;
            isDefault: boolean;
        }>;
        path: "/seller/brand-marks";
        responses: {
            201: z.ZodObject<{
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
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
    updateBrandMark: {
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
            logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            certificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            isDefault: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            logo?: string | null | undefined;
            certificate?: string | null | undefined;
            isDefault?: boolean | undefined;
        }, {
            name?: string | undefined;
            logo?: string | null | undefined;
            certificate?: string | null | undefined;
            isDefault?: boolean | undefined;
        }>;
        path: "/seller/brand-marks/:id";
        responses: {
            200: z.ZodObject<{
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
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
    getBrandMark: {
        pathParams: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        method: "GET";
        path: "/seller/brand-marks/:id";
        responses: {
            200: z.ZodObject<{
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
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
            }, {
                status: "PENDING" | "APPROVED" | "REJECTED";
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                sellerId: number;
                logo: string | null;
                certificate: string | null;
                isDefault: boolean;
                verifiedAt: Date | null;
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
