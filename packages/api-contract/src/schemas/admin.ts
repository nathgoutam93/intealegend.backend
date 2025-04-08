import z from "zod";

export const AdminStatsSchema = z.object({
  totalUsers: z.number(),
  totalSellers: z.number(),
  totalBuyers: z.number(),
  totalPendingVerifications: z.number(),
});
