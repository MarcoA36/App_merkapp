// import { View, StyleSheet, useWindowDimensions } from "react-native";
// import BrandCard from "./BrandCard";
// import { layout } from "@/theme/theme";

// type Props = {
//   brands: any[];
//   onPress: (brand: any) => void;
// };

// export default function BrandGrid({ brands, onPress }: Props) {
//   const { width } = useWindowDimensions();
  
//   // Ajusta esto al ancho que tenga tu BrandCard
//   const itemWidth = 100; 
//   const availableWidth = width - (layout.screenPadding * 2);
//   const numColumns = Math.max(2, Math.floor((availableWidth + 12) / (itemWidth + 12)));
//   const exactGap = numColumns > 1 ? (availableWidth - (numColumns * itemWidth)) / (numColumns - 1) : 0;

//   return (
//     <View style={[styles.grid, { gap: exactGap }]}>
//       {brands.map((brand) => (
//         <View key={brand.id} style={{ width: itemWidth }}>
//           <BrandCard
//             name={brand.name}
//             image={brand.image}
//             onPress={() => onPress(brand)}
//           />
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     // Ya no necesitamos justifyContent: "space-between"
//   },
// });
import { View, StyleSheet, useWindowDimensions } from "react-native";
import BrandCard from "./BrandCard";
import { layout, spacing } from "@/theme/theme";

type Props = {
  brands: any[];
  onPress: (brand: any) => void;
};

// Agregamos '= []' para blindar el componente contra valores undefined del buscador
export default function BrandGrid({ brands = [], onPress }: Props) {
  const { width } = useWindowDimensions();
  
  const itemWidth = 100; // Tu ancho original de BrandCard
  const minGap = 16;     // Cambiamos a 16 para mantener consistencia visual con categorías
  
  const availableWidth = width - (layout.screenPadding * 2);
  
  // Calculamos cuántas columnas entran realmente
  const numColumns = Math.max(2, Math.floor((availableWidth + minGap) / (itemWidth + minGap)));
  
  // CRÍTICO: Math.floor() elimina los decimales rebeldes que rompen la grilla
  const exactGap = numColumns > 1 
    ? Math.floor((availableWidth - (numColumns * itemWidth)) / (numColumns - 1)) 
    : minGap;

  return (
    <View style={[
      styles.grid, 
      { 
        columnGap: exactGap, // Separación horizontal dinámica perfecta de borde a borde
        rowGap: spacing.lg || 24 // Separación vertical fija y limpia
      }
    ]}>
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
    justifyContent: "flex-start", // Alinea a la izquierda si la última fila tiene menos elementos
  },
});