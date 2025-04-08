import { initContract } from "@ts-rest/core";
import {
  ErrorSchema,
  SellerProfileSchema,
  StaffProfileSchema,
} from "../schemas";
import z from "zod";
import { StaffPermissionsSchema } from "../schemas/profile";

const c = initContract();

export const staffRouter = c.router({});
