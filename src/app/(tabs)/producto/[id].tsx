import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import ProductImage from "@/components/Product/ProductImage";
import ProductInfo from "@/components/Product/ProductInfo";
import QuantitySelector from "@/components/Product/QuantitySelector";
import AddToCartButton from "@/components/Product/AddToCartButton";
import CollectionHeader from "@/components/Headers/CollectionHeader";
import Screen from "@/components/Layout/Screen";
import { colors, spacing, layout } from "@/theme/theme";

export default function ProductoDetalle() {
  const { id } = useLocalSearchParams();
  const addToCart = useCartStore((s) => s.addToCart);

  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  if (!product) return null;

  const hasPriceTiers = product.priceTiers && product.priceTiers.length > 0;

  // Lógica dinámica para obtener el precio según el tramo seleccionado
  const getCurrentUnitPrice = () => {
    if (!hasPriceTiers) return product.price;
    
    const matchingTier = product.priceTiers!.find((tier) => {
      if (tier.max === null || tier.max === undefined) {
        return quantity >= tier.min;
      }
      return quantity >= tier.min && quantity <= tier.max;
    });

    return matchingTier ? matchingTier.price : product.price;
  };

  const currentUnitPrice = getCurrentUnitPrice();
  const subtotal = currentUnitPrice * quantity;

  return (
    <Screen backgroundColor={colors.white}>
      <CollectionHeader title="Detalle del producto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* ====================================================================
           1. BLOQUE SUPERIOR: IMAGEN (CON O SIN COLUMNA DE PRECIOS X MAYOR)
           ==================================================================== */}
        {hasPriceTiers ? (
          <View style={styles.imageTierRow}>
            {/* Contenedor de la Imagen (Ocupa la mayor parte del ancho) */}
            <View style={styles.imageColumn}>
              <ProductImage 
                image={product.image} 
                containerStyle={styles.splitImageContainer} 
              />
            </View>

            {/* Franja Derecha: Tabla compacta de Precios por Mayor */}
            <View style={styles.tierColumn}>
              <Text style={styles.tierHeaderTitle}>Precios x Mayor</Text>
              <View style={styles.tierTable}>
                {product.priceTiers!.map((tier, index) => {
                  const isCurrentTier =
                    quantity >= tier.min && (tier.max === null ? true : quantity <= tier.max);

                  return (
                    <View 
                      key={index} 
                      style={[styles.tierRow, isCurrentTier && styles.activeTierRow]}
                    >
                      <Text style={[styles.tierRangeText, isCurrentTier && styles.activeTierText]}>
                        {tier.max ? `${tier.min}-${tier.max}` : `${tier.min}+`} u.
                      </Text>
                      <Text style={[styles.tierPriceText, isCurrentTier && styles.activeTierText]}>
                        ${tier.price}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        ) : (
          /* Si no tiene escala de precios, se ve la imagen común a pantalla completa */
          <ProductImage image={product.image} />
        )}

        {/* ====================================================================
           2. BLOQUE INFERIOR: DISEÑO COMÚN DE BASE (Para todos los productos)
           ==================================================================== */}
        <ProductInfo
          name={product.name}
          unitPrice={currentUnitPrice} // Se actualiza en tiempo real si cambia el tramo
          subtotal={subtotal}
        >
          <QuantitySelector
            quantity={quantity}
            onDecrease={() => quantity > 1 && setQuantity(quantity - 1)}
            onIncrease={() => setQuantity(quantity + 1)}
          />
        </ProductInfo>

        {/* Botón de compra unificado */}
        <AddToCartButton
          onPress={() => {
            for (let i = 0; i < quantity; i++) {
              addToCart({ ...product, price: currentUnitPrice });
            }

            Alert.alert(
              "¡Agregado al carrito!",
              `Sumaste ${quantity} u. a un precio de $${currentUnitPrice} c/u.`,
              [
                {
                  text: "Seguir comprando",
                  onPress: () => {
                    setQuantity(1);
                    router.back();
                  },
                  style: "cancel",
                },
                {
                  text: "Ver mi carrito",
                  onPress: () => {
                    setQuantity(1);
                    router.push("/carrito");
                  },
                },
              ],
              { cancelable: false }
            );
          }}
        />

        <Text style={styles.disclaimer}>
          Imagen ilustrativa. El diseño y presentación del producto pueden variar.
        </Text>

        <View style={{ height: 60 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  // Fila dividida inteligente para la parte superior
  imageTierRow: {
    flexDirection: "row",
    paddingHorizontal: layout.screenPadding,
    marginTop: spacing.md,
    gap: 12,
    alignItems: "center",
    marginBottom:20,
  },
  // La imagen toma el 58% del espacio disponible
  imageColumn: {
    flex: 1.4,
  },
  // Estilo personalizado que le pasamos a tu ProductImage para que se adapte perfecto al lado de la tabla
  splitImageContainer: {
    height: 200, 
    marginBottom: 0,
    backgroundColor: "#F9FAFB",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  // La tabla toma el 42% restante, simulando una franja lateral ordenada
  tierColumn: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 10,
    height: 200,
    justifyContent: "center",
  },
  tierHeaderTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
    textAlign: "center",
  },
  tierTable: {
    gap: 5,
  },
  tierRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
  },
  activeTierRow: {
    backgroundColor: "#EFF2FF",
    borderWidth: 1,
    borderColor: "#2E3192",
  },
  tierRangeText: {
    fontSize: 11,
    color: "#4B5563",
    fontWeight: "600",
  },
  tierPriceText: {
    fontSize: 11,
    color: "#1F2937",
    fontWeight: "700",
  },
  activeTierText: {
    color: "#2E3192",
    fontWeight: "800",
  },
  descriptionSection: {
    paddingHorizontal: layout.screenPadding,
    marginTop: spacing.md,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 6,
  },
  descriptionBody: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: "#999",
    lineHeight: 18,
    paddingHorizontal: layout.screenPadding,
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
  },
});