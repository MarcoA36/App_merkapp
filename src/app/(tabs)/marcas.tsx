import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

import { brands } from "@/data/brands";

import BrandGrid from "@/components/Brand/BrandGrid";

import SectionHeader from "@/components/Headers/SectionHeader";

import Screen from "@/components/Layout/Screen";

import {
  colors,
  layout,
  spacing,
  typography,
} from "@/theme/theme";

export default function MarcasScreen() {
  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Marcas" />

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={
          styles.content
        }
      >
        <Text style={styles.subtitle}>
          Todas las marcas
        </Text>

        <BrandGrid
          brands={brands}
          onPress={(brand) =>
            router.push({
              pathname:
                "/marca/[id]",

              params: {
                id: brand.id,
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
  content: {
    paddingHorizontal:
      layout.screenPadding,
  },

  subtitle: {
    ...typography.title,

    color: colors.primary,

    marginBottom: spacing.xl,
  },
});