import z from "zod";
export declare const AdminStatsSchema: z.ZodObject<{
    users: z.ZodObject<{
        total: z.ZodNumber;
        seller: z.ZodNumber;
        buyer: z.ZodNumber;
        pending: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        buyer: number;
        total: number;
        seller: number;
        pending: number;
    }, {
        buyer: number;
        total: number;
        seller: number;
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
        buyer: number;
        total: number;
        seller: number;
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
        buyer: number;
        total: number;
        seller: number;
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
