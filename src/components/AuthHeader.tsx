import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { router } from "expo-router";

type Props = {
  title?: string;
};

export default function AuthHeader({
  title = "MERKAPP",
}: Props) {
  return (
    <View style={styles.header}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons
          name="arrow-back"
          size={28}
          color="#1E3A8A"
        />
      </TouchableOpacity>

      <Text style={styles.logo}>
        {title}
      </Text>

      <View style={{ width: 40 }} />

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 50,
  },

  backButton: {
    width: 40,
    height: 40,

    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: 30,
    fontWeight: "800",

    color: "#1E3A8A",
  },
});