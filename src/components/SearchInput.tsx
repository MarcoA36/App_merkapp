import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, layout } from "@/theme/theme";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function SearchInput({ value, onChangeText, placeholder = "Buscar..." }: Props) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons
        name="search-outline"
        size={20}
        color="#777"
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        underlineColorAndroid="transparent"
        selectionColor="#2E3192"
        autoCorrect={false} // Evita autocorreciones molestas al buscar productos/marcas
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 54,
    backgroundColor: "#F8F8F8",
    borderRadius: 16,
    marginHorizontal: layout.screenPadding,
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  input: {
    flex: 1,
    height: "100%",
    marginLeft: spacing.sm,
    fontSize: 16,
    color: colors.text,
  },
});