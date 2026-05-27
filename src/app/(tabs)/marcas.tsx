import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
} from "react-native";
import { useState } from "react";
import { Search } from "lucide-react-native";
import { router } from "expo-router";

import { brands } from "@/data/brands";
import BrandGrid from "@/components/Brand/BrandGrid";
import SectionHeader from "@/components/Headers/SectionHeader";
import Screen from "@/components/Layout/Screen";
import { colors, layout } from "@/theme/theme";

export default function MarcasScreen() {
  // Estado para capturar el texto del buscador
  const [searchQuery, setSearchQuery] = useState("");

  // Lógica de filtrado: filtramos ignorando mayúsculas/minúsculas y espacios en blanco
  const filteredBrands = brands.filter((brand) =>
    brand.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Marcas" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* BUSCADOR */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#9CA3AF" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar marca"
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoCorrect={false} // Evita que el autocorrector moleste al buscar marcas
          />
        </View>

        {/* GRILLA DE MARCAS FILTRADAS */}
        {filteredBrands.length > 0 ? (
          <BrandGrid
            brands={filteredBrands} // Aquí pasamos el arreglo ya filtrado
            onPress={(brand) =>
              router.push({
                pathname: "/marca/[id]",
                params: {
                  id: brand.id,
                },
              })
            }
          />
        ) : (
          /* MENSAJE EN CASO DE NO ENCONTRAR RESULTADOS */
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: "#111",
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