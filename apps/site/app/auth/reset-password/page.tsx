"use client"

import { client } from '@/lib/api-client';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ResetPasswordPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        newPassword: "",
    });
    const searchParams = useSearchParams();
    const router = useRouter();

    const resetPasswordMutation = client.auth.resetPassword.useMutation({
        onSuccess: () => {
            toast.success('Password reset successful. You can now log in with your new password.');
            setFormData({ newPassword: '' });
            router.push('/auth/login');
        },
        onError: (error: any) => {
            toast.error(error?.body?.message || 'Failed to reset password. Please try again.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!formData.newPassword) {
            toast.error("Please fill in all fields");
            return;
        }

        const resetToken = searchParams.get('token');
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
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                            New Password
                        </label>
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            autoComplete="new-password"
                            required
                            value={formData.newPassword}
                            onChange={e => setFormData(prv => ({ ...prv, newPassword: e.target.value }))}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none disabled:opacity-60"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}
