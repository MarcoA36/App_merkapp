// components/auth/AuthCheckbox.tsx

import { Ionicons } from "@expo/vector-icons";

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  checked: boolean;

  onPress: () => void;

  label: string;
};

export default function AuthCheckbox({
  checked,
  onPress,
  label,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.row}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View
        style={[
          styles.checkbox,
          checked &&
            styles.checkboxActive,
        ]}
      >
        {checked && (
          <Ionicons
            name="checkmark"
            size={16}
            color="#FFF"
          />
        )}
      </View>

      <Text style={styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",

    alignItems: "flex-start",
  },

  checkbox: {
    width: 24,
    height: 24,

    borderRadius: 8,

    borderWidth: 2,
    borderColor: "#2563EB",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 12,

    marginTop: 2,
  },

  checkboxActive: {
    backgroundColor: "#2563EB",
  },

  label: {
    flex: 1,

    color: "#475569",

    fontSize: 15,

    lineHeight: 22,
  },
});