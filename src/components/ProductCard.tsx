import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

type Props = {
  product: any;
  onAdd: () => void;
  onPress: () => void;
};

export default function ProductCard({
  product,
  onAdd,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Image
        source={{
          uri: product.image,
        }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text
        numberOfLines={2}
        style={styles.name}
      >
        {product.name}
      </Text>

      <Text style={styles.priceLabel}>
        Precio
      </Text>

      <Text style={styles.price}>
        S/{product.price}
      </Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={onAdd}
      >
        <Text style={styles.addButtonText}>
          +
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },

  image: {
    width: "100%",
    height: 150,
    marginBottom: 8,
  },

  name: {
    fontSize: 14,
    color: "#555",
    minHeight: 42,
    marginBottom: 12,
  },

  priceLabel: {
    fontSize: 14,
    color: "#999",
  },

  price: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    marginBottom: 14,
  },

  addButton: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5F2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: 30,
    color: "#4B33CC",
    fontWeight: "300",
    marginTop: -4,
  },
});