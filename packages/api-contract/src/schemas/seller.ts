import z from "zod";

export const SellerStatsSchema = z.object({
  totalSales: z.number(),
  products: z.object({
    total: z.number(),
    listed: z.number(),
  }),
  totalOrders: z.number(),
});
