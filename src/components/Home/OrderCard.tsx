import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  ArrowRight,
  Truck,
} from "lucide-react-native";

import { pedidos } from "@/data/pedidos";
import {
  colors,
  spacing,
  radius,
  layout,
} from "@/theme/theme";

export default function OrderCard() {
  const pedido = pedidos.proximo;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
    >
      <View style={styles.left}>
        <View style={styles.topRow}>
          <Text style={styles.smallText}>
            Tienes 1 pedido
          </Text>

          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor:
                  pedido.statusColor,
              },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                {
                  color:
                    pedido.textColor,
                },
              ]}
            >
              {pedido.status}
            </Text>
          </View>
        </View>

        <Text style={styles.deliveryDate}>
          Día de entrega {pedido.deliveryDate}
        </Text>

        <Text style={styles.schedule}>
          Hora estimada 7 a.m. - 7 p.m.
        </Text>
      </View>

      <View style={styles.right}>
        <Truck
          size={20}
          color={colors.textSecondary}
        />

        <View style={styles.arrowCircle}>
          <ArrowRight
            size={14}
            color={colors.white}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,

    marginHorizontal:
      layout.screenPadding,

    paddingHorizontal:
      spacing.md,

    paddingVertical: 12,

    borderRadius: radius.lg,

    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",

    marginBottom: spacing.sm,
  },

  left: {
    flex: 1,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: 6,
  },

  smallText: {
    fontSize: 13,
    color: colors.textSecondary,
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: radius.full,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },

  deliveryDate: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 4,
  },

  schedule: {
    fontSize: 14,
    color: colors.textSecondary,
  },

  right: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  arrowCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,

    backgroundColor:
      colors.primary,

    alignItems: "center",
    justifyContent: "center",
  },
});