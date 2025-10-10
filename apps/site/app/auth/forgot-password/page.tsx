"use client"

import { client } from '@/lib/api-client';
import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ForgotPasswordPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        identifier: "",
    });

    const forgotPasswordMutation = client.auth.forgotPassword.useMutation({
        onSuccess: (response) => {
            toast.success("If an account with that ID exists, a password reset link has been sent.");
            setFormData({ identifier: "" });
        },
        onError: (error: any) => {

        },
        onSettled: () => {
        },
    });

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!formData.identifier) {
            toast.error("Please fill in all fields");
            return;
        }

        setIsLoading(true);

        await forgotPasswordMutation.mutateAsync({
            body: {
                identifier: formData.identifier,
            },
        })
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                            Your Buyer Or Seller ID
                        </label>
                        <input
                            id="identifier"
                            name="identifier"
                            type="text"
                            autoComplete="username"
                            required
                            value={formData.identifier}
                            onChange={e => setFormData(prv => ({ ...prv, identifier: e.target.value }))}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your ID"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none"
                    >
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
}
