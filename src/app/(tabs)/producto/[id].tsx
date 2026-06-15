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
           1. BLOQUE SUPERIOR: IMAGEN (Siempre mantiene el mismo tamaño)
           ==================================================================== */}
        <View style={styles.imageContainer}>
          <ProductImage image={product.image} />
        </View>

        {/* ====================================================================
           2. NUEVA SECCIÓN: PRECIOS POR MAYOR (Horizontal y Homogénea)
           ==================================================================== */}
        {hasPriceTiers && (
          <View style={styles.tierSection}>
            <Text style={styles.tierHeaderTitle}>Precios x Mayor</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tierScrollContainer}
            >
              {product.priceTiers!.map((tier, index) => {
                const isCurrentTier =
                  quantity >= tier.min && (tier.max === null ? true : quantity <= tier.max);

                return (
                  <View 
                    key={index} 
                    style={[styles.tierCard, isCurrentTier && styles.activeTierCard]}
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
            </ScrollView>
          </View>
        )}

        {/* ====================================================================
           3. BLOQUE INFERIOR: INFORMACIÓN Y SELECTOR (Común para todos)
           ==================================================================== */}
        <ProductInfo
          name={product.name}
          unitPrice={currentUnitPrice}
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
  imageContainer: {
    // Asegura que la imagen use todo el ancho estándar asignado por el componente ProductImage
    width: "100%",
  },
  // Contenedor de la sección mayorista montada en horizontal
  tierSection: {
    marginTop: spacing.md,
    marginBottom: spacing.xs,
  },
  tierHeaderTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1F2937",
    paddingHorizontal: layout.screenPadding,
    marginBottom: 10,
  },
  tierScrollContainer: {
    paddingHorizontal: layout.screenPadding,
    gap: 10,
    paddingBottom: 4, 
  },
  // Formato tarjeta para los tramos de precios
  tierCard: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minWidth: 95,
  },
  activeTierCard: {
    backgroundColor: "#EFF2FF",
    borderWidth: 1.5,
    borderColor: "#2E3192",
  },
  tierRangeText: {
    fontSize: 12,
    color: "#4B5563",
    fontWeight: "600",
    marginBottom: 2,
  },
  tierPriceText: {
    fontSize: 14,
    color: "#1F2937",
    fontWeight: "700",
  },
  activeTierText: {
    color: "#2E3192",
    fontWeight: "800",
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