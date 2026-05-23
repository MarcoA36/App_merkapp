import { create } from "zustand";

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartStore {
  items: CartProduct[];

  addToCart: (
    product: Omit<CartProduct, "quantity">
  ) => void;

  removeFromCart: (
    productId: string
  ) => void;

  clearCart: () => void;

  totalItems: () => number;

  totalPrice: () => number;
}

export const useCartStore =
  create<CartStore>((set, get) => ({
    items: [],

    addToCart: (product) => {
      const existing = get().items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        set({
          items: get().items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        });

        return;
      }

      set({
        items: [
          ...get().items,
          {
            ...product,
            quantity: 1,
          },
        ],
      });
    },

    removeFromCart: (productId) => {
      set({
        items: get().items.filter(
          (item) => item.id !== productId
        ),
      });
    },

    clearCart: () => {
      set({
        items: [],
      });
    },

    totalItems: () => {
      return get().items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
    },

    totalPrice: () => {
      return get().items.reduce(
        (acc, item) =>
          acc + item.price * item.quantity,
        0
      );
    },
  }));