import { View, Text, StyleSheet } from "react-native";
import ProductImage from "./ProductImage";
import { spacing, layout } from "@/theme/theme";

interface ProductWholesaleHeaderProps {
  product: any;
  quantity: number;
}

export function ProductWholesaleHeader({ product, quantity }: ProductWholesaleHeaderProps) {
  return (
    <View style={styles.topRowContainer}>
      {/* Lado de la Imagen */}
      <View style={styles.imageSide}>
        <ProductImage image={product.image} />
      </View>

      {/* Lado de los Precios por Mayor */}
      <View style={styles.tierSide}>
        <Text style={styles.tierHeaderTitle}>Precios x Mayor</Text>
        <View style={styles.tierColumnContainer}>
          {product.priceTiers!.map((tier: any, index: number) => {
            const isCurrentTier =
              quantity >= tier.min && (tier.max === null || tier.max === undefined ? true : quantity <= tier.max);

            return (
              <View 
                key={index} 
                style={[styles.tierCard, isCurrentTier && styles.activeTierCard]}
              >
                <Text style={[styles.tierRangeText, isCurrentTier && styles.activeTierText]}>
                  {tier.max ? `${tier.min}-${tier.max}` : `${tier.min}+`} u.
                </Text>
                
                {/* 🟢 Aplicamos el tamaño extra grande SOLO si es la tarjeta activa */}
                <Text style={[
                  styles.tierPriceText, 
                  isCurrentTier && styles.activeTierText,
                  isCurrentTier && styles.activeTierPriceText
                ]}>
                  ${tier.price}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topRowContainer: {
    flexDirection: "row",
    marginTop: spacing.md,
    paddingHorizontal: layout.screenPadding,
    gap: spacing.md,
    alignItems: "center", 
  },
  imageSide: {
    flex: 1.2, 
  },
  tierSide: {
    flex: 1,  
  },
  tierHeaderTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: spacing.sm,
  },
  tierColumnContainer: {
    gap: spacing.xs, 
  },
  tierCard: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: spacing.sm,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  activeTierCard: {
    backgroundColor: "#EFF2FF",
    borderWidth: 1.5,
    borderColor: "#2E3192",
    paddingVertical: 10, // 🟢 Un poquito más de aire vertical para alojar el número grande
  },
  tierRangeText: {
    fontSize: 11,
    color: "#4B5563",
    fontWeight: "600",
    marginBottom: 1,
  },
  tierPriceText: {
    fontSize: 15, // Precio base para las escalas inactivas
    color: "#1F2937",
    fontWeight: "700",
  },
  activeTierText: {
    color: "#2E3192",
    fontWeight: "800",
  },
  // 🟢 NUEVO ESTILO: Se activa solo en el precio seleccionado
  activeTierPriceText: {
    fontSize: 20, 
  },
});