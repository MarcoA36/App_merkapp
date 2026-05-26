import CategoryCircle from "@/components/Category/CategoryCircle";

import PromotionBanner from "@/components/PromotionBanner";

import { brands } from "@/data/brands";
import { promotions } from "@/data/promotions";

import { router } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import OrderCard from "@/components/OrderCard";

import { categories } from "@/data/categories";

import BrandCard from "@/components/Brand/BrandCard";

import HomeHeader from "@/components/Headers/HomeHeader";

import Screen from "@/components/Layout/Screen";

import {
  colors,
  spacing,
  layout,
  typography,
} from "@/theme/theme";

export default function HomeScreen() {
  return (
    <Screen backgroundColor={colors.background}>
      <HomeHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* PEDIDO */}

        <OrderCard />

        {/* PROMOCIONES */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={
            styles.promotionsContainer
          }
        >
          {promotions.map((promo) => (
            <PromotionBanner
              key={promo.id}
              image={promo.image}
            />
          ))}
        </ScrollView>

        {/* MARCAS */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Marcas
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push("/marcas")
            }
          >
            <Text style={styles.seeMore}>
              Ver más
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
          contentContainerStyle={
            styles.horizontalContent
          }
        >
          {brands
            .slice(0, 6)
            .map((brand) => (
              <BrandCard
                key={brand.id}
                name={brand.name}
                image={brand.image}
                onPress={() =>
                  router.push({
                    pathname:
                      "/marca/[id]",

                    params: {
                      id: brand.id,
                    },
                  })
                }
              />
            ))}
        </ScrollView>

        {/* CATEGORÍAS */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Categorías
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push(
                "/categorias"
              )
            }
          >
            <Text style={styles.seeMore}>
              Ver más
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={
            false
          }
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

        <View
          style={{
            height: spacing.xxl,
          }}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  promotionsContainer: {
    paddingLeft:
      layout.screenPadding,

    paddingRight: spacing.sm,

    marginBottom:
      layout.sectionSpacing,
  },

  sectionHeader: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    alignItems: "center",

    paddingHorizontal:
      layout.screenPadding,

    marginBottom: spacing.lg,
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

    paddingRight: spacing.sm,

    marginBottom:
      layout.sectionSpacing,
  },
});