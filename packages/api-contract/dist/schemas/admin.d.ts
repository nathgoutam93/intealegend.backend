import z from "zod";
export declare const AdminStatsSchema: z.ZodObject<{
    totalUsers: z.ZodNumber;
    totalSellers: z.ZodNumber;
    totalBuyers: z.ZodNumber;
    totalPendingVerifications: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    totalUsers: number;
    totalSellers: number;
    totalBuyers: number;
    totalPendingVerifications: number;
}, {
    totalUsers: number;
    totalSellers: number;
    totalBuyers: number;
    totalPendingVerifications: number;
}>;
