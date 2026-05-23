import { View, Text, StyleSheet } from "react-native";

export default function OrderCard() {
  return (
    <View style={styles.orderCard}>
      <View>
        <Text style={styles.orderSmall}>Tienes 1 pedido</Text>

        <Text style={styles.orderTitle}>
          Entrega Jueves 26/02
        </Text>

        <Text style={styles.orderSmall}>
          7 a.m. - 7 p.m.
        </Text>
      </View>

      <Text style={styles.orderArrow}>→</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  orderCard: {
    backgroundColor: "#fff",

    marginHorizontal: 20,

    borderRadius: 22,

    padding: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 24,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  orderSmall: {
    fontSize: 13,
    color: "#666",
  },

  orderTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginVertical: 4,
  },

  orderArrow: {
    fontSize: 24,
    color: "#1E3A8A",
  },
});