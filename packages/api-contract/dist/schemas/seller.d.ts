import z from "zod";
export declare const SellerStatsSchema: z.ZodObject<{
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
