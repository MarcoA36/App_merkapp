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
      {/* 👇 CORRECCIÓN AQUÍ: Agregamos {{ uri: item.image }} */}
      <Image
        source={{ uri: item.image }} 
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
            <Trash2 size={20} color="#555" />
          </TouchableOpacity>
        </View>

        {/* Textos descriptivos de la imagen */}
        <Text style={styles.unitDetail}>1x6 unidades</Text>
        <Text style={styles.unitPrice}>
          Precio por pack <Text style={styles.boldPrice}>S/{item.price.toFixed(2)}</Text>
        </Text>

        <View style={styles.bottomRow}>
          <Text style={styles.subtotalLabel}>
            Subtotal{" "}
            <Text style={styles.subtotalValue}>
              S/{(item.price * item.quantity).toFixed(2)}
            </Text>
          </Text>

          <QuantitySelector
            quantity={item.quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  image: {
    width: 70,
    height: 100,
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#333",
    marginRight: 8,
  },
  deleteButton: {
    padding: 4,
  },
  unitDetail: {
    marginTop: 4,
    fontSize: 13,
    color: "#888",
  },
  unitPrice: {
    marginTop: 2,
    fontSize: 13,
    color: "#888",
  },
  boldPrice: {
    fontWeight: "700",
    color: "#333",
  },
  bottomRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtotalLabel: {
    fontSize: 13,
    color: "#888",
  },
  subtotalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
});