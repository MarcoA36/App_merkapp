import { View, StyleSheet, useWindowDimensions } from "react-native";
import BrandCard from "./BrandCard";
import { layout } from "@/theme/theme";

type Props = {
  brands: any[];
  onPress: (brand: any) => void;
};

export default function BrandGrid({ brands, onPress }: Props) {
  const { width } = useWindowDimensions();
  
  // Ajusta esto al ancho que tenga tu BrandCard
  const itemWidth = 100; 
  const availableWidth = width - (layout.screenPadding * 2);
  const numColumns = Math.max(2, Math.floor((availableWidth + 12) / (itemWidth + 12)));
  const exactGap = numColumns > 1 ? (availableWidth - (numColumns * itemWidth)) / (numColumns - 1) : 0;

  return (
    <View style={[styles.grid, { gap: exactGap }]}>
      {brands.map((brand) => (
        <View key={brand.id} style={{ width: itemWidth }}>
          <BrandCard
            name={brand.name}
            image={brand.image}
            onPress={() => onPress(brand)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    // Ya no necesitamos justifyContent: "space-between"
  },
});