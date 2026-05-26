import { View, Text, StyleSheet, ScrollView } from "react-native";

import { router } from "expo-router";

import { categories } from "@/data/categories";

import CategoryCircle from "@/components/Category/CategoryCircle";

import SectionHeader from "@/components/Headers/SectionHeader";

import Screen from "@/components/Layout/Screen";

import { colors, layout, spacing, typography } from "@/theme/theme";

export default function CategoriasScreen() {
  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Categorias" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.allCategories}>Todas las categorías</Text>

        <View style={styles.grid}>
          {categories.map((item) => (
            <CategoryCircle
              key={item.id}
              title={item.title}
              image={item.image}
              bg={item.bg}
              onPress={() =>
                router.push({
                  pathname: "/categoria/[id]",

                  params: {
                    id: item.id,
                    name: item.title,
                  },
                })
              }
            />
          ))}
        </View>

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
  content: {
    paddingHorizontal: layout.screenPadding,
  },

  allCategories: {
    ...typography.title,

    color: colors.primary,

    marginBottom: spacing.xl,
  },

  grid: {
    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-between",
  },
});
