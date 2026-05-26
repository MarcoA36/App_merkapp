import {
  View,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  name: string;
  unitPrice: number;
  subtotal: number;
  children: React.ReactNode;
};

export default function ProductInfo({
  name,
  unitPrice,
  subtotal,
  children,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.unitPrice}>
        Precio por unidad S/{unitPrice}
      </Text>

      {children}

      <Text style={styles.totalLabel}>
        Subtotal
      </Text>

      <Text style={styles.total}>
        S/{subtotal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "800",
    color: "#222",
    marginBottom: 12,
  },

  unitPrice: {
    fontSize: 16,
    color: "#777",
    marginBottom: 20,
  },

  totalLabel: {
    fontSize: 14,
    color: "#999",
    marginBottom: 4,
  },

  total: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
    marginBottom: 24,
  },
});