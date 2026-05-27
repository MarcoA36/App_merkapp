import { TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

export default function BackButton() {
  return (
    <TouchableOpacity onPress={() => router.back()} style={styles.button}>
      <ArrowLeft size={24} color="#333" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});