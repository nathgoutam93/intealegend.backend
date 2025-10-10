"use client";

import { CartSummary } from "@/components/CartSummary";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function CartPage() {
  const { items } = useCartStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton />
      <div className="flex-1 pt-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="p-2 md:p-6">
            <h1 className="text-2xl font-semibold mb-6">My Cart</h1>
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/app/explore">
                  <Button asChild>Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <CartSummary />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
