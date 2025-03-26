import { initContract } from "@ts-rest/core";
import { ErrorSchema, SellerProfileSchema } from "../schemas";
import z from "zod";

const c = initContract();

export const sellersRouter = c.router({
  getProfile: {
    method: "GET",
    path: "/sellers/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    responses: {
      200: SellerProfileSchema,
      404: ErrorSchema,
    },
  },
  createProfile: {
    method: "POST",
    path: "/sellers/profile",
    body: SellerProfileSchema.omit({
      id: true,
      createdAt: true,
      updatedAt: true,
    }),
    responses: {
      201: SellerProfileSchema,
      400: ErrorSchema,
    },
  },
  updateProfile: {
    method: "PUT",
    path: "/sellers/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    body: SellerProfileSchema.omit({
      id: true,
      userId: true,
      createdAt: true,
      updatedAt: true,
    }).partial(),
    responses: {
      200: SellerProfileSchema,
      404: ErrorSchema,
    },
  },
});
