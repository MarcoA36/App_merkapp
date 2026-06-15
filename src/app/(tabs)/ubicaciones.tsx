import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { ArrowLeft, MapPin, Plus, Pencil, Trash2 } from "lucide-react-native";
import Screen from "@/components/Layout/Screen";
import { colors, spacing, layout, radius, typography } from "@/theme/theme";
import BackButton from "@/components/Headers/BackButton";

export default function UbicacionesScreen() {
  const locations = [
    { id: "1", label: "Casa", address: "Av. Santa Rosa 1420, Santa Anita", isDefault: true },
    { id: "2", label: "Oficina / Negocio", address: "Jr. Los Lirios 455, San Isidro", isDefault: false },
  ];

  return (
    <Screen backgroundColor={colors.background}>
  <View style={styles.headerContainer}>
        <BackButton />
        <Text style={styles.headerTitle}>Mis ubicaciones</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {locations.map((loc) => (
            <View key={loc.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View style={styles.titleRow}>
                  <MapPin size={20} color={colors.primary} strokeWidth={2} />
                  <Text style={styles.cardTitle}>{loc.label}</Text>
                  {loc.isDefault ? (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>Principal</Text>
                    </View>
                  ) : null}
                </View>

                <View style={styles.actionsRow}>
                  <TouchableOpacity activeOpacity={0.6} style={styles.actionButton}>
                    <Pencil size={18} color={colors.textSecondary} />
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.6} style={styles.actionButton}>
                    <Trash2 size={18} color={colors.textSecondary} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.cardAddress}>{loc.address}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <Plus size={20} color={colors.white} strokeWidth={2.5} />
            <Text style={styles.addButtonText}>Agregar nueva ubicación</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: { 
    width: 40, 
    height: 40, 
    justifyContent: "center", 
    alignItems: "flex-start" 
  },
  headerPlaceholder: { 
    width: 40 
  },
  headerTitle: { 
    ...typography.subtitle, 
    fontWeight: "700", 
    color: colors.primary 
  },
  scrollContent: { 
    flexGrow: 1, 
    paddingVertical: spacing.md 
  },
  container: { 
    paddingHorizontal: layout.screenPadding, 
    gap: spacing.md 
  },
  card: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardHeader: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: spacing.sm 
  },
  titleRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: spacing.sm, 
    flex: 1 
  },
  cardTitle: { 
    ...typography.body, 
    fontWeight: "600", 
    color: colors.text 
  },
  cardAddress: { 
    ...typography.small, 
    color: colors.textSecondary, 
    marginLeft: 28 
  },
  badge: { 
    backgroundColor: "#EFF2FF", 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: radius.sm 
  },
  badgeText: { 
    fontSize: 11, 
    fontWeight: "600", 
    color: colors.primary 
  },
  actionsRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: spacing.sm 
  },
  actionButton: { 
    padding: spacing.xs 
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: radius.md,
    marginTop: spacing.sm,
  },
  addButtonText: { 
    ...typography.body, 
    fontWeight: "600", 
    color: colors.white 
  },
});