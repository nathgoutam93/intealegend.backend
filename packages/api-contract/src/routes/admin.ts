import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  UserSchema,
  SellerProfileSchema,
  BuyerProfileSchema,
  AdminStatsSchema,
} from "../schemas";
import z from "zod";

const c = initContract();

export const adminRouter = c.router({
  stats: {
    method: "GET",
    path: "/admin/stats",
    responses: {
      200: AdminStatsSchema,
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
  listUsers: {
    method: "GET",
    path: "/admin/users",
    query: z.object({
      role: z.enum(["SELLER", "BUYER"]),
      verified: z
        .string()
        .transform((str) => str === "true")
        .optional(),
      limit: z
        .string()
        .transform((val) => parseInt(val))
        .pipe(z.number().min(1).max(100))
        .optional()
        .default("10"),
      offset: z
        .string()
        .transform((val) => parseInt(val))
        .pipe(z.number().min(0))
        .optional()
        .default("0"),
    }),
    responses: {
      200: z.object({
        data: z.discriminatedUnion("role", [
          z.object({
            role: z.literal("SELLER"),
            users: UserSchema.extend({
              profile: SellerProfileSchema,
            }).array(),
          }),
          z.object({
            role: z.literal("BUYER"),
            users: UserSchema.extend({
              profile: BuyerProfileSchema,
            }).array(),
          }),
        ]),
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
      }),
      401: ErrorSchema,
      403: ErrorSchema,
      400: ErrorSchema,
    },
  },
  verifyRegistration: {
    method: "POST",
    path: "/admin/users/verify",
    body: z.object({
      userIds: z.number().array(),
    }),
    responses: {
      200: z.object({
        message: z.string(),
        verifiedUsers: z.number(),
      }),
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
});
