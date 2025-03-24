import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    // Check if user is already authenticated
    const token = localStorage.getItem("accessToken");
    if (token) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: () => (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  ),
});
