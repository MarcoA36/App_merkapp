import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { useLocalSearchParams, router } from "expo-router";

import { products } from "@/data/products";
import { categories } from "@/data/categories";

import { useMemo } from "react";

import { useCartStore } from "@/store/cartStore";

export default function CategoriaDetalle() {
  const { id } = useLocalSearchParams();

  const addToCart = useCartStore((s) => s.addToCart);
  const cart = useCartStore((s) => s.items);

  const currentCategory = categories.find(
    (c) => c.id === id
  );

  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) => p.categoryId === id
    );
  }, [id]);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Image
            source={{
              uri: currentCategory?.image,
            }}
            style={styles.headerIcon}
          />

          <Text style={styles.headerTitle}>
            {currentCategory?.title}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.cartButton}
        >
          <Text style={styles.cartIcon}>
            🛒
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {cart.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* BLOQUE CATEGORIA */}
      <View
        style={[
          styles.activeCategory,
          {
            backgroundColor:
              currentCategory?.bg ||
              "#F7E81B",
          },
        ]}
      >
        <Image
          source={{
            uri: currentCategory?.image,
          }}
          style={styles.categoryIcon}
        />

        <Text
          style={styles.activeCategoryText}
        >
          {currentCategory?.title}
        </Text>
      </View>

      {/* TITULO */}
      <Text style={styles.sectionTitle}>
        Productos
      </Text>

      {/* PRODUCTOS */}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {/* {filteredProducts.map(
            (product) => (
              <View
                key={product.id}
                style={styles.card}
              >
                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={styles.image}
                  resizeMode="contain"
                />

                <Text
                  numberOfLines={2}
                  style={styles.name}
                >
                  {product.name}
                </Text>

                <Text
                  style={styles.priceLabel}
                >
                  Precio
                </Text>

                <Text style={styles.price}>
                  S/{product.price}
                </Text>

                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() =>
                    addToCart(product)
                  }
                >
                  <Text
                    style={styles.addButtonText}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            )
          )} */}
          {filteredProducts.map((product) => (
  <TouchableOpacity
    key={product.id}
    style={styles.card}
    activeOpacity={0.9}
    onPress={() =>
      router.push({
        pathname: "/producto/[id]",
        params: {
          id: product.id,
        },
      })
    }
  >
    <Image
      source={{
        uri: product.image,
      }}
      style={styles.image}
      resizeMode="contain"
    />

    <Text
      numberOfLines={2}
      style={styles.name}
    >
      {product.name}
    </Text>

    <Text style={styles.priceLabel}>
      Precio
    </Text>

    <Text style={styles.price}>
      S/{product.price}
    </Text>

    <TouchableOpacity
      style={styles.addButton}
      onPress={() =>
        addToCart(product)
      }
    >
      <Text
        style={styles.addButtonText}
      >
        +
      </Text>
    </TouchableOpacity>
  </TouchableOpacity>
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
    paddingTop: 14,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 10,
  },

  back: {
    fontSize: 24,
    color: "#444",
  },

  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  headerIcon: {
    width: 20,
    height: 20,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#555",
  },

  cartButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#2E3192",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  cartIcon: {
    fontSize: 16,
  },

  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FFD600",
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
    color: "#111",
  },

  activeCategory: {
    marginHorizontal: 16,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 18,
  },

  categoryIcon: {
    width: 24,
    height: 24,
  },

  activeCategoryText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  sectionTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    marginHorizontal: 16,
    marginBottom: 18,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#EFEFEF",
  },

  image: {
    width: "100%",
    height: 150,
    marginBottom: 8,
  },

  name: {
    fontSize: 14,
    color: "#555",
    minHeight: 42,
    marginBottom: 12,
  },

  priceLabel: {
    fontSize: 14,
    color: "#999",
  },

  price: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    marginBottom: 14,
  },

  addButton: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5F2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonText: {
    fontSize: 30,
    color: "#4B33CC",
    fontWeight: "300",
    marginTop: -4,
  },
});