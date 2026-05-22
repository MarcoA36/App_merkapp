// app/categoria/[id].jsx

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { useLocalSearchParams, router } from "expo-router";

const tabs = [
  "Alimento Perros",
  "Jabones",
  "Desodorantes",
];

const products = [
  {
    id: 1,
    name: "Alimento para Gatos RICOCAT Adultos",
    price: "79.40",
    image:
      "https://plazavea.vteximg.com.br/arquivos/ids/27816069-1000-1000/20309688.jpg",
    weight: "9kg",
  },

  {
    id: 2,
    name: "Comida para Perros RICOCAN Cachorros",
    price: "105.10",
    image:
      "https://plazavea.vteximg.com.br/arquivos/ids/27816068-1000-1000/20309689.jpg",
    weight: "15kg",
  },

  {
    id: 3,
    name: "Comida para Perros Adultos",
    price: "84.90",
    image:
      "https://plazavea.vteximg.com.br/arquivos/ids/27816068-1000-1000/20309689.jpg",
    weight: "10kg",
  },

  {
    id: 4,
    name: "Thor Premium Adultos",
    price: "120.50",
    image:
      "https://plazavea.vteximg.com.br/arquivos/ids/27816224-1000-1000/20309757.jpg",
    weight: "25kg",
  },
];

export default function CategoriaDetalle() {
  const { id, name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          🐶 {name || "Mascotas"}
        </Text>

        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartIcon}>🛒</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>11</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* TABS */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity key={index}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* CATEGORIA ACTIVA */}

      <View style={styles.activeCategory}>
        <Text style={styles.activeCategoryText}>
          🐶 {name || "Mascotas"}
        </Text>
      </View>

      {/* TITULO */}

      <Text style={styles.sectionTitle}>
        Alimento Perros
      </Text>

      {/* PRODUCTOS */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productsContainer}
      >
        <View style={styles.grid}>
          {products.map((product) => (
            <View
              key={product.id}
              style={styles.card}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.image}
                  resizeMode="contain"
                />

                <View style={styles.weightBadge}>
                  <Text style={styles.weightText}>
                    {product.weight}
                  </Text>
                </View>
              </View>

              <Text
                numberOfLines={2}
                style={styles.productName}
              >
                {product.name}
              </Text>

              <Text style={styles.priceLabel}>
                Precio
              </Text>

              <Text style={styles.price}>
                S/{product.price}
              </Text>

              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
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
    justifyContent: "space-between",
    paddingHorizontal: 18,
    marginBottom: 14,
  },

  back: {
    fontSize: 28,
    color: "#555",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#444",
  },

  cartButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#2E3192",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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

  tabsContainer: {
    paddingHorizontal: 18,
    paddingBottom: 14,
    gap: 25,
  },

  tabText: {
    fontSize: 15,
    color: "#666",
    fontWeight: "500",
  },

  activeCategory: {
    backgroundColor: "#F5E61B",
    marginHorizontal: 18,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 18,
  },

  activeCategoryText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginHorizontal: 18,
    marginBottom: 18,
  },

  productsContainer: {
    paddingHorizontal: 14,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  imageContainer: {
    height: 160,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: 10,
  },

  image: {
    width: 110,
    height: 140,
  },

  weightBadge: {
    position: "absolute",
    right: 0,
    top: 10,
    backgroundColor: "#FF7A00",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  weightText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 11,
  },

  productName: {
    fontSize: 14,
    color: "#444",
    minHeight: 42,
    marginBottom: 10,
  },

  priceLabel: {
    color: "#888",
    fontSize: 14,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginTop: 2,
    marginBottom: 12,
  },

  addButton: {
    height: 42,
    backgroundColor: "#F5F2FF",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: 28,
    color: "#4B33CC",
    marginTop: -2,
  },
});