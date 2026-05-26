import { View, StyleSheet } from "react-native";

import BrandCard from "./BrandCard";

type Props = {
  brands: any[];
  onPress: (brand: any) => void;
};

export default function BrandGrid({
  brands,
  onPress,
}: Props) {
  return (
    <View style={styles.grid}>
      {brands.map((brand) => (
        <BrandCard
          key={brand.id}
          name={brand.name}
          image={brand.image}
          onPress={() => onPress(brand)}
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
  },
});