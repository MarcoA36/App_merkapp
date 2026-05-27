// components/Auth/AuthPhoneInput.tsx

import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

type Props = TextInputProps & {
  countryCode?: string;
  flag?: string;
};

export default function AuthPhoneInput({
  countryCode = "+51",
  flag = "🇵🇪",
  ...props
}: Props) {
  const [focused, setFocused] =
    useState(false);

  return (
    <View
      style={[
        styles.container,
        focused && styles.focused,
      ]}
    >
      <View style={styles.prefixContainer}>
        <Text style={styles.flag}>
          {flag}
        </Text>

        <Text style={styles.countryCode}>
          {countryCode}
        </Text>
      </View>

      <TextInput
        {...props}
        style={styles.input}
        keyboardType="phone-pad"
        placeholderTextColor="#94A3B8"
        selectionColor="#2563EB"
        cursorColor="#2563EB"
        underlineColorAndroid="transparent"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
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

  prefixContainer: {
    flexDirection: "row",

    alignItems: "center",

    marginRight: 12,
  },

  flag: {
    fontSize: 20,

    marginRight: 6,
  },

  countryCode: {
    fontSize: 20,

    fontWeight: "600",

    color: "#0F172A",
  },

  input: {
    flex: 1,

    fontSize: 22,

    color: "#0F172A",
  },
});