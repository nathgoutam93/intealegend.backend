import client from "@/api-client";
import { useAuthStore } from "@/stores/auth.store";
import { useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface SellerLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellerLoginModal({
  isOpen,
  onClose,
}: SellerLoginModalProps) {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [isLoading, setIsLoading] = useState(false);

  const loginMutation = client.auth.login.useMutation({
    onSuccess: (response) => {
      // Update Zustand store instead of localStorage
      setAuth(response.body.accessToken, response.body.user as any);

      toast.success("Login successful");
      navigate({ to: "/app" });
    },
    onError: (error: any) => {
      toast.error("Login failed", {
        description: error.body.message || "Invalid credentials",
      });
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;

    await loginMutation.mutateAsync({
      body: { identifier, password },
    });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4">
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Seller Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="identifier"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Seller Id
            </label>
            <input
              id="identifier"
              name="identifier"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            {isLoading ? (
              <div className="mx-auto h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
