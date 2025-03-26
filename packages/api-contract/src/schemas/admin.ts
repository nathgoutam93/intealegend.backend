import z from "zod";

export const DashboardStatsSchema = z.object({
  totalUsers: z.number(),
  totalSellers: z.number(),
  totalBuyers: z.number(),
  totalPendingVerifications: z.number(),
});
