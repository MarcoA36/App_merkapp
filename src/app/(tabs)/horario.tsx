import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { ArrowLeft, Clock } from "lucide-react-native";
import Screen from "@/components/Layout/Screen";
import { colors, spacing, layout, radius, typography } from "@/theme/theme";

export default function HorarioScreen() {
  const schedule = [
    { days: "Lunes a Viernes", hours: "08:00 AM - 07:00 PM" },
    { days: "Sábados", hours: "09:00 AM - 05:00 PM" },
    { days: "Domingos y Feriados", hours: "Cerrado", isClosed: true },
  ];

  return (
    <Screen backgroundColor={colors.background}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color={colors.primary} strokeWidth={2.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Horario de atención</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          
          {/* Badge de Estado Actual */}
          <View style={styles.statusCard}>
            <Clock size={24} color={colors.primary} />
            <View>
              <Text style={styles.statusTitle}>Estado Actual</Text>
              <Text style={styles.statusValue}>Abierto ahora</Text>
            </View>
          </View>

          {/* Tabla de horarios */}
          <View style={styles.tableCard}>
            {schedule.map((item, index) => (
              <View 
                key={index} 
                style={[styles.row, index === schedule.length - 1 && { borderBottomWidth: 0 }]}
              >
                <Text style={styles.dayText}>{item.days}</Text>
                <Text style={[styles.hourText, item.isClosed && { color: colors.textSecondary, fontWeight: "400" }]}>
                  {item.hours}
                </Text>
              </View>
            ))}
          </View>

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
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: { width: 40, height: 40, justifyContent: "center", alignItems: "flex-start" },
  headerTitle: { ...typography.subtitle, fontWeight: "700", color: colors.primary },
  scrollContent: { flexGrow: 1, paddingVertical: spacing.md },
  container: { paddingHorizontal: layout.screenPadding, gap: spacing.md },
  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: "#EFF2FF",
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statusTitle: { ...typography.small, color: colors.textSecondary },
  statusValue: { ...typography.body, fontWeight: "700", color: colors.primary },
  tableCard: {
    backgroundColor: colors.white,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  dayText: { ...typography.body, fontWeight: "500", color: colors.text },
  hourText: { ...typography.body, fontWeight: "600", color: colors.primary },
});