"use client";

import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/UserDropdown";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface HeaderProps {
  showBackButton?: boolean;
  backUrl?: string;
}

export function Header({
  showBackButton = false,
  backUrl = "/explore",
}: HeaderProps) {
  const router = useRouter();
  const { items } = useCartStore();
  const cartItemCount = items.length;

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Link href="/">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href={"/explore"} className="text-sm">
            Live Products
          </Link>
          <Link href={"/orders"} className="text-sm">
            My Orders
          </Link>
          <Button
            variant={"secondary"}
            onClick={() => (window.location.href = "/cart")}
            className="relative"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
            <span className="text-sm">Cart</span>
          </Button>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
}
