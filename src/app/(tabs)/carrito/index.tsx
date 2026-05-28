import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Truck, AlertCircle } from "lucide-react-native"; // Asegúrate de tenerlos importados

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
      <SectionHeader title="Carrito de compras" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* BANNER DE ENTREGA */}
        <View style={styles.deliveryBadge}>
          <Truck size={16} color="#6B7280" />
          <Text style={styles.deliveryText}>Próxima entrega: Lunes 18/05</Text>
        </View>

        {/* BANNER DE ADVERTENCIA */}
        <View style={styles.warningBox}>
          <AlertCircle size={20} color="#EAB308" />
          <Text style={styles.warningText}>
            Tienes productos en tu carrito que{"\n"}deben ser modificados.
          </Text>
        </View>

        {/* LISTA DE PRODUCTOS */}
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => addToCart(item)}
            onDecrease={() => decreaseFromCart(item.id)}
            onDelete={() => removeFromCart(item.id)}
          />
        ))}

        <View style={{ height: 220 }} />
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
    paddingTop: 8,
    paddingBottom: 40,
  },
  deliveryBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F4F6", // Gris claro
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
    gap: 8,
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
  },
  warningBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF3C7", // Amarillo claro
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    gap: 12,
  },
  warningText: {
    flex: 1,
    fontSize: 14,
    color: "#92400E",
    fontWeight: "500",
    lineHeight: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingHorizontal: layout.screenPadding,
   paddingVertical:14,
    borderTopWidth: 1,
    borderColor: "#ECECEC",
  },
});