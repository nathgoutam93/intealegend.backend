import z from "zod";
import { UserSchema } from "./user";

export const ErrorSchema = z.object({
  message: z.string(),
  code: z.string(),
  timestamp: z.string(),
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  user: UserSchema,
});
