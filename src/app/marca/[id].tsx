import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import {
  useLocalSearchParams,
  router,
} from "expo-router";

import { useMemo } from "react";

import { products } from "@/data/products";

import { brands } from "@/data/brands";

import { useCartStore } from "@/store/cartStore";

import ProductGrid from "@/components/ProductGrid";

import CollectionHeader from "@/components/Headers/CollectionHeader";

import Screen from "@/components/Layout/Screen";

import {
  colors,
  spacing,
  typography,
  layout,
} from "@/theme/theme";

export default function MarcaDetalle() {

  const { id } =
    useLocalSearchParams();

  const addToCart = useCartStore(
    (s) => s.addToCart
  );

  const currentBrand =
    brands.find(
      (b) => b.id === id
    );

  const filteredProducts =
    useMemo(() => {
      return products.filter(
        (p) => p.brandId === id
      );
    }, [id]);

  return (
    <Screen
      backgroundColor={
        colors.white
      }
    >
      <CollectionHeader
        title={
          currentBrand?.name ||
          ""
        }
        image={
          currentBrand?.image ||
          ""
        }
      />

      <Text style={styles.sectionTitle}>
        Productos
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >
        <ProductGrid
          products={
            filteredProducts
          }
          onAdd={(product) =>
            addToCart(product)
          }
          onPress={(product) =>
            router.push({
              pathname:
                "/producto/[id]",

              params: {
                id: product.id,
              },
            })
          }
        />

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
  sectionTitle: {
    ...typography.subtitle,

    color: colors.text,

    marginHorizontal:
      layout.screenPadding,

    marginBottom: spacing.lg,
  },
});