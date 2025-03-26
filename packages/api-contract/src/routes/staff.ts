import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  SellerProfileSchema,
  StaffProfileSchema,
} from "../schemas";
import z from "zod";
import { StaffPermissionsSchema } from "../schemas/profile";

const c = initContract();

export const staffRouter = c.router({
  getProfile: {
    method: "GET",
    path: "/staff/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    responses: {
      200: StaffProfileSchema,
      404: ErrorSchema,
    },
  },
  createProfile: {
    method: "POST",
    path: "/staff/profile",
    body: z.object({
      fullName: z.string(),
      userId: z.number(),
      permissions: StaffPermissionsSchema,
    }),
    responses: {
      201: StaffProfileSchema,
      400: ErrorSchema,
    },
  },
  updateProfile: {
    method: "PUT",
    path: "/staff/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    body: z.object({
      fullName: z.string().optional(),
      permissions: StaffPermissionsSchema.optional(),
    }),
    responses: {
      200: StaffProfileSchema,
      404: ErrorSchema,
    },
  },
  deleteProfile: {
    method: "DELETE",
    path: "/staff/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    responses: {
      204: z.null(),
      404: ErrorSchema,
    },
  },
});
