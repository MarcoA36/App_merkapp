import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useMemo, useState } from "react";
import { router } from "expo-router";

import Screen from "@/components/Layout/Screen";
import SectionHeader from "@/components/Headers/SectionHeader";
import ProductGrid from "@/components/ProductGrid";
import SearchInput from "@/components/SearchInput"; 
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { colors, spacing, layout } from "@/theme/theme";

export default function BusquedaScreen() {
  const [search, setSearch] = useState("");
  const addToCart = useCartStore((s) => s.addToCart);

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Búsqueda" />

      {/* 👇 Usamos el mismo componente modular aquí */}
      <SearchInput 
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar en Merkapp"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {search.length > 0 && (
          <>
            <Text style={styles.results}>Resultados</Text>

            <ProductGrid
              products={filteredProducts}
              onAdd={(product) => addToCart(product)}
              onPress={(product) =>
                router.push({
                  pathname: "/producto/[id]",
                  params: { id: product.id },
                })
              }
            />
          </>
        )}

        <View style={{ height: 120 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  results: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    marginHorizontal: layout.screenPadding,
    marginBottom: spacing.lg,
  },
});