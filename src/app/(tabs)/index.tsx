import CategoryCircle from "@/components/CategoryCircle";
import BrandCard from "@/components/BrandCard";
import PromotionBanner from "@/components/PromotionBanner";

import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { promotions } from "@/data/promotions";

import { router } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>
          MERKAPP
        </Text>

        <TouchableOpacity
          style={styles.cartButton}
        >
          <Text style={styles.cartIcon}>
            🛒
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              2
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* PEDIDO */}

      <View style={styles.orderCard}>
        <View>
          <Text style={styles.orderSmall}>
            Tienes 1 pedido
          </Text>

          <Text style={styles.orderTitle}>
            Entrega Jueves 26/02
          </Text>

          <Text style={styles.orderSmall}>
            7 a.m. - 7 p.m.
          </Text>
        </View>

        <Text style={styles.orderArrow}>
          →
        </Text>
      </View>

      {/* PROMOCIONES */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.promotionsContainer
        }
      >
        {promotions.map((promo) => (
          <PromotionBanner
            key={promo.id}
            image={promo.image}
          />
        ))}
      </ScrollView>

      {/* MARCAS */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Marcas
        </Text>

        <TouchableOpacity
          onPress={() =>
            router.push("/marcas")
          }
        >
          <Text style={styles.seeMore}>
            Ver más
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.horizontalContent
        }
      >
        {brands
          .slice(0, 6)
          .map((brand) => (
            <BrandCard
              key={brand.id}
              name={brand.name}
            />
          ))}
      </ScrollView>

      {/* CATEGORÍAS */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Categorías
        </Text>

        <TouchableOpacity
          onPress={() =>
            router.push("/categorias")
          }
        >
          <Text style={styles.seeMore}>
            Ver más
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.horizontalContent
        }
      >
        {categories
          .slice(0, 6)
          .map((item) => (
            <CategoryCircle
              key={item.id}
              title={item.title}
              image={item.image}
              bg={item.bg}
              onPress={() =>
                router.push({
                  pathname:
                    "/categoria/[id]",

                  params: {
                    id: item.id,
                    name: item.title,
                  },
                })
              }
            />
          ))}
      </ScrollView>

      {/* <View style={{ height: 120 }} /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  menu: {
    fontSize: 28,
    color: "#111",
  },

  logo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1E3A8A",
    letterSpacing: 1,
  },

  cartButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",

    position: "relative",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  cartIcon: {
    fontSize: 20,
  },

  badge: {
    position: "absolute",
    top: -2,
    right: -2,

    backgroundColor: "#FACC15",

    minWidth: 20,
    height: 20,

    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 5,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#1E3A8A",
  },

  orderCard: {
    backgroundColor: "#fff",

    marginHorizontal: 20,

    borderRadius: 22,

    padding: 18,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 24,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  orderSmall: {
    fontSize: 13,
    color: "#666",
  },

  orderTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginVertical: 4,
  },

  orderArrow: {
    fontSize: 24,
    color: "#1E3A8A",
  },

  promotionsContainer: {
    paddingLeft: 20,
    paddingRight: 5,
    marginBottom: 35,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,

    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
  },

  seeMore: {
    fontSize: 15,
    color: "#1E3A8A",
    fontWeight: "700",
  },

  horizontalContent: {
    paddingLeft: 20,
    paddingRight: 5,
    marginBottom: 35,
  },
});