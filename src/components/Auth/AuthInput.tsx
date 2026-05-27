// components/auth/AuthInput.tsx

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

type Props = TextInputProps & {
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function AuthInput({
  icon,
  secureTextEntry,
  ...props
}: Props) {
  const [focused, setFocused] =
    useState(false);

  const [hidden, setHidden] =
    useState(secureTextEntry);

  return (
    <View
      style={[
        styles.container,
        focused && styles.focused,
      ]}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={22}
          color="#64748B"
        />
      )}

      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor="#94A3B8"
        selectionColor="#2563EB"
        cursorColor="#2563EB"
        underlineColorAndroid="transparent"
        secureTextEntry={hidden}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {secureTextEntry && (
        <TouchableOpacity
          onPress={() =>
            setHidden(!hidden)
          }
        >
          <Ionicons
            name={
              hidden
                ? "eye-off-outline"
                : "eye-outline"
            }
            size={22}
            color="#64748B"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 62,

    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#F8FAFC",

    borderWidth: 1,
    borderColor: "#E2E8F0",

    borderRadius: 18,

    paddingHorizontal: 18,
  },

  focused: {
    borderColor: "#2563EB",
  },

  input: {
    flex: 1,

    marginLeft: 12,

    fontSize: 20,

    color: "#0F172A",
  },
});