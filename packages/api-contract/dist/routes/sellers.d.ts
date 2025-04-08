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
        path: "/seller/products";
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
        path: "/seller/products";
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
        path: "/seller/products/:id";
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
        path: "/seller/products/:id";
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
