import { View, StyleSheet } from "react-native";
import ProductImage from "./ProductImage";
import { spacing, layout } from "@/theme/theme";

interface ProductStandardHeaderProps {
  product: any;
}

export function ProductStandardHeader({ product }: ProductStandardHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageFullWidth}>
        <ProductImage image={product.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
    paddingHorizontal: layout.screenPadding,
  },
  imageFullWidth: {
    width: "100%",
  },
});