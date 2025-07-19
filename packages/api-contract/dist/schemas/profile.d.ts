import z from "zod";
export declare const BusinessInfoSchema: z.ZodObject<{
    businessName: z.ZodString;
    businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ownerName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    businessName: string;
    ownerName: string;
    businessType?: string | null | undefined;
}, {
    businessName: string;
    ownerName: string;
    businessType?: string | null | undefined;
}>;
export declare const AddressInfoSchema: z.ZodObject<{
    address: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    pincode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    state: string;
    district: string;
    pincode: string;
}, {
    address: string;
    state: string;
    district: string;
    pincode: string;
}>;
export declare const ContactInfoSchema: z.ZodObject<{
    phone: z.ZodString;
    email: z.ZodString;
    secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    phone: string;
    email: string;
    secondaryContactName?: string | null | undefined;
    secondaryContactDesignation?: string | null | undefined;
    secondaryContactNumber?: string | null | undefined;
}, {
    phone: string;
    email: string;
    secondaryContactName?: string | null | undefined;
    secondaryContactDesignation?: string | null | undefined;
    secondaryContactNumber?: string | null | undefined;
}>;
export declare const BusinessDocumentsSchema: z.ZodObject<{
    panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    panNumber?: string | null | undefined;
    panCard?: string | null | undefined;
    gstNumber?: string | null | undefined;
    gstCertificate?: string | null | undefined;
    fssaiNumber?: string | null | undefined;
    fssaiLicense?: string | null | undefined;
}, {
    panNumber?: string | null | undefined;
    panCard?: string | null | undefined;
    gstNumber?: string | null | undefined;
    gstCertificate?: string | null | undefined;
    fssaiNumber?: string | null | undefined;
    fssaiLicense?: string | null | undefined;
}>;
export declare const BankingInfoSchema: z.ZodObject<{
    bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    bankAccountNumber?: string | null | undefined;
    bankIfscCode?: string | null | undefined;
}, {
    bankAccountNumber?: string | null | undefined;
    bankIfscCode?: string | null | undefined;
}>;
export declare const SellerProfileSchema: z.ZodObject<{
    tmcoNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cancelledCheque: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    brandName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    brandLogo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    brandCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodString;
    email: z.ZodString;
    secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    pincode: z.ZodString;
    businessName: z.ZodString;
    businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ownerName: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    businessName: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    businessType?: string | null | undefined;
    secondaryContactName?: string | null | undefined;
    secondaryContactDesignation?: string | null | undefined;
    secondaryContactNumber?: string | null | undefined;
    panNumber?: string | null | undefined;
    panCard?: string | null | undefined;
    gstNumber?: string | null | undefined;
    gstCertificate?: string | null | undefined;
    fssaiNumber?: string | null | undefined;
    fssaiLicense?: string | null | undefined;
    bankAccountNumber?: string | null | undefined;
    bankIfscCode?: string | null | undefined;
    tmcoNumber?: string | null | undefined;
    cancelledCheque?: string | null | undefined;
    brandName?: string | null | undefined;
    brandLogo?: string | null | undefined;
    brandCertificate?: string | null | undefined;
}, {
    businessName: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    businessType?: string | null | undefined;
    secondaryContactName?: string | null | undefined;
    secondaryContactDesignation?: string | null | undefined;
    secondaryContactNumber?: string | null | undefined;
    panNumber?: string | null | undefined;
    panCard?: string | null | undefined;
    gstNumber?: string | null | undefined;
    gstCertificate?: string | null | undefined;
    fssaiNumber?: string | null | undefined;
    fssaiLicense?: string | null | undefined;
    bankAccountNumber?: string | null | undefined;
    bankIfscCode?: string | null | undefined;
    tmcoNumber?: string | null | undefined;
    cancelledCheque?: string | null | undefined;
    brandName?: string | null | undefined;
    brandLogo?: string | null | undefined;
    brandCertificate?: string | null | undefined;
}>;
export declare const BuyerProfileSchema: z.ZodObject<{
    town: z.ZodString;
    transportName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    bankAccountNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bankIfscCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    panNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    panCard: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gstNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gstCertificate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fssaiNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fssaiLicense: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodString;
    email: z.ZodString;
    secondaryContactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secondaryContactDesignation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    secondaryContactNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    pincode: z.ZodString;
    businessName: z.ZodString;
    businessType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    ownerName: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    businessName: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    town: string;
    businessType?: string | null | undefined;
    secondaryContactName?: string | null | undefined;
    secondaryContactDesignation?: string | null | undefined;
    secondaryContactNumber?: string | null | undefined;
    panNumber?: string | null | undefined;
    panCard?: string | null | undefined;
    gstNumber?: string | null | undefined;
    gstCertificate?: string | null | undefined;
    fssaiNumber?: string | null | undefined;
    fssaiLicense?: string | null | undefined;
    bankAccountNumber?: string | null | undefined;
    bankIfscCode?: string | null | undefined;
    transportName?: string | null | undefined;
}, {
    businessName: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    town: string;
    businessType?: string | null | undefined;
    secondaryContactName?: string | null | undefined;
    secondaryContactDesignation?: string | null | undefined;
    secondaryContactNumber?: string | null | undefined;
    panNumber?: string | null | undefined;
    panCard?: string | null | undefined;
    gstNumber?: string | null | undefined;
    gstCertificate?: string | null | undefined;
    fssaiNumber?: string | null | undefined;
    fssaiLicense?: string | null | undefined;
    bankAccountNumber?: string | null | undefined;
    bankIfscCode?: string | null | undefined;
    transportName?: string | null | undefined;
}>;
export declare const AdminProfileSchema: z.ZodObject<{
    id: z.ZodNumber;
    fullName: z.ZodString;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    fullName: string;
}, {
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    fullName: string;
}>;
export declare const StaffPermissionsSchema: z.ZodObject<{
    users: z.ZodObject<{
        read: z.ZodBoolean;
        write: z.ZodBoolean;
        delete: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        read: boolean;
        write: boolean;
        delete: boolean;
    }, {
        read: boolean;
        write: boolean;
        delete: boolean;
    }>;
    sellers: z.ZodObject<{
        read: z.ZodBoolean;
        write: z.ZodBoolean;
        verify: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        read: boolean;
        write: boolean;
        verify: boolean;
    }, {
        read: boolean;
        write: boolean;
        verify: boolean;
    }>;
    buyers: z.ZodObject<{
        read: z.ZodBoolean;
        write: z.ZodBoolean;
        verify: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        read: boolean;
        write: boolean;
        verify: boolean;
    }, {
        read: boolean;
        write: boolean;
        verify: boolean;
    }>;
    staff: z.ZodObject<{
        read: z.ZodBoolean;
        write: z.ZodBoolean;
        delete: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        read: boolean;
        write: boolean;
        delete: boolean;
    }, {
        read: boolean;
        write: boolean;
        delete: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    users: {
        read: boolean;
        write: boolean;
        delete: boolean;
    };
    sellers: {
        read: boolean;
        write: boolean;
        verify: boolean;
    };
    buyers: {
        read: boolean;
        write: boolean;
        verify: boolean;
    };
    staff: {
        read: boolean;
        write: boolean;
        delete: boolean;
    };
}, {
    users: {
        read: boolean;
        write: boolean;
        delete: boolean;
    };
    sellers: {
        read: boolean;
        write: boolean;
        verify: boolean;
    };
    buyers: {
        read: boolean;
        write: boolean;
        verify: boolean;
    };
    staff: {
        read: boolean;
        write: boolean;
        delete: boolean;
    };
}>;
export declare const StaffProfileSchema: z.ZodObject<{
    id: z.ZodNumber;
    fullName: z.ZodString;
    permissions: z.ZodObject<{
        users: z.ZodObject<{
            read: z.ZodBoolean;
            write: z.ZodBoolean;
            delete: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            read: boolean;
            write: boolean;
            delete: boolean;
        }, {
            read: boolean;
            write: boolean;
            delete: boolean;
        }>;
        sellers: z.ZodObject<{
            read: z.ZodBoolean;
            write: z.ZodBoolean;
            verify: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            read: boolean;
            write: boolean;
            verify: boolean;
        }, {
            read: boolean;
            write: boolean;
            verify: boolean;
        }>;
        buyers: z.ZodObject<{
            read: z.ZodBoolean;
            write: z.ZodBoolean;
            verify: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            read: boolean;
            write: boolean;
            verify: boolean;
        }, {
            read: boolean;
            write: boolean;
            verify: boolean;
        }>;
        staff: z.ZodObject<{
            read: z.ZodBoolean;
            write: z.ZodBoolean;
            delete: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            read: boolean;
            write: boolean;
            delete: boolean;
        }, {
            read: boolean;
            write: boolean;
            delete: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        users: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
        sellers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        buyers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        staff: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
    }, {
        users: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
        sellers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        buyers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        staff: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
    }>;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    fullName: string;
    permissions: {
        users: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
        sellers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        buyers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        staff: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
    };
}, {
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    fullName: string;
    permissions: {
        users: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
        sellers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        buyers: {
            read: boolean;
            write: boolean;
            verify: boolean;
        };
        staff: {
            read: boolean;
            write: boolean;
            delete: boolean;
        };
    };
}>;
