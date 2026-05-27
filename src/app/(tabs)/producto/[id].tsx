import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useState } from "react";

import {
  useLocalSearchParams,
} from "expo-router";

import { products } from "@/data/products";

import { useCartStore } from "@/store/cartStore";

import ProductImage from "@/components/Product/ProductImage";

import ProductInfo from "@/components/Product/ProductInfo";

import QuantitySelector from "@/components/Product/QuantitySelector";

import AddToCartButton from "@/components/Product/AddToCartButton";

import CollectionHeader from "@/components/Headers/CollectionHeader";

import Screen from "@/components/Layout/Screen";

import {
  colors,
  spacing,
  layout,
} from "@/theme/theme";

export default function ProductoDetalle() {

  const { id } =
    useLocalSearchParams();

  const addToCart = useCartStore(
    (s) => s.addToCart
  );

  const product =
    products.find(
      (p) => p.id === id
    );

  const [quantity, setQuantity] =
    useState(1);

  if (!product) return null;

  const subtotal =
    product.price * quantity;

  return (
    <Screen
      backgroundColor={
        colors.white
      }
    >
      <CollectionHeader
        title="Detalle del producto"
      />

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >
        <ProductImage
          image={product.image}
        />

        <ProductInfo
          name={product.name}
          unitPrice={product.price}
          subtotal={subtotal}
        >
          <QuantitySelector
            quantity={quantity}
            onDecrease={() =>
              quantity > 1 &&
              setQuantity(
                quantity - 1
              )
            }
            onIncrease={() =>
              setQuantity(
                quantity + 1
              )
            }
          />
        </ProductInfo>

        <AddToCartButton
          onPress={() => {
            for (
              let i = 0;
              i < quantity;
              i++
            ) {
              addToCart(product);
            }
          }}
        />

        <Text style={styles.disclaimer}>
          Imagen ilustrativa. El
          diseño y presentación del
          producto pueden variar.
        </Text>

        <View
          style={{
            height: 120,
          }}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  disclaimer: {
    fontSize: 12,

    color: "#999",

    lineHeight: 18,

    paddingHorizontal:
      layout.screenPadding,

    marginTop: spacing.xl,

    marginBottom: spacing.xxl,
  },
});