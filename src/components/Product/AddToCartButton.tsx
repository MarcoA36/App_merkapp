import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, radius, typography, layout, spacing } from "@/theme/theme";

type Props = {
  onPress: () => void;
};

export default function AddToCartButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8} // Suaviza un poco el efecto al tocarlo
    >
      <Text style={styles.text}>
        Agregar al carrito
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    // Usamos el padding de tu layout para que quede alineado con los textos
    marginHorizontal: layout.screenPadding, 
    marginTop: spacing.md, 
    // Usamos el primary de tu theme en lugar del color hardcodeado
    backgroundColor: colors.primary, 
    borderRadius: radius.full, // Los botones "píldora" (redondeados al máximo) quedan muy bien en e-commerce
    alignItems: "center",
    justifyContent: "center",
    
    // Sombra sutil para darle relieve e importancia
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4, // Sombra para Android
  },
  text: {
    ...typography.body, // Reutilizamos tu sistema de tipografías
    color: colors.white,
    fontWeight: "700", // Mantenemos el peso en 700 para que resalte
  },
});