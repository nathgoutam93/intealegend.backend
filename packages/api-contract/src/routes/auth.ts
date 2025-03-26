import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  UserSchema,
  PendingUserSchema,
  AdminProfileSchema,
  SellerProfileSchema,
  DashboardStatsSchema,
  LoginResponseSchema,
  BuyerProfileSchema,
} from "../schemas";
import z from "zod";

const c = initContract();

export const authRouter = c.router({
  login: {
    method: "POST",
    path: "/auth/login",
    body: z.object({
      identifier: z.string(), // Can be email or uniqueIdentifier
      password: z.string(),
    }),
    responses: {
      200: LoginResponseSchema,
      400: ErrorSchema,
      401: ErrorSchema,
    },
  },
  register: {
    method: "POST",
    path: "/auth/register",
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8),
      role: z.enum(["SELLER", "BUYER"]),
      profile: z.union([
        SellerProfileSchema.omit({
          id: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
        }),
        BuyerProfileSchema.omit({
          id: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
        }),
      ]),
    }),
    responses: {
      201: UserSchema,
      400: ErrorSchema,
    },
  },
  adminLogin: {
    method: "POST",
    path: "/auth/admin/login",
    body: z.object({
      email: z.string().email(),
      password: z.string(),
    }),
    responses: {
      200: LoginResponseSchema,
      400: ErrorSchema,
      401: ErrorSchema,
    },
  },
});
