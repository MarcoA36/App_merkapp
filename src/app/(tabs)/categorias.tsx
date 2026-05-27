import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { categories } from "@/data/categories";
import CategoryCircle from "@/components/Category/CategoryCircle";
import SectionHeader from "@/components/Headers/SectionHeader";
import Screen from "@/components/Layout/Screen";
import { colors, layout, spacing, typography } from "@/theme/theme";

export default function CategoriasScreen() {
  // 1. Leemos el ancho de la pantalla (funciona en vivo al girar el celu o en tablets)
  const { width } = useWindowDimensions();

  // 2. Ancho real usable (pantalla total menos los dos paddings laterales)
  const availableWidth = width - (layout.screenPadding * 2);

  // 3. Definimos cuánto mide tu círculo y un gap mínimo aceptable
  const itemWidth = 90; // El ancho que le pusimos a CategoryCircle
  const minGap = 16; 

  // 4. MATEMÁTICA: ¿Cuántas columnas entran perfectamente en el espacio disponible?
  // En un celu darán 3 o 4. En una tablet pueden dar 6 u 8.
  const numColumns = Math.max(3, Math.floor((availableWidth + minGap) / (itemWidth + minGap)));

  // 5. MATEMÁTICA: Calculamos la separación exacta para que el primero y el último toquen los bordes
  const exactGap = numColumns > 1 
    ? (availableWidth - (numColumns * itemWidth)) / (numColumns - 1) 
    : 0;

  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Categorías" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.allCategories}>Todas las categorías</Text>

        {/* Le pasamos el gap dinámico directamente al estilo de la grilla */}
        <View style={[styles.grid, { gap: exactGap }]}>
          {categories.map((item) => (
            // Ahora el ítem tiene el ancho estricto de 90px, ni más ni menos
            <View key={item.id} style={{ width: itemWidth }}>
              <CategoryCircle
                title={item.title}
                image={item.image}
                bg={item.bg}
                onPress={() => {
                  router.push({
                    pathname: "/categoria/[id]",
                    params: {
                      id: item.id,
                      name: item.title,
                    },
                  });
                }}
              />
            </View>
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: layout.screenPadding,
  },
  allCategories: {
    ...typography.subtitle,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: spacing.lg,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    // Eliminamos el alignItems y el justifyContent.
    // El gap calculado hace todo el trabajo de alineación.
  },
});