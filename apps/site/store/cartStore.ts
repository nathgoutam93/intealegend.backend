import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  mark: string;
  grade: string;
  pricePerKg: number;
  weightPerPkg: number;
  sampleWeight: number | null;
  quantity: number;
  totalPrice: number;
  totalWeight: number;
  totalWeightWithSample: number;
  mbp?: number;
}

interface CartState {
  items: CartItem[];
  shipping: number;
  otherCharges: number;
  gst: number;
  roundOff: number;
  addItem: (
    item: Omit<CartItem, "totalPrice" | "totalWeight" | "totalWeightWithSample">
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  calculateTotals: () => {
    subtotal: number;
    totalWeight: number;
    totalWeightWithSample: number;
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
        const totalWeight = item.weightPerPkg * item.quantity;
        const totalWeightWithSample = totalWeight + (item.sampleWeight || 0);
        const totalPrice = totalWeight * item.pricePerKg;
        set((state) => ({
          items: [
            ...state.items,
            {
              ...item,
              totalPrice,
              totalWeight,
              totalWeightWithSample,
              mbp: item.mbp,
            },
          ],
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
              const mbp = item.mbp || 1;
              const newQuantity = Math.max(quantity, mbp);
              const totalWeight = item.weightPerPkg * newQuantity;
              const totalWeightWithSample =
                totalWeight + (item.sampleWeight || 0);
              const totalPrice = totalWeight * item.pricePerKg;
              return {
                ...item,
                quantity: newQuantity,
                totalPrice,
                totalWeight,
                totalWeightWithSample,
              };
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
        const totalWeightWithSample = state.items.reduce(
          (sum, item) => sum + item.totalWeightWithSample,
          0
        );
        const totalAmount =
          subtotal +
          state.shipping +
          state.otherCharges +
          state.gst +
          state.roundOff;
        return { subtotal, totalWeight, totalWeightWithSample, totalAmount };
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
