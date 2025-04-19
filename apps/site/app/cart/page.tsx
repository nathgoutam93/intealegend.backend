"use client";

import { CartSummary } from "@/components/CartSummary";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { Header } from "@/components/Header";

export default function CartPage() {
  const { items } = useCartStore();

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton />
      <div className="flex-1 pt-4">
        <div className="max-w-6xlmx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6">My Cart</h1>
            {items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Button onClick={() => (window.location.href = "/explore")}>
                  Continue Shopping
                </Button>
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
