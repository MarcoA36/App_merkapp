import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Trash2 } from "lucide-react-native";
import QuantitySelector from "./QuantitySelector";

type Props = {
  item: any;
  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: () => void;
};

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onDelete,
}: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.info}>
        <View style={styles.topRow}>
          <Text numberOfLines={2} style={styles.name}>
            {item.name}
          </Text>

    <TouchableOpacity
  onPress={onDelete}
  style={styles.deleteButton}
  activeOpacity={0.7}
>
  <Trash2 size={18} color="#E53935" />
</TouchableOpacity>
        </View>

        <Text style={styles.unitPrice}>
          S/{item.price} c/u
        </Text>

        <View style={styles.bottomRow}>
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            disableDecrease={item.quantity === 1}
          />

          <Text style={styles.subtotal}>
            S/{item.price * item.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",

    borderRadius: 24,

    padding: 14,

    flexDirection: "row",

    marginBottom: 18,
  },

  image: {
    width: 92,
    height: 92,
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  name: {
    flex: 1,

    fontSize: 16,
    fontWeight: "700",
    color: "#111",

    marginRight: 12,
  },

  delete: {
    fontSize: 20,
  },
  deleteButton: {
  width: 32,
  height: 32,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
},

  unitPrice: {
    marginTop: 6,

    fontSize: 14,
    color: "#777",
  },

  bottomRow: {
    marginTop: 16,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  subtotal: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
  },
});