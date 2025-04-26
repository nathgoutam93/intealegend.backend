import z from "zod";

export const AdminStatsSchema = z.object({
  users: z.object({
    total: z.number(),
    seller: z.number(),
    buyer: z.number(),
    pending: z.number(),
  }),
  products: z.object({
    total: z.number(),
    listed: z.number(),
    pending: z.number(),
  }),
  orders: z.object({
    total: z.number(),
    pending: z.number(),
  }),
});
