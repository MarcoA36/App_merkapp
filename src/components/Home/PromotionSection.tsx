import { ScrollView, StyleSheet } from "react-native";

import PromotionBanner from "@/components/PromotionBanner";

import { promotions } from "@/data/promotions";

import {
  spacing,
  layout,
} from "@/theme/theme";

export default function PromotionsSection() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={
        styles.container
      }
    >
      {promotions.map((promo) => (
        <PromotionBanner
          key={promo.id}
          image={promo.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:
      layout.screenPadding,

    paddingRight:
      layout.screenPadding,

    marginBottom: spacing.xl,
  },
});