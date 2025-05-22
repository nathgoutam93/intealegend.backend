import z from "zod";
import { BuyerProfileSchema } from "./profile";
import { ProductSchema } from "./product";

export const OrderItemSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  productId: z.number(),
  product: ProductSchema,
  quantity: z.number().int(),
  unitPrice: z.number(),
  totalPrice: z.number(),
  totalWeight: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const OrderSchema = z.object({
  id: z.number(),
  userId: z.number(),
  buyer: BuyerProfileSchema.pick({
    businessName: true,
    ownerName: true,
    transportName: true,
  }),
  status: z
    .enum([
      "PENDING",
      "ACCEPTED",
      "DESPATCHED",
      "ON_WAY",
      "DELIVERED",
      "CANCELLED",
    ])
    .default("PENDING"),
  subtotal: z.number(),
  totalAmount: z.number(),
  estimatedWeight: z.number(),
  deliveryCharges: z.number().nullable(),
  gstAmount: z.number(),
  otherCharges: z.number().nullable(),
  roundOff: z.number().nullable(),
  orderItems: z.array(OrderItemSchema),

  invoice: z.string().nullable(),
  cn: z.string().nullable(),
  transport: z.string().nullable(),

  shippingAddress: z.string(),
  shippingState: z.string(),
  shippingDistrict: z.string(),
  shippingPincode: z.string(),
  shippingPhone: z.string(),
  shippingEmail: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
