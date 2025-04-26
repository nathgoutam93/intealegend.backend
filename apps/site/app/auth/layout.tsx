"use client";

import { redirect } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((state) => state.accessToken);

  if (token) {
    return redirect("/app/explore");
  }

  return <>{children}</>;
}
