import App from "@/App";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw redirect({
        to: "/login",
      });
    } else {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: App,
});
