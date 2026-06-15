import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { router } from "expo-router";
import { ArrowLeft, ChevronDown } from "lucide-react-native";
import Screen from "@/components/Layout/Screen";
import { colors, spacing, layout, radius, typography } from "@/theme/theme";

export default function ReclamacionesScreen() {
  return (
    <Screen backgroundColor={colors.white}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.primary} strokeWidth={2.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reclamaciones</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.infoText}>
            Conforme a lo establecido, ponemos a tu disposición nuestro Libro de Reclamaciones Virtual.
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Identificación del Consumidor</Text>
            <Text style={styles.value}>Alicia Contreras Sánchez</Text>
          </View>

          <TouchableOpacity style={styles.dropdownGroup} activeOpacity={0.7}>
            <View>
              <Text style={styles.label}>Tipo de Bien Contratado</Text>
              <Text style={[styles.value, { marginTop: 4 }]}>Producto</Text>
            </View>
            <ChevronDown size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Detalle de la Reclamación o Queja</Text>
            <TextInput 
              placeholder="Escribe aquí los detalles del inconveniente..."
              placeholderTextColor="#9CA3AF"
              multiline
              numberOfLines={4}
              style={styles.textArea}
            />
          </View>

          <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
            <Text style={styles.submitText}>Enviar Hoja de Reclamación</Text>
          </TouchableOpacity>
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
  formContainer: { paddingHorizontal: 24, paddingTop: spacing.md, gap: 24, flex: 1 },
  infoText: { ...typography.body, color: colors.textSecondary, lineHeight: 22 },
  inputGroup: { borderBottomWidth: 1, borderBottomColor: colors.border, paddingBottom: 8 },
  dropdownGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
  },
  label: { ...typography.small, color: colors.textSecondary, marginBottom: 4 },
  value: { ...typography.body, fontWeight: "700", color: colors.primary },
  textArea: {
    ...typography.body,
    color: colors.text,
    minHeight: 80,
    textAlignVertical: "top",
    paddingTop: 8,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.md,
  },
  submitText: { ...typography.body, fontWeight: "600", color: colors.white },
});