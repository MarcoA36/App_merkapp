import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import Screen from "@/components/Layout/Screen";

import SectionHeader from "@/components/Headers/SectionHeader";
import { pedidos } from "@/data/pedidos";

import { layout } from "@/theme/theme";
import OrdersSection from "@/components/Orders/OrdersSection";

export default function PedidosScreen() {

  return (
    <Screen backgroundColor="#FAFAFA">

      <SectionHeader title="Pedidos" />

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
        contentContainerStyle={
          styles.content
        }
      >

        <OrdersSection
          title="Próxima entrega"
          orders={[pedidos.proximo]}
        />

        <OrdersSection
          title="Historial"
          orders={pedidos.historial}
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
});