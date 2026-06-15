import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import Screen from "@/components/Layout/Screen";
import { colors, spacing, layout, typography } from "@/theme/theme";

export default function PrivacidadScreen() {
  return (
    <Screen backgroundColor={colors.white}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.primary} strokeWidth={2.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacidad</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.updatedText}>Última actualización: Junio 2026</Text>
          
          <Text style={styles.sectionTitle}>1. Recopilación de Datos</Text>
          <Text style={styles.paragraph}>
            Nos comprometemos a proteger tu privacidad. Recopilamos información básica de tu cuenta como nombre, correo electrónico y datos de localización únicamente para optimizar tus entregas y la experiencia en la aplicación.
          </Text>

          <Text style={styles.sectionTitle}>2. Uso de la Información</Text>
          <Text style={styles.paragraph}>
            Los datos recolectados se procesan de manera segura con el fin exclusivo de gestionar tus pedidos, procesar transacciones del carrito y notificarte sobre el estado de tus compras en tiempo real.
          </Text>

          <Text style={styles.sectionTitle}>3. Seguridad</Text>
          <Text style={styles.paragraph}>
            Implementamos cifrado estándar y medidas de control estrictas para asegurar que tu información comercial o personal no sea expuesta, vendida ni transferida a terceros sin tu consentimiento explícito.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: layout.screenPadding,
    height: 56,
    backgroundColor: colors.white,
  },
  backButton: { width: 40, height: 40, justifyContent: "center", alignItems: "flex-start" },
  headerTitle: { ...typography.subtitle, fontWeight: "700", color: colors.primary },
  scrollContent: { flexGrow: 1, paddingBottom: spacing.xl },
  content: { paddingHorizontal: layout.screenPadding, paddingTop: spacing.md },
  updatedText: { ...typography.small, color: colors.textSecondary, marginBottom: spacing.lg, fontStyle: "italic" },
  sectionTitle: { ...typography.body, fontWeight: "700", color: colors.text, marginBottom: spacing.xs, marginTop: spacing.md },
  paragraph: { ...typography.body, color: colors.textSecondary, lineHeight: 22, marginBottom: spacing.sm },
});