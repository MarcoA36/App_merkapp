import { View, Text, StyleSheet } from "react-native";
import { colors, spacing, layout, typography } from "@/theme/theme";

type Props = {
  name: string;
  unitPrice: number;
  subtotal: number;
  children: React.ReactNode;
};

export default function ProductInfo({
  name,
  unitPrice,
  subtotal,
  children,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.unitText}>
        1 unidad
      </Text>
      
      <Text style={styles.unitPrice}>
        Precio por unidad S/{unitPrice.toFixed(2)}
      </Text>

      {/* Contenedor Fila: Alinea el subtotal a la izquierda y el selector a la derecha */}
      <View style={styles.subtotalRow}>
        <View>
          <Text style={styles.totalLabel}>
            Subtotal
          </Text>
          <Text style={styles.total}>
            S/{subtotal.toFixed(2)}
          </Text>
        </View>

        {/* El selector de cantidad se renderiza acá */}
        <View>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.screenPadding,
  },
  name: {
    // 28 era muy grande comparado con la foto, lo ajustamos a algo más cercano
    fontSize: 20, 
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.md,
  },
  unitText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  unitPrice: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  subtotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Centra verticalmente el texto y el botón
    marginBottom: spacing.xl,
  },
  totalLabel: {
    ...typography.small,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  total: {
    ...typography.title,
    fontWeight: "700", // Sobreescribimos el 500 del theme para darle más peso
    color: colors.text,
  },
});