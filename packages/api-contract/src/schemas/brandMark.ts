// packages/api-contract/src/schemas/brandMark.ts
import z from "zod";

export const BrandMarkSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string().nullable(),
  certificate: z.string().nullable(),
  isDefault: z.boolean(),
  status: z.enum(["PENDING", "APPROVED", "REJECTED"]),
  verifiedAt: z.date().nullable(),
  sellerId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  origin: z.string().nullable(),
});

export type BrandMark = z.infer<typeof BrandMarkSchema>;
