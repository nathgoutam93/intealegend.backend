import { initContract } from "@ts-rest/core";
import z from "zod";

const c = initContract();

// Shared error schema
const ErrorSchema = z.object({
  message: z.string(),
  code: z.string(),
  timestamp: z.string(),
});

// Base user schema
const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  role: z.enum(["SELLER", "BUYER", "ADMIN", "STAFF"]),
  verified: z.boolean(),
  uniqueIdentifier: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const AdminProfileSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const StaffPermissionsSchema = z.object({
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

const StaffProfileSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  permissions: StaffPermissionsSchema,
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Common schemas that are shared between profiles
const BusinessInfoSchema = z.object({
  businessName: z.string(),
  businessType: z.string(),
  ownerName: z.string(),
});

const AddressInfoSchema = z.object({
  address: z.string(),
  state: z.string(),
  district: z.string(),
  pincode: z.string(),
});

const ContactInfoSchema = z.object({
  phone: z.string(),
  email: z.string().email(),
  secondaryContactName: z.string().nullable(),
  secondaryContactDesignation: z.string().nullable(),
  secondaryContactNumber: z.string().nullable(),
});

const BusinessDocumentsSchema = z.object({
  panNumber: z.string(),
  panCard: z.string().nullable(),
  gstNumber: z.string(),
  gstCertificate: z.string().nullable(),
  fssaiNumber: z.string().nullable(),
  fssaiLicense: z.string().nullable(),
});

const BankingInfoSchema = z.object({
  bankAccountNumber: z.string(),
  bankIfscCode: z.string(),
});

// Profile schemas
const SellerProfileSchema = z.object({
  id: z.number(),
  ...BusinessInfoSchema.shape,
  ...AddressInfoSchema.shape,
  ...ContactInfoSchema.shape,
  ...BusinessDocumentsSchema.shape,
  ...BankingInfoSchema.shape,
  tmcoNumber: z.string().nullable(),
  cancelledCheque: z.string().nullable(),
  transportName: z.string().nullable(),
  brandName: z.string().nullable(),
  brandLogo: z.string().nullable(),
  brandCertificate: z.string().nullable(),
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const BuyerProfileSchema = z.object({
  id: z.number(),
  ...BusinessInfoSchema.shape,
  ...AddressInfoSchema.shape,
  ...ContactInfoSchema.shape,
  ...BusinessDocumentsSchema.shape,
  ...BankingInfoSchema.shape,
  userId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const LoginResponseSchema = z.object({
  accessToken: z.string(),
  user: UserSchema,
});

// Define the pending user schema with role-specific profiles
const PendingUserSchema = z.object({
  id: z.number(),
  email: z.string(),
  role: z.enum(["SELLER", "BUYER"]),
  verified: z.boolean(),
  createdAt: z.string(),
  profile: z.discriminatedUnion("role", [
    z.object({
      role: z.literal("SELLER"),
      ...BusinessInfoSchema.shape,
      ...AddressInfoSchema.shape,
      ...ContactInfoSchema.shape,
      ...BusinessDocumentsSchema.shape,
      ...BankingInfoSchema.shape,
      tmcoNumber: z.string().nullable(),
      cancelledCheque: z.string().nullable(),
      transportName: z.string().nullable(),
      brandName: z.string().nullable(),
      brandLogo: z.string().nullable(),
      brandCertificate: z.string().nullable(),
    }),
    z.object({
      role: z.literal("BUYER"),
      ...BusinessInfoSchema.shape,
      ...AddressInfoSchema.shape,
      ...ContactInfoSchema.shape,
      ...BusinessDocumentsSchema.shape,
      ...BankingInfoSchema.shape,
    }),
  ]),
});

export const contract = c.router(
  {
    users: {
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
      getPendingRegistrations: {
        method: "GET",
        path: "/users/pending",
        responses: {
          200: z.array(PendingUserSchema),
          500: ErrorSchema,
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
      verifyRegistration: {
        method: "POST",
        path: "/users/verify",
        body: z.object({
          userIds: z.number().array(),
        }),
        responses: {
          200: z.object({
            message: z.string(),
            verifiedUsers: z.number(),
          }),
        },
      },
    },
    admin: {
      getProfile: {
        method: "GET",
        path: "/admin/profile/:userId",
        pathParams: z.object({
          userId: z.string(),
        }),
        responses: {
          200: AdminProfileSchema,
          404: ErrorSchema,
        },
      },
      createProfile: {
        method: "POST",
        path: "/admin/profile",
        body: z.object({
          fullName: z.string(),
          userId: z.number(),
        }),
        responses: {
          201: AdminProfileSchema,
          400: ErrorSchema,
        },
      },
    },
    sellers: {
      getProfile: {
        method: "GET",
        path: "/sellers/profile/:userId",
        pathParams: z.object({
          userId: z.string(),
        }),
        responses: {
          200: SellerProfileSchema,
          404: ErrorSchema,
        },
      },
      createProfile: {
        method: "POST",
        path: "/sellers/profile",
        body: SellerProfileSchema.omit({
          id: true,
          createdAt: true,
          updatedAt: true,
        }),
        responses: {
          201: SellerProfileSchema,
          400: ErrorSchema,
        },
      },
      updateProfile: {
        method: "PUT",
        path: "/sellers/profile/:userId",
        pathParams: z.object({
          userId: z.string(),
        }),
        body: SellerProfileSchema.omit({
          id: true,
          userId: true,
          createdAt: true,
          updatedAt: true,
        }).partial(),
        responses: {
          200: SellerProfileSchema,
          404: ErrorSchema,
        },
      },
    },
    buyers: {
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
    },
    staff: {
      getProfile: {
        method: "GET",
        path: "/staff/profile/:userId",
        pathParams: z.object({
          userId: z.string(),
        }),
        responses: {
          200: StaffProfileSchema,
          404: ErrorSchema,
        },
      },
      createProfile: {
        method: "POST",
        path: "/staff/profile",
        body: z.object({
          fullName: z.string(),
          userId: z.number(),
          permissions: StaffPermissionsSchema,
        }),
        responses: {
          201: StaffProfileSchema,
          400: ErrorSchema,
        },
      },
      updateProfile: {
        method: "PUT",
        path: "/staff/profile/:userId",
        pathParams: z.object({
          userId: z.string(),
        }),
        body: z.object({
          fullName: z.string().optional(),
          permissions: StaffPermissionsSchema.optional(),
        }),
        responses: {
          200: StaffProfileSchema,
          404: ErrorSchema,
        },
      },
      deleteProfile: {
        method: "DELETE",
        path: "/staff/profile/:userId",
        pathParams: z.object({
          userId: z.string(),
        }),
        responses: {
          204: z.null(),
          404: ErrorSchema,
        },
      },
    },
    auth: {
      login: {
        method: "POST",
        path: "/auth/login",
        body: z.object({
          identifier: z.string(), // Can be email or uniqueIdentifier
          password: z.string(),
        }),
        responses: {
          200: LoginResponseSchema,
          400: ErrorSchema,
          401: ErrorSchema,
        },
      },
      register: {
        method: "POST",
        path: "/auth/register",
        body: z.object({
          email: z.string().email(),
          password: z.string().min(8),
          role: z.enum(["SELLER", "BUYER"]),
          profile: z.union([
            SellerProfileSchema.omit({
              id: true,
              userId: true,
              createdAt: true,
              updatedAt: true,
            }),
            BuyerProfileSchema.omit({
              id: true,
              userId: true,
              createdAt: true,
              updatedAt: true,
            }),
          ]),
        }),
        responses: {
          201: UserSchema,
          400: ErrorSchema,
        },
      },
      adminLogin: {
        method: "POST",
        path: "/auth/admin/login",
        body: z.object({
          email: z.string().email(),
          password: z.string(),
        }),
        responses: {
          200: LoginResponseSchema,
          400: ErrorSchema,
          401: ErrorSchema,
        },
      },
    },
  },
  { pathPrefix: "/api" }
);

// Export types
export type Contract = typeof contract;
export type User = z.infer<typeof UserSchema>;
export type SafeUser = z.infer<typeof UserSchema>;
export type StaffPermissions = z.infer<typeof StaffPermissionsSchema>;
export type StaffProfile = z.infer<typeof StaffProfileSchema>;
