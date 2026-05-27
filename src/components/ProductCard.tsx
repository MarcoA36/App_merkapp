import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors, radius, typography, spacing } from "@/theme/theme";

type Props = {
  product: any;
  onAdd: () => void;
  onPress: () => void;
};

export default function ProductCard({
  product,
  onAdd,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        {/* Usamos un fondo sutil para la imagen como se ve en tu app */}
        <Image
          source={typeof product.image === 'string' ? { uri: product.image } : product.image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          numberOfLines={2}
          style={styles.name}
        >
          {product.name}
        </Text>

        <Text style={styles.priceLabel}>
          Precio
        </Text>

        <Text style={styles.price}>
          S/{Number(product.price).toFixed(2)}
        </Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={onAdd}
          activeOpacity={0.7}
        >
          <Text style={styles.addButtonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%", // Mantiene las dos columnas
    backgroundColor: colors.white,
    borderRadius: 20, // Bordes bien redondeados como en la foto
    marginBottom: spacing.md,
    // Sombra sutil que se ve en la captura
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2, 
    overflow: "hidden", // Para que la imagen no se salga del borde redondeado
  },

  imageContainer: {
    backgroundColor: "#F8F9FA", // Fondo gris ultra claro detrás de la foto
    padding: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  image: {
    width: "100%",
    height: 120, // Ajustado para dar espacio al texto
  },

  infoContainer: {
    padding: spacing.md,
  },

  name: {
    ...typography.small,
    color: colors.textSecondary,
    minHeight: 36, // Asegura que todas las tarjetas tengan la misma altura si un título es corto
    marginBottom: spacing.sm,
    lineHeight: 18,
  },

  priceLabel: {
    ...typography.small,
    color: colors.textSecondary,
    marginBottom: 2,
  },

  price: {
    ...typography.subtitle,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.md,
  },

  addButton: {
    height: 44,
    borderRadius: radius.full, // Píldora
    backgroundColor: colors.background, // Usa el gris/celeste claro de tu theme
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: 24,
    color: colors.primary, // El signo "+" en azul
    fontWeight: "400",
    marginTop: -2, // Centrado óptico
  },
});