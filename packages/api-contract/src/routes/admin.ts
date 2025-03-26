import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  UserSchema,
  PendingUserSchema,
  AdminProfileSchema,
  SellerProfileSchema,
  BuyerProfileSchema,
  DashboardStatsSchema,
} from "../schemas";
import z from "zod";

const c = initContract();

export const adminRouter = c.router({
  getProfile: {
    method: "GET",
    path: "/admin/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    responses: {
      200: AdminProfileSchema,
      404: ErrorSchema,
    },
  },
  createProfile: {
    method: "POST",
    path: "/admin/profile",
    body: z.object({
      fullName: z.string(),
      userId: z.number(),
    }),
    responses: {
      201: AdminProfileSchema,
      400: ErrorSchema,
    },
  },
  stats: {
    method: "GET",
    path: "/admin/stats",
    responses: {
      200: DashboardStatsSchema,
      401: ErrorSchema,
      403: ErrorSchema,
    },
  },
  listVerifiedUsers: {
    method: "GET",
    path: "/admin/users/verified",
    query: z.object({
      role: z.enum(["SELLER", "BUYER"]),
      limit: z.number().min(1).max(100).optional().default(10),
      offset: z.number().min(0).optional().default(0),
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
  listPendingVerifications: {
    method: "GET",
    path: "/admin/verifications/pending",
    query: z.object({
      role: z.enum(["SELLER", "BUYER"]),
      limit: z.number().min(1).max(100).optional().default(10),
      offset: z.number().min(0).optional().default(0),
    }),
    responses: {
      200: z.object({
        data: z.discriminatedUnion("role", [
          z.object({
            role: z.literal("SELLER"),
            users: PendingUserSchema.array(),
          }),
          z.object({
            role: z.literal("BUYER"),
            users: PendingUserSchema.array(),
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
    path: "/admin/verify-users",
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
