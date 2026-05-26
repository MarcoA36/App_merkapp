// components/headers/BackButton.tsx

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

export default function BackButton() {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={styles.button}
    >
      <Text style={styles.icon}>
        ←
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
  },

  icon: {
    fontSize: 26,
    color: "#333",
  },
});