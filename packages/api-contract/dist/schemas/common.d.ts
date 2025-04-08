import z from "zod";
export declare const ErrorSchema: z.ZodObject<{
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
export declare const LoginResponseSchema: z.ZodObject<{
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
