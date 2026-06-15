import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Pressable } from "react-native";
import { useMenuStore } from "@/store/menuStore";
import { 
  User, 
  MapPin, 
  MessageCircle, 
  FileText, 
  ShieldCheck, 
  Clock, 
  BookOpen, 
  ChevronRight 
} from "lucide-react-native";
import { router } from "expo-router";
const { width } = Dimensions.get("window");

export default function SideDrawer() {
  const { isOpen, closeMenu } = useMenuStore();

  if (!isOpen) return null;

  const menuItems = [
    { id: "perfil", title: "Perfil", icon: User },
    { id: "ubicaciones", title: "Mis ubicaciones", icon: MapPin },

    { id: "privacidad", title: "Política de privacidad", icon: ShieldCheck },
    { id: "horario", title: "Horario de atención", icon: Clock },
    { id: "reclamos", title: "Libro de reclamaciones", icon: BookOpen },
  ];
// const handleItemPress = (id: string) => {
//   closeMenu();
  
//   if (id === "perfil") {
//     router.push("/perfil"); 
//   }
// };
const handleItemPress = (id: string) => {
    closeMenu(); // Cerramos el menú lateral primero para una transición limpia
    router.push(`/${id}` as any); // 👈 Navega automáticamente a /perfil, /ubicaciones, /reclamos, etc.
  };

  const handleLogout = () => {
  closeMenu(); 
  router.replace("/"); 
};
  return (
    <View style={styles.container}>
      {/* Fondo oscuro translúcido para cerrar el menú */}
      <Pressable style={styles.backdrop} onPress={closeMenu} />

      {/* Contenedor blanco del menú */}
      <View style={styles.drawerStyle}>
        
        {/* Header del Perfil */}
        <View style={styles.header}>
          <Text style={styles.mainTitle}>casa</Text>
          <Text style={styles.subtitle}>Santa rosa m</Text>
        </View>

        {/* Lista de Opciones */}
        <View style={styles.menuList}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity key={item.id} style={styles.menuItem} activeOpacity={0.6}  onPress={() => handleItemPress(item.id)}>
                <View style={styles.itemLeftRow}>
                  <IconComponent size={24} color="#1F2937" strokeWidth={1.5} />
                  <Text style={styles.itemText}>{item.title}</Text>
                </View>
                <ChevronRight size={20} color="#2E3192" strokeWidth={2} />
              </TouchableOpacity>
  
            );
          })}
        </View>

        {/* Footer con Botón Cerrar Sesión */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8} onPress={handleLogout}>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>Versión 3.20.6 (115)</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    flexDirection: "row",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  drawerStyle: {
    width: width * 0.82, // Ocupa el 82% del ancho de la pantalla
    backgroundColor: "#FFF",
    height: "100%",
    paddingTop: 40,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
  },
  menuList: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  itemLeftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  itemText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1F2937",
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: "center",
    gap: 12,
  },
  logoutButton: {
    width: "100%",
    backgroundColor: "#EFF2FF",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E3192",
  },
  versionText: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});