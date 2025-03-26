import z from "zod";
export declare const usersRouter: {
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
        path: "/users";
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
        path: "/users/:id";
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
        path: "/users";
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
        path: "/users/:id";
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
        path: "/users/:id";
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
        path: "/users/:id/verify";
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
