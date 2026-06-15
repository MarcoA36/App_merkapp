import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import ProductInfo from "@/components/Product/ProductInfo";
import QuantitySelector from "@/components/Product/QuantitySelector";
import AddToCartButton from "@/components/Product/AddToCartButton";
import CollectionHeader from "@/components/Headers/CollectionHeader";
import Screen from "@/components/Layout/Screen";
import { colors, spacing, layout } from "@/theme/theme";
import { ProductStandardHeader } from "@/components/Product/ProductStanderHeader";
import { ProductWholesaleHeader } from "@/components/Product/ProductWholesaHeader";

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
      return (tier.max === null || tier.max === undefined)
        ? quantity >= tier.min
        : quantity >= tier.min && quantity <= tier.max;
    });
    return matchingTier ? matchingTier.price : product.price;
  };

  const currentUnitPrice = getCurrentUnitPrice();
  const subtotal = currentUnitPrice * quantity;

  return (
    // 🟢 La pantalla ahora es ESTABLE. No tiene key, no se destruye.
    <Screen backgroundColor={colors.white}>
      <CollectionHeader title="Detalle del producto" />

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* ====================================================================
           1 y 2. SECCIÓN SUPERIOR: Delegación limpia con Key Localizado
           ==================================================================== */}
        {hasPriceTiers ? (
          <ProductWholesaleHeader 
            key={`wholesale-${id}`} // 🔑 El key solo vive acá para limpiar este sub-bloque
            product={product} 
            quantity={quantity} 
          />
        ) : (
          <ProductStandardHeader 
            key={`standard-${id}`}  // 🔑 El key solo vive acá
            product={product} 
          />
        )}

        {/* ====================================================================
           3. BLOQUE INFERIOR: INFORMACIÓN Y ACCIONES (Idéntico)
           ==================================================================== */}
        <ProductInfo name={product.name} unitPrice={currentUnitPrice} subtotal={subtotal}>
          <QuantitySelector
            quantity={quantity}
            onDecrease={() => quantity > 1 && setQuantity(quantity - 1)}
            onIncrease={() => setQuantity(quantity + 1)}
          />
        </ProductInfo>

        {/* <AddToCartButton
          onPress={() => {
            for (let i = 0; i < quantity; i++) {
              addToCart({ ...product, price: currentUnitPrice });
            }
            Alert.alert(
              "¡Agregado al carrito!",
              `Sumaste ${quantity} u. a un precio de $${currentUnitPrice} c/u.`,
              [
                { text: "Seguir comprando", onPress: () => { setQuantity(1); router.back(); }, style: "cancel" },
                { text: "Ver mi carrito", onPress: () => { setQuantity(1); router.push("/carrito"); } },
              ]
            );
          }}
        /> */}
        <AddToCartButton
  onPress={() => {
    // 🟢 Pasamos el producto y la cantidad directamente sin hacer un 'for' loop
    addToCart(product, quantity);

    Alert.alert(
      "¡Agregado al carrito!",
      `Sumaste ${quantity} u. al carrito con éxito.`,
      [
        {
          text: "Seguir comprando",
          onPress: () => { setQuantity(1); router.back(); },
          style: "cancel",
        },
        {
          text: "Ver mi carrito",
          onPress: () => { setQuantity(1); router.push("/carrito"); },
        },
      ]
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
  disclaimer: {
    fontSize: 12,
    color: "#999",
    lineHeight: 18,
    paddingHorizontal: layout.screenPadding,
    marginTop: spacing.xl,
    marginBottom: spacing.xxl,
  },
});