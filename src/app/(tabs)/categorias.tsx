import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { categories } from "@/data/categories";
import CategoryCircle from "@/components/Category/CategoryCircle";
import SectionHeader from "@/components/Headers/SectionHeader";
import Screen from "@/components/Layout/Screen";
import { colors, layout, spacing, typography } from "@/theme/theme";

export default function CategoriasScreen() {
  const { width } = useWindowDimensions();
  
  // Ancho real usable (pantalla total menos paddings laterales)
  const availableWidth = width - (layout.screenPadding * 2);

  const itemWidth = 90; 
  const minGap = 16; 

  // Calculamos cuántas columnas entran (mínimo 2 para pantallas muy chicas)
  const numColumns = Math.max(2, Math.floor((availableWidth + minGap) / (itemWidth + minGap)));

  // CRÍTICO: Usamos Math.floor() para evitar desbordes por decimales.
  const exactGap = numColumns > 1 
    ? Math.floor((availableWidth - (numColumns * itemWidth)) / (numColumns - 1)) 
    : minGap;

  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Categorías" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.allCategories}>Todas las categorías</Text>

        <View style={[
          styles.grid, 
          { 
            columnGap: exactGap, // Separación dinámica horizontal 
            rowGap: spacing.lg || 24 // Separación vertical fija para mantener consistencia
          }
        ]}>
          {categories.map((item) => (
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
    // Flex-start asegura que, si la última fila tiene menos elementos, se alineen desde la izquierda
    // pero si solo entran 2 en pantallas minúsculas, el exactGap simulará que están bien distribuidos.
    justifyContent: "flex-start", 
  },
});