import z from "zod";
export declare const buyersRouter: {
    getProfile: {
        method: "GET";
        path: "/buyer/profile";
        responses: {
            200: z.ZodObject<{
                transportName: z.ZodNullable<z.ZodString>;
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
                transportName: string | null;
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
                transportName: string | null;
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
            transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
            transportName?: string | null | undefined;
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
            transportName?: string | null | undefined;
        }>;
        path: "/buyers/profile";
        responses: {
            200: z.ZodObject<{
                transportName: z.ZodNullable<z.ZodString>;
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
                transportName: string | null;
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
                transportName: string | null;
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
            grade: z.ZodOptional<z.ZodString>;
            sortBy: z.ZodOptional<z.ZodEnum<["price", "createdAt", "name"]>>;
            sortOrder: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        }, "strip", z.ZodTypeAny, {
            limit: string;
            offset: string;
            search?: string | undefined;
            grade?: string | undefined;
            sortBy?: "createdAt" | "name" | "price" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }, {
            search?: string | undefined;
            grade?: string | undefined;
            limit?: string | undefined;
            offset?: string | undefined;
            sortBy?: "createdAt" | "name" | "price" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        }>;
        method: "GET";
        path: "/products";
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
        path: "/cart";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                productId: z.ZodString;
                quantity: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                quantity: number;
                productId: string;
            }, {
                quantity: number;
                productId: string;
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
            quantity: number;
            productId: string;
        }, {
            quantity: number;
            productId: string;
        }>;
        path: "/cart";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                productId: z.ZodString;
                quantity: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                quantity: number;
                productId: string;
            }, {
                quantity: number;
                productId: string;
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
        path: "/cart/:productId";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                productId: z.ZodString;
                quantity: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                quantity: number;
                productId: string;
            }, {
                quantity: number;
                productId: string;
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
        path: "/cart/:productId";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                productId: z.ZodString;
                quantity: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                quantity: number;
                productId: string;
            }, {
                quantity: number;
                productId: string;
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
                quantity: number;
                productId: string;
            }, {
                quantity: number;
                productId: string;
            }>, "many">;
            shippingAddress: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            items: {
                quantity: number;
                productId: string;
            }[];
            shippingAddress: string;
        }, {
            items: {
                quantity: number;
                productId: string;
            }[];
            shippingAddress: string;
        }>;
        path: "/orders";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                userId: z.ZodNumber;
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
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }>, "many">;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }[];
                totalAmount: number;
                estimatedWeight: number;
                deliveryCharges: number | null;
                gstAmount: number;
                otherCharges: number | null;
                roundOff: number | null;
            }, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }[];
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
        path: "/orders";
        responses: {
            200: z.ZodArray<z.ZodObject<{
                id: z.ZodNumber;
                userId: z.ZodNumber;
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
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }>, "many">;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }[];
                totalAmount: number;
                estimatedWeight: number;
                deliveryCharges: number | null;
                gstAmount: number;
                otherCharges: number | null;
                roundOff: number | null;
            }, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }[];
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
        path: "/orders/:orderId";
        responses: {
            200: z.ZodObject<{
                id: z.ZodNumber;
                userId: z.ZodNumber;
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
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }, {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }>, "many">;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                status: "PENDING" | "ACCEPTED" | "DESPATCHED" | "ON_WAY" | "DELIVERED" | "CANCELLED";
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }[];
                totalAmount: number;
                estimatedWeight: number;
                deliveryCharges: number | null;
                gstAmount: number;
                otherCharges: number | null;
                roundOff: number | null;
            }, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                orderItems: {
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    orderId: number;
                    productId: number;
                    unitPrice: number;
                    totalPrice: number;
                    totalWeight: number;
                }[];
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
