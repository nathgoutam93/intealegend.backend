import z from "zod";

export const BusinessInfoSchema = z.object({
  businessName: z.string(),
  businessType: z.string(),
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
  secondaryContactName: z.string().nullable(),
  secondaryContactDesignation: z.string().nullable(),
  secondaryContactNumber: z.string().nullable(),
});

export const BusinessDocumentsSchema = z.object({
  panNumber: z.string(),
  panCard: z.string().nullable(),
  gstNumber: z.string(),
  gstCertificate: z.string().nullable(),
  fssaiNumber: z.string().nullable(),
  fssaiLicense: z.string().nullable(),
});

export const BankingInfoSchema = z.object({
  bankAccountNumber: z.string(),
  bankIfscCode: z.string(),
});

export const SellerProfileSchema = z.object({
  id: z.number(),
  ...BusinessInfoSchema.shape,
  ...AddressInfoSchema.shape,
  ...ContactInfoSchema.shape,
  ...BusinessDocumentsSchema.shape,
  ...BankingInfoSchema.shape,
  tmcoNumber: z.string().nullable(),
  cancelledCheque: z.string().nullable(),
  brandName: z.string().nullable(),
  brandLogo: z.string().nullable(),
  brandCertificate: z.string().nullable(),
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
  transportName: z.string().nullable(),
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
