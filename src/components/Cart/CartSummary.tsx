import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
  const totalPrice = useCartStore(
    (s) => s.totalPrice()
  );

  const shipping = 0;

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>
          Subtotal
        </Text>

        <Text style={styles.value}>
          S/{totalPrice}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Envío
        </Text>

        <Text style={styles.value}>
          Gratis
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>
          Total
        </Text>

        <Text style={styles.totalValue}>
          S/{totalPrice + shipping}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",

    borderRadius: 24,

    padding: 20,

    marginTop: 6,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 14,
  },

  label: {
    fontSize: 16,
    color: "#666",
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEE",

    marginVertical: 6,
  },

  totalLabel: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
  },

  totalValue: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1E3A8A",
  },
});