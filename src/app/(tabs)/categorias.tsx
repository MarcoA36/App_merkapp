// import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
// import { router } from "expo-router";
// import { categories } from "@/data/categories";
// import CategoryCircle from "@/components/Category/CategoryCircle";
// import SectionHeader from "@/components/Headers/SectionHeader";
// import Screen from "@/components/Layout/Screen";
// import { colors, layout, spacing, typography } from "@/theme/theme";

// export default function CategoriasScreen() {
//   const { width } = useWindowDimensions();
  
//   // Ancho real usable (pantalla total menos paddings laterales)
//   const availableWidth = width - (layout.screenPadding * 2);

//   const itemWidth = 90; 
//   const minGap = 16; 

//   // Calculamos cuántas columnas entran (mínimo 2 para pantallas muy chicas)
//   const numColumns = Math.max(2, Math.floor((availableWidth + minGap) / (itemWidth + minGap)));

//   // CRÍTICO: Usamos Math.floor() para evitar desbordes por decimales.
//   const exactGap = numColumns > 1 
//     ? Math.floor((availableWidth - (numColumns * itemWidth)) / (numColumns - 1)) 
//     : minGap;

//   return (
//     <Screen backgroundColor={colors.white}>
//       <SectionHeader title="Categorías" />

//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.content}
//       >
//         <Text style={styles.allCategories}>Todas las categorías</Text>

//         <View style={[
//           styles.grid, 
//           { 
//             columnGap: exactGap, // Separación dinámica horizontal 
//             rowGap: spacing.lg || 24 // Separación vertical fija para mantener consistencia
//           }
//         ]}>
//           {categories.map((item) => (
//             <View key={item.id} style={{ width: itemWidth }}>
//               <CategoryCircle
//                 title={item.title}
//                 image={item.image}
//                 bg={item.bg}
//                 onPress={() => {
//                   router.push({
//                     pathname: "/categoria/[id]",
//                     params: {
//                       id: item.id,
//                       name: item.title,
//                     },
//                   });
//                 }}
//               />
//             </View>
//           ))}
//         </View>

//         <View style={{ height: 120 }} />
//       </ScrollView>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   content: {
//     paddingHorizontal: layout.screenPadding,
//   },
//   allCategories: {
//     ...typography.subtitle,
//     fontWeight: "700",
//     color: colors.primary,
//     marginBottom: spacing.lg,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     // Flex-start asegura que, si la última fila tiene menos elementos, se alineen desde la izquierda
//     // pero si solo entran 2 en pantallas minúsculas, el exactGap simulará que están bien distribuidos.
//     justifyContent: "flex-start", 
//   },
// });









//👆sin subcategorias

//👇con subcategorias

import { View, Text, StyleSheet, ScrollView, useWindowDimensions, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { categories} from "@/data/categories";
import { departments } from "@/data/departaments";
import CategoryCircle from "@/components/Category/CategoryCircle";
import SectionHeader from "@/components/Headers/SectionHeader";
import Screen from "@/components/Layout/Screen";
import { colors, layout, spacing, typography } from "@/theme/theme";


export default function CategoriasScreen() {
  const { width } = useWindowDimensions();
  
  // Estado para controlar qué departamento está seleccionado
  const [activeDept, setActiveDept] = useState("bodega");

  // Filtrar categorías según el departamento activo
  const filteredCategories = categories.filter(
    (cat) => cat.departamentId === activeDept
  );

  // Layout matemático para la grilla de subcategorías
  const availableWidth = width - (layout.screenPadding * 2);
  const itemWidth = 90; 
  const minGap = 16; 

  const numColumns = Math.max(2, Math.floor((availableWidth + minGap) / (itemWidth + minGap)));
  const exactGap = numColumns > 1 
    ? Math.floor((availableWidth - (numColumns * itemWidth)) / (numColumns - 1)) 
    : minGap;

  return (
    <Screen backgroundColor={colors.white}>
      <SectionHeader title="Categorías" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* ========================================================= */}
        {/* PILARES PRINCIPALES (BODEGA Y FARMACIA) */}
        {/* ========================================================= */}
        <View style={styles.departmentsContainer}>
          {departments.map((dept) => {
            const isActive = activeDept === dept.id;
            return (
              <TouchableOpacity
                key={dept.id}
                activeOpacity={0.9}
                onPress={() => setActiveDept(dept.id)}
                style={[
                  styles.deptCard,
                  { backgroundColor: dept.bg },
                  isActive ? styles.deptCardActive : styles.deptCardInactive,
                ]}
              >
                <View style={styles.deptTextWrapper}>
                  <Text style={styles.deptTitle}>{dept.title}</Text>
                  {isActive && <View style={styles.activeDot} />}
                </View>
                <Image source={{ uri: dept.image }} style={styles.deptImage} />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* TÍTULO DE SECCIÓN DINÁMICO */}
        <Text style={styles.allCategories}>
          {activeDept === "bodega" ? "Categorías de Bodega" : "Categorías de Farmacia"}
        </Text>

        {/* GRILLA DE CATEGORÍAS FILTRADAS */}
        <View style={[
          styles.grid, 
          { columnGap: exactGap, rowGap: spacing.lg || 24 }
        ]}>
          {filteredCategories.map((item) => (
            <View key={item.id} style={{ width: itemWidth }}>
              <CategoryCircle
                title={item.title}
                image={item.image}
                bg={item.bg}
                onPress={() => {
                  router.push({
                    pathname: "/categoria/[id]",
                    params: {
                      id: item.id,
                      name: item.title,
                    },
                  });
                }}
              />
            </View>
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: layout.screenPadding,
    paddingTop: spacing.md,
  },
  departmentsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 28,
  },
  deptCard: {
    flex: 1,
    height: 90,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "transparent",
    // Sutil sombra base
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  deptCardActive: {
    borderColor: "#2E3192", // Resaltamos el activo con el color primario de tu app
    opacity: 1,
  },
  deptCardInactive: {
    opacity: 0.55, // Apagamos sutilmente el no seleccionado
  },
  deptTextWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  deptTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2E3192",
    marginTop: 4,
  },
  deptImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  allCategories: {
    ...typography.subtitle,
    fontWeight: "700",
    color: colors.primary,
    marginBottom: spacing.lg,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", 
  },
});