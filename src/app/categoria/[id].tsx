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

import { categories } from "@/data/categories";

import { useCartStore } from "@/store/cartStore";

import ActiveCategoryCard from "@/components/ActiveCategoryCard";

import ProductGrid from "@/components/ProductGrid";

import CollectionHeader from "@/components/Headers/CollectionHeader";

import Screen from "@/components/Layout/Screen";

import {
  colors,
  spacing,
  typography,
  layout,
} from "@/theme/theme";

export default function CategoriaDetalle() {

  const { id } =
    useLocalSearchParams();

  const addToCart = useCartStore(
    (s) => s.addToCart
  );

  const currentCategory =
    categories.find(
      (c) => c.id === id
    );

  const filteredProducts =
    useMemo(() => {
      return products.filter(
        (p) => p.categoryId === id
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
          currentCategory?.title ||
          ""
        }
        image={
          currentCategory?.image ||
          ""
        }
      />

      <ActiveCategoryCard
        title={
          currentCategory?.title ||
          ""
        }
        image={
          currentCategory?.image ||
          ""
        }
        bg={
          currentCategory?.bg ||
          "#F7E81B"
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