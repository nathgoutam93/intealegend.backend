import z from "zod";

export const OrderItemSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  productId: z.number(),
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
  totalAmount: z.number(),
  estimatedWeight: z.number(),
  deliveryCharges: z.number().nullable(),
  gstAmount: z.number(),
  otherCharges: z.number().nullable(),
  roundOff: z.number().nullable(),
  orderItems: z.array(OrderItemSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});
