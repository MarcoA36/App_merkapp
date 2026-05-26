// components/headers/CartButton.tsx

import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

import { useCartStore } from "@/store/cartStore";

export default function CartButton() {

  const totalItems = useCartStore(
    (state) => state.totalItems()
  );

  return (
    <TouchableOpacity
      style={styles.cartButton}
      onPress={() =>
        router.push("/carrito")
      }
    >
      <Text style={styles.cartIcon}>
        🛒
      </Text>

      {totalItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {totalItems}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#2E3192",

    alignItems: "center",
    justifyContent: "center",

    position: "relative",
  },

  cartIcon: {
    fontSize: 18,
  },

  badge: {
    position: "absolute",

    top: -4,
    right: -4,

    backgroundColor: "#FFD600",

    minWidth: 18,
    height: 18,

    borderRadius: 9,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 4,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#111",
  },
});