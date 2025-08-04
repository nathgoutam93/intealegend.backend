import z from "zod";
import { UserSchema } from "./user";

export const ErrorSchema = z.object({
  message: z.string(),
  code: z.string(),
  timestamp: z.string(),
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  user: UserSchema,
});

// Forgot Password: Request by userId (buyer or seller)
export const ForgotPasswordRequestSchema = z.object({
  identifier: z.string(),
});

export const ForgotPasswordResponseSchema = z.object({
  message: z.string(), // e.g. "Reset link sent" or similar
});

// Reset Password: Set new password using userId
export const ResetPasswordRequestSchema = z.object({
  newPassword: z.string().min(8),
  resetToken: z.string(),
});

export const ResetPasswordResponseSchema = z.object({
  message: z.string(), // e.g. "Password updated successfully"
});
