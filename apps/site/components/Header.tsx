"use client";

import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/UserDropdown";
import { ShoppingCart, ArrowLeft, User } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth.store";

interface HeaderProps {
  showBackButton?: boolean;
  backUrl?: string;
  children?: React.ReactNode;
}

export function Header({
  showBackButton = false,
  backUrl = "/app/explore",
  children,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { items } = useCartStore();
  const { user } = useAuthStore();
  const cartItemCount = items.length;

  return (
    <header className="sticky top-0 z-50 bg-white shadow print:hidden">
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

          {children}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href={"/app/explore"}
            className={cn(
              "text-sm",
              pathname === "/app/explore" && "border-b-2 border-red-500",
              "hidden md:inline-block"
            )}
          >
            Live Now
          </Link>
          <Link
            href={"/app/orders"}
            className={cn(
              "text-sm",
              pathname === "/app/orders" && "border-b-2 border-red-500",
              "hidden md:inline-block"
            )}
          >
            My Orders
          </Link>
          <Link
            href={"/app/cart"}
            className={cn(
              "relative flex",
              pathname === "/app/cart" && "border-b-2 border-red-500"
            )}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
            <span className="text-sm">Cart</span>
          </Link>
          <Link
            href={"/app/account"}
            className={cn(
              "relative flex",
              pathname.includes("/app/account") && "border-b-2 border-red-500"
            )}
          >
            <User className="h-5 w-5" size={18} />
            <span className="text-sm">Account</span>
          </Link>
        </div>
      </div>
      <div className="border-t md:border-none p-2 flex items-center justify-center gap-4">
        <Link
          href={"/app/explore"}
          className={cn(
            "text-xs p-1 rounded-xl",
            pathname === "/app/explore" && "bg-blue-200",
            "inline-block md:hidden"
          )}
        >
          Live Now
        </Link>
        <Link
          href={"/app/orders"}
          className={cn(
            "text-xs p-1 rounded-xl",
            pathname === "/app/orders" && "bg-blue-200",
            "inline-block md:hidden"
          )}
        >
          My Orders
        </Link>
      </div>
    </header>
  );
}
