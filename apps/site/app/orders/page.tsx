"use client";

import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
export default function OrdersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBackButton backUrl="/explore" />
      <div className="flex-1 pt-4">
        <div className="mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h1 className="text-2xl font-bold mb-4">My Orders</h1>
            <p className="text-gray-500 mb-6">
              You haven't placed any orders yet.
            </p>
            <Button onClick={() => (window.location.href = "/explore")}>
              Start Buying
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
