// components/AppHeader.tsx

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

type Props = {
  title?: string;
  showBack?: boolean;
};

export default function AppHeader({
  title = "MERKAPP",
  showBack = false,
}: Props) {
  return (
    <View style={styles.header}>

      <TouchableOpacity
        onPress={() => {
          if (showBack) {
            router.back();
          }
        }}
      >
        <Text style={styles.menu}>
          {showBack ? "←" : "☰"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.logo}>
        {title}
      </Text>

      <TouchableOpacity style={styles.cartButton}>
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
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 20,
   
    paddingBottom: 10,

    backgroundColor: "#F7F8FA",

    zIndex: 10,
  },

  menu: {
    fontSize: 28,
    color: "#111",
    width: 32,
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
});