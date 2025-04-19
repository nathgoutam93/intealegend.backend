import z from "zod";
export declare const BrandMarkSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    logo: z.ZodNullable<z.ZodString>;
    certificate: z.ZodNullable<z.ZodString>;
    isDefault: z.ZodBoolean;
    status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
    verifiedAt: z.ZodNullable<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "APPROVED" | "REJECTED";
    id: number;
    name: string;
    logo: string | null;
    certificate: string | null;
    isDefault: boolean;
    verifiedAt: Date | null;
}, {
    status: "PENDING" | "APPROVED" | "REJECTED";
    id: number;
    name: string;
    logo: string | null;
    certificate: string | null;
    isDefault: boolean;
    verifiedAt: Date | null;
}>;
export type BrandMark = z.infer<typeof BrandMarkSchema>;
