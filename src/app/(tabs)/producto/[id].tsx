import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState } from "react";

import {
  useLocalSearchParams,
  router,
} from "expo-router";

import { products } from "@/data/products";

import { useCartStore } from "@/store/cartStore";

export default function ProductoDetalle() {
  const { id } = useLocalSearchParams();

  const addToCart = useCartStore(
    (s) => s.addToCart
  );

  const cart = useCartStore((s) => s.items);

  const product = products.find(
    (p) => p.id === id
  );

  const [quantity, setQuantity] =
    useState(1);

  if (!product) return null;

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Text style={styles.back}>
            ←
          </Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Detalle de producto
        </Text>

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

      <ScrollView
        showsVerticalScrollIndicator={
          false
        }
      >
        {/* IMAGEN */}

        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: product.image,
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* INFO */}

        <View style={styles.info}>
          <Text style={styles.name}>
            {product.name}
          </Text>
{/* 
          <Text style={styles.description}>
            {product.description}
          </Text>

          <Text style={styles.priceLabel}>
            Precio por unidad
          </Text>

          <Text style={styles.price}>
            S/{product.price}
          </Text> */}
          <Text style={styles.unitPrice}>
 Precio por unidad S/{product.price}
</Text>

          {/* CANTIDAD */}

          <View style={styles.quantityRow}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() =>
                quantity > 1 &&
                setQuantity(
                  quantity - 1
                )
              }
            >
              <Text
                style={styles.quantityText}
              >
                −
              </Text>
            </TouchableOpacity>

            <Text
              style={styles.quantityValue}
            >
              {quantity}
            </Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() =>
                setQuantity(quantity + 1)
              }
            >
              <Text
                style={styles.quantityText}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>

          {/* SUBTOTAL */}

          <Text style={styles.totalLabel}>
            Subtotal
          </Text>

          <Text style={styles.total}>
            S/{product.price * quantity}
          </Text>

          {/* BOTON */}

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              for (
                let i = 0;
                i < quantity;
                i++
              ) {
                addToCart(product);
              }
            }}
          >
            <Text style={styles.buttonText}>
              Agregar al carrito
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ height: 120 }} /> */}
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

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
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

  imageContainer: {
    height: 320,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  image: {
    width: "85%",
    height: "85%",
  },

  info: {
    paddingHorizontal: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "800",
    color: "#222",
    marginBottom: 12,
  },

 
  priceLabel: {
    fontSize: 14,
    color: "#999",
    marginBottom: 4,
  },


  unitPrice: {
  fontSize: 16,
  color: "#777",
  marginBottom: 20,
},

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 24,
  },

  quantityButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#F5F2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityText: {
    fontSize: 28,
    color: "#4B33CC",
    fontWeight: "400",
  },

  quantityValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  totalLabel: {
    fontSize: 14,
    color: "#999",
    marginBottom: 4,
  },

  total: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
    marginBottom: 24,
  },

  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#2E3192",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});