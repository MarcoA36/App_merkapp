import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Trash2 } from "lucide-react-native";

type Props = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onDelete: () => void;
};

export default function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  onDelete,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={quantity === 1 ? onDelete : onDecrease}
      >
        {quantity === 1 ? (
          <Trash2 size={16} color="#4B33CC" />
        ) : (
          <Text style={styles.symbol}>−</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity style={styles.button} onPress={onIncrease}>
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F0FF", // Fondo unificado
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  button: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  symbol: {
    fontSize: 20,
    color: "#4B33CC",
    fontWeight: "500",
  },
  quantity: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111",
    marginHorizontal: 8,
    minWidth: 16,
    textAlign: "center",
  },
});