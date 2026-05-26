import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  onPress: () => void;
};

export default function AddToCartButton({
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        Agregar al carrito
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#2E3192",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});