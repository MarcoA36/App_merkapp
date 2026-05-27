import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors, radius, typography, spacing } from "@/theme/theme";

type Props = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export default function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
}: Props) {
  return (
    <View style={styles.container}>
      {/* Botón de restar */}
      <TouchableOpacity
        style={styles.button}
        onPress={onDecrease}
        disabled={quantity <= 1} // Deshabilita el toque si es 1
        activeOpacity={0.7}
      >
        <Text style={[
          styles.iconText, 
          quantity <= 1 && styles.iconDisabled // Cambia el color si está en 1
        ]}>
          −
        </Text>
      </TouchableOpacity>

      {/* Cantidad */}
      <Text style={styles.value}>
        {quantity}
      </Text>

      {/* Botón de sumar */}
      <TouchableOpacity
        style={styles.button}
        onPress={onIncrease}
        activeOpacity={0.7}
      >
        <Text style={styles.iconText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background, // Usa el gris clarito de tu theme
    borderRadius: radius.full, // Le da esa forma de píldora
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
  },
  
  button: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: {
    fontSize: 24,
    // Usamos tu color primario para que los +/- se vean clickeables
    color: colors.primary, 
    fontWeight: "400",
    marginTop: -2, // Pequeño truco para centrar ópticamente los signos +/- en Android/iOS
  },

  iconDisabled: {
    color: colors.border, // Se vuelve gris clarito cuando no podés restar más
  },

  value: {
    ...typography.body,
    fontWeight: "600", // Un poco más de peso para que resalte
    color: colors.text,
    minWidth: 28, // Ancho mínimo para que si pasás a "10" no empuje los botones a los costados
    textAlign: "center",
    marginHorizontal: spacing.xs,
  },
});