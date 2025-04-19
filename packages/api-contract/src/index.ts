import { initContract } from "@ts-rest/core";
import { usersRouter } from "./routes/users";
import { adminRouter } from "./routes/admin";
import { sellersRouter } from "./routes/sellers";
import { buyersRouter } from "./routes/buyers";
import { staffRouter } from "./routes/staff";
import { authRouter } from "./routes/auth";
import {
  UserSchema,
  PendingUserSchema,
  SellerProfileSchema,
  BuyerProfileSchema,
  ProductSchema,
} from "./schemas";
import z from "zod";
import { BrandMarkSchema } from "./schemas/brandMark";

const c = initContract();

export const contract = c.router(
  {
    auth: authRouter,
    users: usersRouter,
    admin: adminRouter,
    staff: staffRouter,
    sellers: sellersRouter,
    buyers: buyersRouter,
  },
  { pathPrefix: "/api" }
);

export type Contract = typeof contract;

// Export types instead of schemas
export type User = z.infer<typeof UserSchema>;
export type PendingUser = z.infer<typeof PendingUserSchema>;
export type SellerProfile = z.infer<typeof SellerProfileSchema>;
export type BuyerProfile = z.infer<typeof BuyerProfileSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type BrandMark = z.infer<typeof BrandMarkSchema>;
