import { View, ScrollView, StyleSheet } from "react-native";

import CartItem from "@/components/Cart/CartItem";

import CartSummary from "@/components/Cart/CartSummary";

import CheckoutButton from "@/components/Cart/CheckoutButton";

import { useCartStore } from "@/store/cartStore";

import SectionHeader from "@/components/Headers/SectionHeader";

import Screen from "@/components/Layout/Screen";

import { colors, layout } from "@/theme/theme";

export default function CartScreen() {
  const items = useCartStore((s) => s.items);

  const addToCart = useCartStore((s) => s.addToCart);
  const decreaseFromCart = useCartStore((s) => s.decreaseFromCart);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  return (
    <Screen backgroundColor={colors.background}>
      <SectionHeader title="Carrito" />

      {/* LISTA */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => addToCart(item)}
            onDecrease={() => decreaseFromCart(item.id)}
            onDelete={() => removeFromCart(item.id)}
          />
        ))}

        <View
          style={{
            height: 220,
          }}
        />
      </ScrollView>

      {/* FOOTER FIJO */}

      <View style={styles.footer}>
        <CartSummary />

        <CheckoutButton />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: layout.screenPadding,

    paddingBottom: 40,
  },

  footer: {
    position: "absolute",

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: colors.background,

    paddingHorizontal: layout.screenPadding,

    paddingTop: 14,

    paddingBottom: 24,

    borderTopWidth: 1,

    borderColor: "#ECECEC",
  },
});
