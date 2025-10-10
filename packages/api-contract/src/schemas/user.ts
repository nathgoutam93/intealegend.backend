import z from "zod";
import {
  AddressInfoSchema,
  BankingInfoSchema,
  BusinessDocumentsSchema,
  BusinessInfoSchema,
  ContactInfoSchema,
} from "./profile";

export const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  role: z.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]),
  superSeller: z.boolean(),
  verified: z.boolean(),
  isSuspended: z.boolean(),
  uniqueIdentifier: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const PendingUserSchema = z.object({
  id: z.number(),
  email: z.string(),
  role: z.enum(["SELLER", "BUYER"]),
  verified: z.boolean(),
  createdAt: z.string(),
  profile: z.discriminatedUnion("role", [
    z.object({
      role: z.literal("SELLER"),
      ...BusinessInfoSchema.shape,
      ...AddressInfoSchema.shape,
      ...ContactInfoSchema.shape,
      ...BusinessDocumentsSchema.shape,
      ...BankingInfoSchema.shape,
      tmcoNumber: z.string().nullable(),
      cancelledCheque: z.string().nullable(),
      brandName: z.string().nullable(),
      brandLogo: z.string().nullable(),
      brandCertificate: z.string().nullable(),
    }),
    z.object({
      role: z.literal("BUYER"),
      ...BusinessInfoSchema.shape,
      ...AddressInfoSchema.shape,
      ...ContactInfoSchema.shape,
      ...BusinessDocumentsSchema.shape,
      ...BankingInfoSchema.shape,
      transportName: z.string().nullable(),
    }),
  ]),
});
