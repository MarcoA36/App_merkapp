// components/headers/HomeHeader.tsx

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import CartButton from "./CartButton";

export default function HomeHeader() {
  return (
    <View style={styles.header}>

      <TouchableOpacity>
        <Text style={styles.menu}>
          ☰
        </Text>
      </TouchableOpacity>

      <Text style={styles.logo}>
        
      </Text>

      <CartButton />

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 16,
    marginBottom: 10,
  },

  menu: {
    fontSize: 26,
    color: "#333",
    width: 40,
  },

  logo: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1E3A8A",
  },
});