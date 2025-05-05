"use client";

import { useCartStore, CartItem } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CartSummary() {
  const { items, removeItem, updateQuantity, calculateTotals } = useCartStore();
  const { subtotal, totalWeight, totalAmount, gstOnSubtotal, gstOnShipping } =
    calculateTotals();

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  // Calculate shipping based on weight (20 INR per kg, min 200 INR, max 600 INR)
  const shipping = Math.min(Math.max(totalWeight * 20, 200), 600);

  // Calculate total amount
  const finalTotal = subtotal + shipping + gstOnSubtotal + gstOnShipping;

  return (
    <div className="flex gap-6">
      {/* Cart Items */}
      <div className="flex-1 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-medium">{item.mark}</span>
                <div className="text-sm text-gray-500">
                  <div>Grade: {item.grade}</div>
                  <div>Price/kg: ₹{item.pricePerKg}</div>
                  <div>Weight/Pkg: {item.weightPerPkg}kg</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleQuantityChange(item, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item, parseInt(e.target.value) || 1)
                  }
                  className="w-16 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleQuantityChange(item, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">
                  <div>Net Weight: {item.totalWeight}kg</div>
                </div>
                <div className="font-medium">
                  ₹{(item.totalPrice || 0).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Totals */}
      <div className="w-80">
        <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm sticky top-4">
          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between">
            <span>Total Packages</span>
            <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Net Weight</span>
            <span>{totalWeight}kg</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span>Shipping (₹20/kg)</span>
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Minimum ₹200, Maximum ₹600</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <span>₹{shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST on Items (5%)</span>
            <span>₹{gstOnSubtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST on Shipping (5%)</span>
            <span>₹{gstOnShipping.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 mt-2 font-semibold">
            <div className="flex justify-between">
              <span>Total Amount</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="pt-4">
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
