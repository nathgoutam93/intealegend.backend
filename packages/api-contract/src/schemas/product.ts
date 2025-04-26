// packages/api-contract/src/schemas/product.ts
import z from "zod";
import { Decimal } from "@prisma/client/runtime/library";
import { BrandMarkSchema } from "./brandMark";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  imageUrl: z.string().nullable(),

  mark: z.number(),
  grade: z.string(),
  invoiceNo: z.string(),

  weightPerUnit: z.number(),
  sampleWeight: z.number().nullable(),

  productionMonth: z.string(),
  location: z.string(),
  origin: z.string(),

  pricePerUnit: z.number(),
  mbp: z.number().nullable(),

  // Simple inventory tracking
  quantity: z.number().int(),

  appearanceScore: z.number(),
  liquorScore: z.number(),
  tasteScore: z.number(),
  infusionScore: z.number(),
  gradingScore: z.number(),
  volumeScore: z.number(),

  status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
  isLive: z.boolean(),

  sellerId: z.number(),
  brandMark: BrandMarkSchema,

  cartItems: z.array(z.any()).optional(),
  orderItems: z.array(z.any()).optional(),

  createdAt: z.date(),
  updatedAt: z.date(),
});
