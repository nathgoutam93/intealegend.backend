import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";

export const Route = createFileRoute("/(auth)/login-admin")({
  beforeLoad: async () => {
    // Check if user is already authenticated

    const hostname = window.location.hostname;
    const isApiSubdomain = hostname.startsWith("api.");

    if (!isApiSubdomain) {
      throw notFound();
    }

    const token = localStorage.getItem("accessToken");
    if (token) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: () => (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  ),
});
