import { initContract } from "@ts-rest/core";
import { ErrorSchema, UserSchema, PendingUserSchema } from "../schemas";
import z from "zod";

const c = initContract();

export const usersRouter = c.router({
  findAll: {
    method: "GET",
    path: "/users",
    query: z.object({
      role: z.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]).optional(),
      verified: z.boolean().optional(),
      limit: z.number().min(1).max(100).optional().default(10),
      offset: z.number().min(0).optional().default(0),
    }),
    responses: {
      200: z.object({
        data: UserSchema.array(),
        total: z.number(),
        limit: z.number(),
        offset: z.number(),
      }),
      400: ErrorSchema,
    },
  },
  findOne: {
    method: "GET",
    path: "/users/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      200: UserSchema,
      404: ErrorSchema,
    },
  },
  create: {
    method: "POST",
    path: "/users",
    body: z.object({
      email: z.string().email(),
      password: z.string().min(8),
      role: z.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]),
    }),
    responses: {
      201: UserSchema,
      400: ErrorSchema,
    },
  },
  update: {
    method: "PUT",
    path: "/users/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      email: z.string().email().optional(),
      password: z.string().min(8).optional(),
      role: z.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]).optional(),
      verified: z.boolean().optional(),
      uniqueIdentifier: z.string().optional(),
    }),
    responses: {
      200: UserSchema,
      404: ErrorSchema,
      400: ErrorSchema,
    },
  },
  delete: {
    method: "DELETE",
    path: "/users/:id",
    pathParams: z.object({
      id: z.string(),
    }),
    responses: {
      204: z.null(),
      404: ErrorSchema,
    },
  },
  verify: {
    method: "POST",
    path: "/users/:id/verify",
    pathParams: z.object({
      id: z.string(),
    }),
    body: z.object({
      uniqueIdentifier: z.string(),
    }),
    responses: {
      200: UserSchema,
      404: ErrorSchema,
      400: ErrorSchema,
    },
  },
});
