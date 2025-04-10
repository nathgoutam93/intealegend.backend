import { useAuthStore } from "@/stores/auth.store";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const token = useAuthStore.getState().accessToken;

    const hostname = window.location.hostname.toLowerCase();
    const isApiSubdomain = hostname.startsWith("api.");

    console.log({
      currentHostname: hostname,
      isApiSubdomain,
      token: !!token,
    });

    if (!token) {
      const loginPath = isApiSubdomain ? "/login-admin" : "/login";
      console.log("Redirecting to:", loginPath);

      throw redirect({
        to: loginPath,
      });
    }

    throw redirect({
      to: "/app",
    });
  },
});
