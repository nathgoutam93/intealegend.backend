import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  mark: string;
  grade: string;
  productionMonth: string;
  pricePerKg: number;
  weightPerPkg: number;
  quantity: number;
  totalPrice: number;
  totalWeight: number;
  mbp?: number;
  maxAvailableWeight?: number;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  otherCharges: number;
  gst: number;
  roundOff: number;
  addItem: (item: Omit<CartItem, "totalPrice" | "totalWeight">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  calculateTotals: () => {
    subtotal: number;
    totalQuantity: number;
    shipping: number;
    gstOnSubtotal: number;
    gstOnShipping: number;
    totalAmount: number;
  };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      shipping: 0,
      otherCharges: 0,
      gst: 0,
      roundOff: 0,

      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            // If item exists, update its quantity
            const newQuantity = existingItem.quantity + item.quantity;
            const totalWeight = item.weightPerPkg * newQuantity;

            // Check if new total weight exceeds the limit
            if (totalWeight > existingItem.maxAvailableWeight!) {
              alert(
                "Cannot add more quantity - maximum available weight reached"
              );
              return state;
            }

            const totalPrice = totalWeight * item.pricePerKg;

            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? {
                    ...i,
                    quantity: newQuantity,
                    totalWeight,
                    totalPrice,
                  }
                  : i
              ),
            };
          } else {
            // If item doesn't exist, add it as new
            const totalWeight = item.weightPerPkg * item.quantity;
            const totalPrice = totalWeight * item.pricePerKg;

            return {
              items: [
                ...state.items,
                {
                  ...item,
                  totalPrice,
                  totalWeight,
                  mbp: item.mbp,
                  maxAvailableWeight: item.maxAvailableWeight,
                },
              ],
            };
          }
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      clearCart: () => {
        set((state) => ({
          items: [],
        }));
      },

      updateQuantity: (id, quantity) => {
        set((state) => {
          const item = state.items.find((i) => i.id === id);
          if (!item) return state;

          const newQuantity = Math.max(quantity, item.mbp || 1);
          const newTotalWeight = item.weightPerPkg * newQuantity;

          // Prevent exceeding available weight
          const maxAllowedWeight = item.maxAvailableWeight || Infinity;
          if (newTotalWeight > maxAllowedWeight) {
            alert(
              "Cannot add more quantity - maximum available weight reached"
            );
            return state;
          }

          return {
            items: state.items.map((i) => {
              if (i.id === id) {
                const totalWeight = item.weightPerPkg * newQuantity;
                const totalPrice = totalWeight * item.pricePerKg;
                return {
                  ...i,
                  quantity: newQuantity,
                  totalPrice,
                  totalWeight,
                };
              }
              return i;
            }),
          };
        });
      },

      calculateTotals: () => {
        const state = get();
        const subtotal = state.items.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );
        const totalQuantity = state.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        // Calculate shipping based on quantity (50 INR per package)
        const shipping = totalQuantity * 50;

        // Calculate GST separately for subtotal and shipping (5% each)
        const gstOnSubtotal = subtotal * 0.05;
        const gstOnShipping = shipping * 0.05;

        // Total GST
        const totalGst = gstOnSubtotal + gstOnShipping;

        const roundOff = parseFloat(
          (
            Math.round(subtotal + shipping + totalGst) -
            (subtotal + shipping + totalGst)
          ).toFixed(2)
        );

        const totalAmount = parseFloat(
          (subtotal + totalGst + shipping + roundOff).toFixed(2)
        );

        return {
          subtotal,
          totalQuantity,
          shipping,
          gstOnSubtotal,
          gstOnShipping,
          totalAmount,
        };
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
