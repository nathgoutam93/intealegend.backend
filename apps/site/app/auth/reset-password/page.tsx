"use client";

import { client } from "@/lib/api-client";
import { Suspense, useState } from "react";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";

interface FormData {
  newPassword: string;
}

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    newPassword: "",
  });
  const searchParams = useSearchParams();
  const router = useRouter();

  const resetPasswordMutation = client.auth.resetPassword.useMutation({
    onSuccess: () => {
      toast.success(
        "Password reset successful. You can now log in with your new password."
      );
      setFormData({ newPassword: "" });
      router.push("/auth/login");
    },
    onError: (error: any) => {
      toast.error(
        error?.body?.message || "Failed to reset password. Please try again."
      );
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.newPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    const resetToken = searchParams.get("token");
    if (!resetToken) {
      toast.error("Reset token missing or invalid link.");
      return;
    }

    setIsLoading(true);

    await resetPasswordMutation.mutateAsync({
      body: {
        newPassword: formData.newPassword,
        resetToken,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          value={formData.newPassword}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, newPassword: e.target.value }))
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter your new password"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isLoading ? "Resetting..." : "Reset Password"}
      </button>
    </form>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reset your password
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Suspense fallback={<div>Loading...</div>}>
            <ResetPasswordForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
