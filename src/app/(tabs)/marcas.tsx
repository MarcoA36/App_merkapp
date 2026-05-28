import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import { brands } from "@/data/brands";
import BrandGrid from "@/components/Brand/BrandGrid";
import SectionHeader from "@/components/Headers/SectionHeader";
import Screen from "@/components/Layout/Screen";
import SearchInput from "@/components/SearchInput"; // 👈 Importamos el nuevo componente
import { colors, layout } from "@/theme/theme";

export default function MarcasScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Marcas" />

      {/* 👇 BUSCADOR FIJO (Fuera del ScrollView) */}
      <SearchInput 
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Buscar marca"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* GRILLA DE MARCAS FILTRADAS */}
        {filteredBrands.length > 0 ? (
          <BrandGrid
            brands={filteredBrands}
            onPress={(brand) =>
              router.push({
                pathname: "/marca/[id]",
                params: { id: brand.id },
              })
            }
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No se encontraron marcas que coincidan con "{searchQuery}"
            </Text>
          </View>
        )}

        <View style={{ height: 120 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: layout.screenPadding,
    paddingTop: 8,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
  },
});