import { useCartStore, CartItem } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartSummary() {
  const { items, removeItem, updateQuantity, calculateTotals } = useCartStore();
  const { subtotal, totalWeight, totalAmount, totalWeightWithSample } =
    calculateTotals();

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

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
                  <div>
                    Total Weight (with sample): {item.totalWeightWithSample}kg
                  </div>
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
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Net Weight</span>
            <span>{totalWeight}kg</span>
          </div>
          <div className="flex justify-between">
            <span>Total Weight (with sample)</span>
            <span>{totalWeightWithSample}kg</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Other Charges</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between">
            <span>GST</span>
            <span>₹0.00</span>
          </div>
          <div className="flex justify-between">
            <span>Round Off</span>
            <span>₹0.00</span>
          </div>
          <div className="border-t pt-2 mt-2 font-semibold">
            <div className="flex justify-between">
              <span>Total Amount</span>
              <span>₹{totalAmount.toFixed(2)}</span>
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
