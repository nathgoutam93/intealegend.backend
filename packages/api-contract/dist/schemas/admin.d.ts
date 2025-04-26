import z from "zod";
export declare const AdminStatsSchema: z.ZodObject<{
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
