import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  mark: string;
  grade: string;
  pricePerKg: number;
  weightPerKg: number;
  quantity: number;
  totalPrice: number;
  totalWeight: number;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  otherCharges: number;
  gst: number;
  roundOff: number;
  addItem: (item: Omit<CartItem, "totalPrice" | "totalWeight">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  calculateTotals: () => {
    subtotal: number;
    totalWeight: number;
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
        const totalPrice = item.pricePerKg * item.quantity;
        const totalWeight = item.weightPerKg * item.quantity;
        set((state) => ({
          items: [...state.items, { ...item, totalPrice, totalWeight }],
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === id) {
              const totalPrice = item.pricePerKg * quantity;
              const totalWeight = item.weightPerKg * quantity;
              return { ...item, quantity, totalPrice, totalWeight };
            }
            return item;
          }),
        }));
      },

      calculateTotals: () => {
        const state = get();
        const subtotal = state.items.reduce(
          (sum, item) => sum + item.totalPrice,
          0
        );
        const totalWeight = state.items.reduce(
          (sum, item) => sum + item.totalWeight,
          0
        );
        const totalAmount =
          subtotal +
          state.shipping +
          state.otherCharges +
          state.gst +
          state.roundOff;
        return { subtotal, totalWeight, totalAmount };
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
