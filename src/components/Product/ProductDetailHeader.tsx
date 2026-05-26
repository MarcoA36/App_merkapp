import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  cartCount: number;
  onBack: () => void;
};

export default function ProductDetailHeader({
  cartCount,
  onBack,
}: Props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>
          ←
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        Detalle de producto
      </Text>

      <TouchableOpacity
        style={styles.cartButton}
      >
        <Text style={styles.cartIcon}>
          🛒
        </Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {cartCount}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  back: {
    fontSize: 24,
    color: "#444",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2E3192",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  cartIcon: {
    fontSize: 16,
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