"use client";

import type React from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CreditCard, HelpCircle, LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuthStore } from "@/store/auth.store";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    title: "Profile",
    href: "/app/account/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/app/account/settings",
    icon: Settings,
  },
  {
    title: "Statement",
    href: "/app/account/statement",
    icon: CreditCard,
  },
  {
    title: "Support",
    href: "/app/account/support",
    icon: HelpCircle,
  },
];

export function AccountSidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const handleLogout = () => {
    clearAuth();
  };

  return (
    <Card className={className}>
      <div className="flex flex-col h-full p-4 space-y-4">
        <div className="text-lg font-semibold px-2 py-1.5">Account</div>
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            );
          })}
        </nav>
        <Button
          variant="outline"
          className="w-full justify-start gap-2 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </Card>
  );
}
