import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { router } from "expo-router";

import BrandCard from "@/components/Brand/BrandCard";

import { brands } from "@/data/brands";

import { colors, spacing, layout, typography } from "@/theme/theme";
import HomeBrandCard from "./HomeBrandCard";

export default function BrandsSection() {
  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Marcas</Text>

        <TouchableOpacity onPress={() => router.push("/marcas")}>
          <Text style={styles.seeMore}>Ver más</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContent}
      >
        {brands.map((brand) => (
      <BrandCard
  key={brand.id}
  name={brand.name}
  image={brand.image}
  showName={false}
  onPress={() =>
    router.push({
      pathname: "/marca/[id]",
      params: {
        id: brand.id,
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

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: layout.screenPadding,

    marginVertical: spacing.md,
  },

  sectionTitle: {
    ...typography.subtitle,

    color: colors.text,
  },

  seeMore: {
    fontSize: 15,

    color: colors.primary,

    fontWeight: "700",
  },

  horizontalContent: {
  paddingLeft: layout.screenPadding,
  paddingRight: layout.screenPadding,

  marginBottom: spacing.xxl,
},
});
