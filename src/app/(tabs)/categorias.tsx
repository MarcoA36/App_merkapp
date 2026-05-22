// app/(tabs)/categorias.jsx

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { router } from "expo-router";
import { categories } from "@/data/categories";
import CategoryCircle from "@/components/CategoryCircle";

export default function CategoriasScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <Text style={styles.title}>Categorías</Text>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛒</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>11</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* GRID */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.allCategories}>Todas las categorías</Text>

        <View style={styles.grid}>
          {categories.map((item) => (
            // <TouchableOpacity
            //   key={item.id}
            //   style={styles.categoryItem}
            //   activeOpacity={0.8}
            //   onPress={() =>
            //     router.push({
            //       pathname: "/categoria/[id]",
            //       params: {
            //         id: item.id,
            //         name: item.title,
            //       },
            //     })
            //   }
            // >
            //   <View
            //     style={[styles.imageContainer, { backgroundColor: item.bg }]}
            //   >
            //     <Image
            //       source={{ uri: item.image }}
            //       style={styles.image}
            //       resizeMode="contain"
            //     />
            //   </View>

            //   <Text style={styles.categoryText}>{item.title}</Text>
            // </TouchableOpacity>
            <CategoryCircle
              title={item.title}
              image={item.image}
              bg={item.bg}
              onPress={() =>
                router.push({
                  pathname: "/categoria/[id]",
                  params: {
                    id: item.id,
                    name: item.title,
                  },
                })
              }
            />
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 18,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },

  cartButton: {
    position: "absolute",
    right: 20,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2E3192",
    alignItems: "center",
    justifyContent: "center",
  },

  cartIcon: {
    fontSize: 18,
    color: "#fff",
  },

  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FACC15",
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#222",
  },

  content: {
    paddingHorizontal: 18,
  },

  allCategories: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2E3192",
    marginBottom: 22,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  categoryItem: {
    width: "31%",
    marginBottom: 28,
    alignItems: "center",
  },

  imageContainer: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  image: {
    width: 58,
    height: 58,
  },

  categoryText: {
    fontSize: 14,
    textAlign: "center",
    color: "#3A2C7B",
    fontWeight: "600",
    lineHeight: 18,
  },
});
