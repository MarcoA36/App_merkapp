import { View, StyleSheet } from "react-native";

import ProductCard from "./ProductCard";

type Props = {
  products: any[];
  onAdd: (product: any) => void;
  onPress: (product: any) => void;
};

export default function ProductGrid({
  products,
  onAdd,
  onPress,
}: Props) {
  return (
    <View style={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={() => onAdd(product)}
          onPress={() => onPress(product)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});