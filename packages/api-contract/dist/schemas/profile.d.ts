import z from "zod";
export declare const BusinessInfoSchema: z.ZodObject<{
    businessName: z.ZodString;
    businessType: z.ZodString;
    ownerName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    businessName: string;
    businessType: string;
    ownerName: string;
}, {
    businessName: string;
    businessType: string;
    ownerName: string;
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
    secondaryContactName: z.ZodNullable<z.ZodString>;
    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
    secondaryContactNumber: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    phone: string;
    email: string;
    secondaryContactName: string | null;
    secondaryContactDesignation: string | null;
    secondaryContactNumber: string | null;
}, {
    phone: string;
    email: string;
    secondaryContactName: string | null;
    secondaryContactDesignation: string | null;
    secondaryContactNumber: string | null;
}>;
export declare const BusinessDocumentsSchema: z.ZodObject<{
    panNumber: z.ZodString;
    panCard: z.ZodNullable<z.ZodString>;
    gstNumber: z.ZodString;
    gstCertificate: z.ZodNullable<z.ZodString>;
    fssaiNumber: z.ZodNullable<z.ZodString>;
    fssaiLicense: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    panNumber: string;
    panCard: string | null;
    gstNumber: string;
    gstCertificate: string | null;
    fssaiNumber: string | null;
    fssaiLicense: string | null;
}, {
    panNumber: string;
    panCard: string | null;
    gstNumber: string;
    gstCertificate: string | null;
    fssaiNumber: string | null;
    fssaiLicense: string | null;
}>;
export declare const BankingInfoSchema: z.ZodObject<{
    bankAccountNumber: z.ZodString;
    bankIfscCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    bankAccountNumber: string;
    bankIfscCode: string;
}, {
    bankAccountNumber: string;
    bankIfscCode: string;
}>;
export declare const SellerProfileSchema: z.ZodObject<{
    tmcoNumber: z.ZodNullable<z.ZodString>;
    cancelledCheque: z.ZodNullable<z.ZodString>;
    brandName: z.ZodNullable<z.ZodString>;
    brandLogo: z.ZodNullable<z.ZodString>;
    brandCertificate: z.ZodNullable<z.ZodString>;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    bankAccountNumber: z.ZodString;
    bankIfscCode: z.ZodString;
    panNumber: z.ZodString;
    panCard: z.ZodNullable<z.ZodString>;
    gstNumber: z.ZodString;
    gstCertificate: z.ZodNullable<z.ZodString>;
    fssaiNumber: z.ZodNullable<z.ZodString>;
    fssaiLicense: z.ZodNullable<z.ZodString>;
    phone: z.ZodString;
    email: z.ZodString;
    secondaryContactName: z.ZodNullable<z.ZodString>;
    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
    secondaryContactNumber: z.ZodNullable<z.ZodString>;
    address: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    pincode: z.ZodString;
    businessName: z.ZodString;
    businessType: z.ZodString;
    ownerName: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    businessName: string;
    businessType: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    secondaryContactName: string | null;
    secondaryContactDesignation: string | null;
    secondaryContactNumber: string | null;
    panNumber: string;
    panCard: string | null;
    gstNumber: string;
    gstCertificate: string | null;
    fssaiNumber: string | null;
    fssaiLicense: string | null;
    bankAccountNumber: string;
    bankIfscCode: string;
    id: number;
    tmcoNumber: string | null;
    cancelledCheque: string | null;
    brandName: string | null;
    brandLogo: string | null;
    brandCertificate: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}, {
    businessName: string;
    businessType: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    secondaryContactName: string | null;
    secondaryContactDesignation: string | null;
    secondaryContactNumber: string | null;
    panNumber: string;
    panCard: string | null;
    gstNumber: string;
    gstCertificate: string | null;
    fssaiNumber: string | null;
    fssaiLicense: string | null;
    bankAccountNumber: string;
    bankIfscCode: string;
    id: number;
    tmcoNumber: string | null;
    cancelledCheque: string | null;
    brandName: string | null;
    brandLogo: string | null;
    brandCertificate: string | null;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const BuyerProfileSchema: z.ZodObject<{
    transportName: z.ZodNullable<z.ZodString>;
    userId: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    bankAccountNumber: z.ZodString;
    bankIfscCode: z.ZodString;
    panNumber: z.ZodString;
    panCard: z.ZodNullable<z.ZodString>;
    gstNumber: z.ZodString;
    gstCertificate: z.ZodNullable<z.ZodString>;
    fssaiNumber: z.ZodNullable<z.ZodString>;
    fssaiLicense: z.ZodNullable<z.ZodString>;
    phone: z.ZodString;
    email: z.ZodString;
    secondaryContactName: z.ZodNullable<z.ZodString>;
    secondaryContactDesignation: z.ZodNullable<z.ZodString>;
    secondaryContactNumber: z.ZodNullable<z.ZodString>;
    address: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    pincode: z.ZodString;
    businessName: z.ZodString;
    businessType: z.ZodString;
    ownerName: z.ZodString;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    businessName: string;
    businessType: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    secondaryContactName: string | null;
    secondaryContactDesignation: string | null;
    secondaryContactNumber: string | null;
    panNumber: string;
    panCard: string | null;
    gstNumber: string;
    gstCertificate: string | null;
    fssaiNumber: string | null;
    fssaiLicense: string | null;
    bankAccountNumber: string;
    bankIfscCode: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    transportName: string | null;
}, {
    businessName: string;
    businessType: string;
    ownerName: string;
    address: string;
    state: string;
    district: string;
    pincode: string;
    phone: string;
    email: string;
    secondaryContactName: string | null;
    secondaryContactDesignation: string | null;
    secondaryContactNumber: string | null;
    panNumber: string;
    panCard: string | null;
    gstNumber: string;
    gstCertificate: string | null;
    fssaiNumber: string | null;
    fssaiLicense: string | null;
    bankAccountNumber: string;
    bankIfscCode: string;
    id: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    transportName: string | null;
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
