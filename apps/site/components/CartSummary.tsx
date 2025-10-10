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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { client } from "@/lib/api-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatProductId } from "@/lib/utils";

export function CartSummary() {
  const { items, removeItem, updateQuantity, calculateTotals, clearCart } =
    useCartStore();
  const { subtotal, shipping, totalQuantity, totalAmount, gstOnSubtotal, gstOnShipping } =
    calculateTotals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const placeOrderMutation = client.buyers.placeOrder.useMutation({
    onSuccess: () => {
      setIsDialogOpen(false);
      // Clear cart (handled in backend)
      router.push("/app/orders");
    },
  });

  const handlePlaceOrder = () => {
    placeOrderMutation.mutate(
      {
        body: {
          items: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
          shippingAddress: "", // TODO: Add shipping address
        },
      },
      {
        onSuccess: () => {
          clearCart();
        },
      }
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Cart Items */}
      <div className="flex-1 w-full max-w-full flex md:grid md:grid-cols-3 gap-4 overflow-x-scroll">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 min-w-[200px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{item.mark}</p>
                <p className="font-medium text-sm">
                  {formatProductId(item.id, item.productionMonth)}
                </p>
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
            <div className="mt-8">
              <div className="text-sm text-gray-500">
                <div>Net Weight: {item.totalWeight}kg</div>
              </div>
              <div className="font-medium">
                ₹{(item.totalPrice || 0).toFixed(2)}
              </div>
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
            </div>
          </div>
        ))}
      </div>

      {/* Summary Totals */}
      <div className="w-full md:w-80">
        <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm sticky top-4">
          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between">
            <span>Total Packages</span>
            <span>{totalQuantity}</span>
          </div>
          {/* <div className="flex justify-between">
            <span>Net Weight</span>
            <span>{totalWeight}kg</span>
          </div> */}
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span>Shipping (₹50/pkg)</span>
              {/* <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Minimum ₹200, Maximum ₹600</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
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
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <div className="pt-4">
            <Button className="w-full" onClick={() => setIsDialogOpen(true)}>
              Place Order
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm your order</DialogTitle>
            <DialogDescription>
              Your order will be submitted for confirmation. Once confirmed, you
              will receive a notification with your order details.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Total Items</span>
              <span>{items.length}</span>
            </div>
            {/* <div className="flex justify-between text-sm">
              <span>Net Weight</span>
              <span>{totalWeight}kg</span>
            </div> */}
            <div className="flex justify-between text-sm font-semibold">
              <span>Final Amount</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <DialogFooter>
            <div className="space-x-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handlePlaceOrder}
                disabled={placeOrderMutation.isPending}
              >
                Confirm Order
              </Button>
            </div>
          </DialogFooter>

          <div className="grid grid-cols-2 gap-4 place-items-center bg-gray-100 rounded-sm">
            <div className="p-4 text-sm">
              <p className="font-semibold">Bank Details</p>
              <p>Real Essence Trade private limited </p>
              <p>A/C: 5545990007 </p>
              <p>IFSC: KKBK0009529 </p>
              <p>Bank: Kotak Mahindra Bank</p>
            </div>
            <img src="/assets/images/gpay.jpeg" className="w-40" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
