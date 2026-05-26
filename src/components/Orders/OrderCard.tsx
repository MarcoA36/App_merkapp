import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  colors,
  spacing,
  radius,
} from "@/theme/theme";

type Props = {
  status: string;

  statusColor: string;

  textColor: string;

  total: string;

  deliveryDate?: string;
};

export default function OrderCard({
  status,
  statusColor,
  textColor,
  total,
  deliveryDate,
}: Props) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.statusBadge,
          {
            backgroundColor:
              statusColor,
          },
        ]}
      >
        <Text
          style={[
            styles.statusText,
            {
              color: textColor,
            },
          ]}
        >
          {status}
        </Text>
      </View>

      {deliveryDate && (
        <Text style={styles.info}>
          Fecha de Entrega:{" "}
          <Text style={styles.bold}>
            {deliveryDate}
          </Text>
        </Text>
      )}

      <View style={styles.row}>
        <Text style={styles.total}>
          Monto Total: S/{total}
        </Text>

        <TouchableOpacity>
          <Text style={styles.detail}>
            Ver detalle →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:
      colors.white,

    borderRadius: radius.lg,

    padding: spacing.lg,

    marginBottom: spacing.lg,

    shadowColor: "#000",

    shadowOpacity: 0.04,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  statusBadge: {
    alignSelf: "flex-start",

    paddingHorizontal: 12,

    paddingVertical: 5,

    borderRadius: 999,

    marginBottom: spacing.md,
  },

  statusText: {
    fontSize: 13,

    fontWeight: "700",
  },

  info: {
    fontSize: 14,

    color: "#666",

    marginBottom: spacing.sm,
  },

  bold: {
    fontWeight: "700",

    color: colors.text,
  },

  row: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent:
      "space-between",
  },

  total: {
    fontSize: 14,

    color: "#777",
  },

  detail: {
    fontSize: 15,

    fontWeight: "700",

    color: "#6C4CF1",
  },
});