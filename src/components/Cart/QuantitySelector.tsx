import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Props = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  disableDecrease?: boolean;
};

export default function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
  disableDecrease,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          disableDecrease && styles.disabled,
        ]}
        onPress={onDecrease}
        disabled={disableDecrease}
      >
        <Text style={styles.symbol}>−</Text>
      </TouchableOpacity>

      <Text style={styles.quantity}>{quantity}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onIncrease}
      >
        <Text style={styles.symbol}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  button: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#F3F0FF",
    alignItems: "center",
    justifyContent: "center",
  },

  disabled: {
    opacity: 0.3,
  },

  symbol: {
    fontSize: 26,
    color: "#4B33CC",
    fontWeight: "400",
  },

  quantity: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
});