import z from "zod";
export declare const SellerStatsSchema: z.ZodObject<{
    totalSales: z.ZodNumber;
    products: z.ZodObject<{
        total: z.ZodNumber;
        listed: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
        listed: number;
    }, {
        total: number;
        listed: number;
    }>;
    totalOrders: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    products: {
        total: number;
        listed: number;
    };
    totalSales: number;
    totalOrders: number;
}, {
    products: {
        total: number;
        listed: number;
    };
    totalSales: number;
    totalOrders: number;
}>;
