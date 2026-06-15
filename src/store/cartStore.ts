// import { create } from "zustand";

// export interface CartProduct {
//   id: string;
//   name: string;
//   price: number;
//   image?: string;
//   quantity: number;
// }

// interface CartStore {
//   items: CartProduct[];

//   addToCart: (product: Omit<CartProduct, "quantity">) => void;

//   decreaseFromCart: (productId: string) => void;

//   removeFromCart: (productId: string) => void;

//   clearCart: () => void;

//   totalItems: () => number;

//   totalPrice: () => number;
// }

// export const useCartStore = create<CartStore>((set, get) => ({
//   items: [],

//   addToCart: (product) => {
//     const existing = get().items.find((item) => item.id === product.id);

//     if (existing) {
//       set({
//         items: get().items.map((item) =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + 1,
//               }
//             : item,
//         ),
//       });

//       return;
//     }

//     set({
//       items: [
//         ...get().items,
//         {
//           ...product,
//           quantity: 1,
//         },
//       ],
//     });
//   },

// decreaseFromCart: (productId: string) => {
//   set({
//     items: get().items.map((item) =>
//       item.id === productId
//         ? {
//             ...item,
//             quantity: Math.max(1, item.quantity - 1),
//           }
//         : item
//     ),
//   });
// },

//   removeFromCart: (productId) => {
//     set({
//       items: get().items.filter((item) => item.id !== productId),
//     });
//   },

//   clearCart: () => {
//     set({
//       items: [],
//     });
//   },

//   totalItems: () => {
//     return get().items.reduce((acc, item) => acc + item.quantity, 0);
//   },

//   totalPrice: () => {
//     return get().items.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0,
//     );
//   },
// }));





import { create } from "zustand";
import { products } from "@/data/products"; // 👈 Asegurate de que esta ruta apunte a tu JSON de productos

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartStore {
  items: CartProduct[];
  // Permite agregar de a 1 (por defecto) o pasarle una cantidad entera (para la pantalla de detalle)
  addToCart: (product: Omit<CartProduct, "quantity">, quantityToAdd?: number) => void;
  decreaseFromCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

/**
 * 🧠 FUNCIÓN AUXILIAR
 * Busca el producto en la data maestra y calcula el precio unitario correcto
 * según la cantidad total acumulada que va a haber en el carrito.
 */
const getTierPrice = (productId: string, totalQuantity: number): number => {
  const masterProduct = products.find((p) => p.id === productId);
  if (!masterProduct) return 0;

  // Si no tiene escalas mayoristas, devuelve el precio normal de lista
  if (!masterProduct.priceTiers || masterProduct.priceTiers.length === 0) {
    return masterProduct.price;
  }

  // Busca qué escala le corresponde a esa cantidad
  const matchingTier = masterProduct.priceTiers.find((tier: any) => {
    if (tier.max === null || tier.max === undefined) {
      return totalQuantity >= tier.min;
    }
    return totalQuantity >= tier.min && totalQuantity <= tier.max;
  });

  return matchingTier ? matchingTier.price : masterProduct.price;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product, quantityToAdd = 1) => {
    const currentItems = get().items;
    const existing = currentItems.find((item) => item.id === product.id);

    if (existing) {
      const newQuantity = existing.quantity + quantityToAdd;
      const newPrice = getTierPrice(product.id, newQuantity); // 💸 Recalcula escala hacia arriba

      set({
        items: currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: newQuantity, price: newPrice }
            : item
        ),
      });
      return;
    }

    // Si entra por primera vez al carrito
    const newQuantity = quantityToAdd;
    const newPrice = getTierPrice(product.id, newQuantity);

    set({
      items: [
        ...currentItems,
        { ...product, quantity: newQuantity, price: newPrice },
      ],
    });
  },

  decreaseFromCart: (productId: string) => {
    const currentItems = get().items;
    const existing = currentItems.find((item) => item.id === productId);

    if (!existing) return;

    const newQuantity = Math.max(1, existing.quantity - 1);
    const newPrice = getTierPrice(productId, newQuantity); // 💸 Recalcula escala hacia abajo

    set({
      items: currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity, price: newPrice }
          : item
      ),
    });
  },

  removeFromCart: (productId) => {
    set({
      items: get().items.filter((item) => item.id !== productId),
    });
  },

  clearCart: () => {
    set({
      items: [],
    });
  },

  totalItems: () => {
    return get().items.reduce((acc, item) => acc + item.quantity, 0);
  },

  totalPrice: () => {
    return get().items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  },
}));