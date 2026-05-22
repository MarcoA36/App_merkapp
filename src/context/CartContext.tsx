import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type CartItem = {
  id: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];

  addToCart: (id: number) => void;
};

const CartContext =
  createContext<CartContextType | null>(
    null
  );

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<
    CartItem[]
  >([]);

  function addToCart(id: number) {
    setItems((prev) => [
      ...prev,
      {
        id,
        quantity: 1,
      },
    ]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart debe usarse dentro de CartProvider"
    );
  }

  return context;
}