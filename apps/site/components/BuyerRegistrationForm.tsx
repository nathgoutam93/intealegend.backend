"use client";

import { useState } from "react";
import { Building2, Users, Mail, Phone, Lock, ArrowRight } from "lucide-react";
import StateDistrictSelector from "./state-distrcit-selector";
import { client } from "@/lib/api-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type FormData = {
  businessName: string;
  businessType: string;
  ownerName: string;
  address: string;
  state: string;
  district: string;
  town: string;
  pincode: string;
  phone: string;
  email: string;

  secondaryContactName: string;
  secondaryContactDesignation: string;
  secondaryContactNumber: string;

  panNumber: string;
  panCard: File | null;
  gstNumber: string;
  gstCertificate: File | null;

  fssaiNumber: string;
  fssaiLicense: File | null;

  bankAccountNumber: string;
  bankIfscCode: string;

  transportName: string;

  password: string;
  confirmPassword: string;

  [key: string]: string | File | null; // Index signature
};

const REGISTRATION_STEPS = [
  {
    id: 1,
    title: "Business Information",
    fields: ["businessName", "businessType", "ownerName"],
  },
  {
    id: 2,
    title: "Address Information",
    fields: ["address", "town", "state", "district", "pincode"],
  },
  {
    id: 3,
    title: "Contact Information",
    fields: [
      "phone",
      "email",
      "secondaryContactName",
      "secondaryContactDesignation",
      "secondaryContactNumber",
    ],
  },
  {
    id: 4,
    title: "Business Documents",
    fields: [
      "panNumber",
      "panCard",
      "gstNumber",
      "gstCertificate",
      "fssaiNumber",
      "fssaiLicense",
    ],
  },
  {
    id: 5,
    title: "Banking Information",
    fields: ["bankAccountNumber", "bankIfscCode", "cancelledCheque"],
  },
  {
    id: 6,
    title: "Logistics",
    fields: ["transportName"],
  },
  {
    id: 7,
    title: "Set Password",
    fields: ["password", "confirmPassword"],
  },
];

