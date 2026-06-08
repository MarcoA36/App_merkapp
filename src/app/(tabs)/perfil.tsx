import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";
import { ArrowLeft, Pencil, ChevronDown } from "lucide-react-native";
import Screen from "@/components/Layout/Screen";
import { colors } from "@/theme/theme";

export default function PerfilScreen() {
  return (
    <Screen backgroundColor="#FFF">
      {/* Encabezado personalizado idéntico a la imagen */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#2E3192" strokeWidth={2.5} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity style={styles.editButton}>
          <Pencil size={24} color="#2E3192" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Efecto visual de onda curva debajo del header */}
        <View style={styles.waveDecorator} />

        {/* Formulario de Datos */}
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nombre</Text>
            <Text style={styles.value}>Alicia</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Apellido</Text>
            <Text style={styles.value}>Contreras Sánchez</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>pizarrocontrerast@gmail.com</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Número de teléfono</Text>
            <Text style={styles.value}>910501187</Text>
          </View>

          {/* Selector / Dropdown de Rubro o Negocio */}
          <TouchableOpacity style={styles.dropdownGroup} activeOpacity={0.7}>
            <View>
              <Text style={[styles.value, { fontSize: 18 }]}>Farmacia</Text>
            </View>
            <ChevronDown size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Botón de Eliminar Cuenta en la parte inferior */}
        <TouchableOpacity style={styles.deleteAccountButton} activeOpacity={0.6}>
          <Text style={styles.deleteAccountText}>Eliminar cuenta</Text>
        </TouchableOpacity>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#FFF",
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  editButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2E3192",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  waveDecorator: {
    height: 20,
    backgroundColor: "#EFF2FF",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    transform: [{ scaleX: 1.2 }],
    marginBottom: 20,
    opacity: 0.6,
  },
  formContainer: {
    paddingHorizontal: 24,
    gap: 20,
    flex: 1,
  },
  inputGroup: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 8,
  },
  dropdownGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 12,
    marginTop: 8,
  },
  label: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E3192",
  },
  deleteAccountButton: {
    alignItems: "center",
    marginTop: 40,
    paddingVertical: 12,
  },
  deleteAccountText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E3192",
  },
});