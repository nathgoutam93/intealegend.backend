import z from "zod";

export const BusinessInfoSchema = z.object({
  businessName: z.string(),
  businessType: z.string().nullable().optional(),
  ownerName: z.string(),
});

export const AddressInfoSchema = z.object({
  address: z.string(),
  state: z.string(),
  district: z.string(),
  pincode: z.string(),
});

export const ContactInfoSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  secondaryContactName: z.string().nullable().optional(),
  secondaryContactDesignation: z.string().nullable().optional(),
  secondaryContactNumber: z.string().nullable().optional(),
});

export const BusinessDocumentsSchema = z.object({
  panNumber: z.string().nullable().optional(),
  panCard: z.string().nullable().optional(),
  gstNumber: z.string().nullable().optional(),
  gstCertificate: z.string().nullable().optional(),
  fssaiNumber: z.string().nullable().optional(),
  fssaiLicense: z.string().nullable().optional(),
});

export const BankingInfoSchema = z.object({
  bankAccountNumber: z.string().nullable().optional(),
  bankIfscCode: z.string().nullable().optional(),
});

export const SellerProfileSchema = z.object({
  id: z.number(),
  ...BusinessInfoSchema.shape,
  ...AddressInfoSchema.shape,
  ...ContactInfoSchema.shape,
  ...BusinessDocumentsSchema.shape,
  ...BankingInfoSchema.shape,
  tmcoNumber: z.string().nullable().optional(),
  cancelledCheque: z.string().nullable().optional(),
  brandName: z.string().nullable().optional(),
  brandLogo: z.string().nullable().optional(),
  brandCertificate: z.string().nullable().optional(),
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const BuyerProfileSchema = z.object({
  id: z.number(),
  ...BusinessInfoSchema.shape,
  ...AddressInfoSchema.shape,
  ...ContactInfoSchema.shape,
  ...BusinessDocumentsSchema.shape,
  ...BankingInfoSchema.shape,
  town: z.string(),
  transportName: z.string().nullable().optional(),
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const AdminProfileSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const StaffPermissionsSchema = z.object({
  users: z.object({
    read: z.boolean(),
    write: z.boolean(),
    delete: z.boolean(),
  }),
  sellers: z.object({
    read: z.boolean(),
    write: z.boolean(),
    verify: z.boolean(),
  }),
  buyers: z.object({
    read: z.boolean(),
    write: z.boolean(),
    verify: z.boolean(),
  }),
  staff: z.object({
    read: z.boolean(),
    write: z.boolean(),
    delete: z.boolean(),
  }),
});

export const StaffProfileSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  permissions: StaffPermissionsSchema,
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
