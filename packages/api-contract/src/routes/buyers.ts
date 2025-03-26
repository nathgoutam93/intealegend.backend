import { initContract } from "@ts-rest/core";
import { ErrorSchema, BuyerProfileSchema } from "../schemas";
import z from "zod";

const c = initContract();

export const buyersRouter = c.router({
  getProfile: {
    method: "GET",
    path: "/buyers/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    responses: {
      200: BuyerProfileSchema,
      404: ErrorSchema,
    },
  },
  createProfile: {
    method: "POST",
    path: "/buyers/profile",
    body: BuyerProfileSchema.omit({
      id: true,
      createdAt: true,
      updatedAt: true,
    }),
    responses: {
      201: BuyerProfileSchema,
      400: ErrorSchema,
    },
  },
  updateProfile: {
    method: "PUT",
    path: "/buyers/profile/:userId",
    pathParams: z.object({
      userId: z.string(),
    }),
    body: BuyerProfileSchema.omit({
      id: true,
      userId: true,
      createdAt: true,
      updatedAt: true,
    }).partial(),
    responses: {
      200: BuyerProfileSchema,
      404: ErrorSchema,
    },
  },
});
