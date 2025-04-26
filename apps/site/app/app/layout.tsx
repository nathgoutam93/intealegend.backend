"use client";

import { redirect } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((state) => state.accessToken);

  console.log(token);

  if (!token) {
    return redirect("/auth/login");
  }

  return <>{children}</>;
}
