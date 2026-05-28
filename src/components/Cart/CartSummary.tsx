import { View, Text, StyleSheet } from "react-native";
import { useCartStore } from "@/store/cartStore";
import { spacing } from "@/theme/theme";

export default function CartSummary() {
  const totalPrice = useCartStore((s) => s.totalPrice());

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Subtotal:</Text>
      <Text style={styles.value}>S/{totalPrice.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 18,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  value: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
});