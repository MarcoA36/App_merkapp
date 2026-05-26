import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import OrderCard from "./OrderCard";

import {
  colors,
  spacing,
  typography,
} from "@/theme/theme";

type Order = {
  id: string;

  status: string;

  statusColor: string;

  textColor: string;

  total: string;

  deliveryDate?: string;
};

type Props = {
  title: string;

  orders: Order[];
};

export default function OrdersSection({
  title,
  orders,
}: Props) {
  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>

      {orders.map((order) => (
        <OrderCard
          key={order.id}
          status={order.status}
          statusColor={
            order.statusColor
          }
          textColor={order.textColor}
          total={order.total}
          deliveryDate={
            order.deliveryDate
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...typography.subtitle,

    color: colors.text,

    marginBottom: spacing.lg,

    marginTop: spacing.sm,
  },
});