// app/(tabs)/busqueda.tsx

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";

import { useMemo, useState } from "react";

import { router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import Screen from "@/components/Layout/Screen";

import SectionHeader from "@/components/Headers/SectionHeader";

import ProductGrid from "@/components/ProductGrid";

import { products } from "@/data/products";

import { useCartStore } from "@/store/cartStore";

import {
  colors,
  spacing,
  layout,
} from "@/theme/theme";

export default function BusquedaScreen() {

  const [search, setSearch] =
    useState("");

  const addToCart = useCartStore(
    (s) => s.addToCart
  );

  const filteredProducts =
    useMemo(() => {

      if (!search.trim()) {
        return [];
      }

      return products.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [search]);

  return (
    <Screen
      backgroundColor={
        colors.white
      }
    >
      <SectionHeader title="Búsqueda" />

      <View style={styles.searchContainer}>

        <Ionicons
          name="search-outline"
          size={20}
          color="#777"
        />

        <TextInput
          placeholder="Buscar en Merkapp"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          underlineColorAndroid="transparent"
          selectionColor="#2E3192"
        />

      </View>

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >

        {search.length > 0 && (
          <>
            <Text style={styles.results}>
              Resultados
            </Text>

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
          </>
        )}

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
  searchContainer: {

    height: 54,

    backgroundColor: "#F8F8F8",

    borderRadius: 16,

    marginHorizontal:
      layout.screenPadding,

    marginTop: spacing.sm,

    marginBottom: spacing.xl,

    paddingHorizontal:
      spacing.md,

    flexDirection: "row",

    alignItems: "center",

    borderWidth: 1,

    borderColor: "#ECECEC",
  },

  input: {

    flex: 1,

    height: "100%",

    marginLeft: spacing.sm,

    fontSize: 16,

    color: colors.text,
  },

  results: {
    fontSize: 24,

    fontWeight: "700",

    color: colors.text,

    marginHorizontal:
      layout.screenPadding,

    marginBottom: spacing.lg,
  },
});