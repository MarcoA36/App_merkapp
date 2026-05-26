import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type Props = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export default function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
}: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={styles.button}
        onPress={onDecrease}
      >
        <Text style={styles.text}>
          −
        </Text>
      </TouchableOpacity>

      <Text style={styles.value}>
        {quantity}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onIncrease}
      >
        <Text style={styles.text}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 24,
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#F5F2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 28,
    color: "#4B33CC",
    fontWeight: "400",
  },

  value: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },
});