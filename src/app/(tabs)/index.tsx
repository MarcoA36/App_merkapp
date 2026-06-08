import { View, ScrollView } from "react-native";

import OrderCard from "@/components/Home/OrderCard";

import HomeHeader from "@/components/Headers/HomeHeader";

import Screen from "@/components/Layout/Screen";

import { colors, spacing } from "@/theme/theme";
import BrandsSection from "@/components/Home/BrandsSection";
import CategoriesSection from "@/components/Home/CategorySection";
import PromotionsSection from "@/components/Home/PromotionSection";
import SideDrawer from "@/components/Navigation/SideDrawer";

export default function HomeScreen() {
  return (
    <Screen backgroundColor={colors.background}>
      <HomeHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderCard />
        <PromotionsSection />

        <BrandsSection />
        <CategoriesSection />
        <View
          style={{
            height: spacing.xxl,
          }}
        />
      </ScrollView>

      <SideDrawer/>
    </Screen>
  );
}
