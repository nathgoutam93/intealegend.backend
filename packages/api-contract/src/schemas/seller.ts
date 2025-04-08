import z from "zod";

export const SellerStatsSchema = z.object({
  totalSales: z.number(),
  totalProducts: z.number(),
  totalOrders: z.number(),
});
