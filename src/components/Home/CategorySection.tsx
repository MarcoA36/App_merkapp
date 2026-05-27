import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import { categories } from "@/data/categories";



import {
  colors,
  spacing,
  layout,
  typography,
} from "@/theme/theme";
import CategoryCircle from "../Category/CategoryCircle";

export default function CategoriesSection() {
  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Categorías
        </Text>

        <TouchableOpacity
          onPress={() =>
            router.push("/categorias")
          }
        >
          <Text style={styles.seeMore}>
            Ver más
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.horizontalContent
        }
      >
        {categories
          .slice(0, 6)
          .map((item) => (
            <CategoryCircle
              key={item.id}
              title={item.title}
              image={item.image}
              bg={item.bg}
              onPress={() =>
                router.push({
                  pathname:
                    "/categoria/[id]",
                  params: {
                    id: item.id,
                  },
                })
              }
            />
          ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    alignItems: "center",

    paddingHorizontal:
      layout.screenPadding,

    marginVertical: spacing.lg,
  },

  sectionTitle: {
    ...typography.title,

    color: colors.text,
  },

  seeMore: {
    fontSize: 15,

    color: colors.primary,

    fontWeight: "700",
  },

  horizontalContent: {
    paddingLeft:
      layout.screenPadding,

    paddingRight:
      layout.screenPadding,

    marginBottom:
      layout.sectionSpacing,
  },
});