export default function BuyerRegistrationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    // Step 1: Business Info
    businessName: "",
    businessType: "",
    ownerName: "",

    // Step 2: Address Info
    address: "",
    town: "",
    state: "",
    district: "",
    pincode: "",

    // Step 3: Contact Info
    phone: "",
    email: "",
    secondaryContactName: "",
    secondaryContactDesignation: "",
    secondaryContactNumber: "",

    // Step 4: Business Documents
    panNumber: "",
    panCard: null as File | null,
    gstNumber: "",
    gstCertificate: null as File | null,
    fssaiNumber: "",
    fssaiLicense: null as File | null,

    // Step 5: Banking Info
    bankAccountNumber: "",
    bankIfscCode: "",

    transportName: "",

    // Step 6: Security
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const registerMutation = client.auth.register.useMutation({
    onSuccess: () => {
      toast.success(
        "Registration successful! Please check your email for verification."
      );
      router.push("/auth/verification-pending");
    },
    onError: (error: any) => {
      toast.error(error.message || "Registration failed. Please try again.");
    },
  });

  const goNextStep = async () => {
    const excludeFields = [
      "secondaryContactName",
      "secondaryContactDesignation",
      "secondaryContactNumber",
    ];
    const currentStepFields = (
      REGISTRATION_STEPS[step - 1]?.fields || []
    ).filter((field) => !excludeFields.includes(field));
    const missingField = currentStepFields.find(
      (field) =>
        !formData[field] ||
        (typeof formData[field] === "string" &&
          formData[field]?.toString().trim() === "")
    );
    if (missingField) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (step < REGISTRATION_STEPS.length) {
      setStep(step + 1);
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      try {
        const formDataToSend = new FormData();

        const { password, ...profileFields } = formData;
        formDataToSend.append("email", formData.email);
        formDataToSend.append("role", "BUYER");
        formDataToSend.append("password", password);

        // Add all fields to form data
        Object.entries(profileFields).forEach(([key, value]) => {
          if (value instanceof File) {
            formDataToSend.append(`${key}`, value);
            formDataToSend.append(`profile[${key}]`, "");
          } else if (value !== null && value !== undefined) {
            formDataToSend.append(`profile[${key}]`, value.toString());
          }
        });

        await registerMutation.mutateAsync({
          body: formDataToSend,
        });
      } catch (error) {
        // Error handled by mutation callbacks
      }
    }
  };

  const goPrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Rest of the JSX is similar to SellerRegistrationForm but without Step 6 (Brand & Logistics)
  // Copy the return statement from SellerRegistrationForm and remove the Brand & Logistics section
  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      {/* Progress Indicators */}
      <div className="flex justify-between mb-8">
        {REGISTRATION_STEPS.map((s) => (
          <div
            key={s.id}
            className={`w-full h-2 rounded-full mx-1 ${
              step >= s.id ? "bg-green-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Form Content */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-6">
            {REGISTRATION_STEPS[step - 1].title}
          </h2>

          {/* STEP 1: Business Info */}
          {step === 1 && (
            <>
              {/* Business Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                    value={formData.businessName}
                    onChange={(e) =>
                      handleInputChange("businessName", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Business Type (Dropdown) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Type
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.businessType}
                  onChange={(e) =>
                    handleInputChange("businessType", e.target.value)
                  }
                >
                  <option value="">Select Business Type</option>
                  <option value="Co Ltd">Co Ltd</option>
                  <option value="Co Pvt Ltd">Co Pvt Ltd</option>
                  <option value="LLP">LLP</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Proprietorship">Proprietorship</option>
                </select>
              </div>

              {/* Owner Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Owner Name
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                    value={formData.ownerName}
                    onChange={(e) =>
                      handleInputChange("ownerName", e.target.value)
                    }
                  />
                </div>
              </div>
            </>
          )}

          {/* STEP 2: Address Info */}
          {step === 2 && (
            <>
              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>

              {/* State & District */}
              <StateDistrictSelector
                className="grid grid-cols-2 gap-4"
                onChange={(value) =>
                  setFormData((prv) => ({
                    ...prv,
                    state: value.state,
                    district: value.district,
                  }))
                }
              />

              {/* Pincode */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Town
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.town}
                    onChange={(e) => handleInputChange("town", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.pincode}
                    onChange={(e) =>
                      handleInputChange("pincode", e.target.value)
                    }
                  />
                </div>
              </div>
            </>
          )}

          {/* STEP 3: Contact Info (including Secondary Contact) */}
          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>

              {/* Secondary Contact Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secondary Contact Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.secondaryContactName}
                  onChange={(e) =>
                    handleInputChange("secondaryContactName", e.target.value)
                  }
                />
              </div>

              {/* Secondary Contact Designation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secondary Contact Designation
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.secondaryContactDesignation}
                  onChange={(e) =>
                    handleInputChange(
                      "secondaryContactDesignation",
                      e.target.value
                    )
                  }
                />
              </div>

              {/* Secondary Contact Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Secondary Contact Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  value={formData.secondaryContactNumber}
                  onChange={(e) =>
                    handleInputChange("secondaryContactNumber", e.target.value)
                  }
                />
              </div>
            </>
          )}

          {/* STEP 4: Business Documents */}
          {step === 4 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.panNumber}
                    onChange={(e) =>
                      handleInputChange("panNumber", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PAN Card Copy
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleInputChange("panCard", e.target.files[0]);
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GST Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.gstNumber}
                    onChange={(e) =>
                      handleInputChange("gstNumber", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GST Certificate
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleInputChange("gstCertificate", e.target.files[0]);
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    FSSAI Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.fssaiNumber}
                    onChange={(e) =>
                      handleInputChange("fssaiNumber", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    FSSAI License
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleInputChange("fssaiLicense", e.target.files[0]);
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </>
          )}

          {/* STEP 5: Banking Information */}
          {step === 5 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.bankAccountNumber}
                    onChange={(e) =>
                      handleInputChange("bankAccountNumber", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank IFSC Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={formData.bankIfscCode}
                    onChange={(e) =>
                      handleInputChange("bankIfscCode", e.target.value)
                    }
                  />
                </div>
              </div>
            </>
          )}

          {step === 6 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transport Partner Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.transportName}
                onChange={(e) =>
                  handleInputChange("transportName", e.target.value)
                }
              />
            </div>
          )}

          {/* STEP 7: Set Password */}
          {step === 7 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={goPrevStep}
              className="text-gray-600 hover:text-gray-800"
            >
              Back
            </button>
          )}
          <button
            type="button"
            onClick={goNextStep}
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition flex items-center gap-2 ml-auto"
          >
            {step === REGISTRATION_STEPS.length
              ? "Complete Registration"
              : "Next"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
