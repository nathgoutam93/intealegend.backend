import z from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  imageUrl: z.string().nullable(),

  grade: z.string(),
  mark: z.string(),
  invoiceNo: z.string(),

  weightPerUnit: z.number(),
  sampleWeight: z.number().nullable(),

  productionMonth: z.string(),
  location: z.string(),
  origin: z.string(),

  pricePerUnit: z.number(),
  score: z.number().nullable(),
  mbp: z.number().nullable(),

  sellerId: z.number(),

  cartItems: z.array(z.any()).optional(),
  orderItems: z.array(z.any()).optional(),

  createdAt: z.date(),
  updatedAt: z.date(),
});
