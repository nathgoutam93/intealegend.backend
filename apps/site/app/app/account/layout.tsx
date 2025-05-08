import type React from "react";
import { AccountSidebar } from "@/components/account-sidebar";
import { Header } from "@/components/Header";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header showBackButton />
      <div className="container flex flex-col md:flex-row p-4 gap-6">
        <AccountSidebar className="w-full md:w-64 mb-6 md:mb-0" />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
