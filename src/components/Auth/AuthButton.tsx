// components/auth/AuthButton.tsx

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

type Props = {
  title: string;

  onPress: () => void;

  disabled?: boolean;
};

export default function AuthButton({
  title,
  onPress,
  disabled,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        disabled &&
          styles.buttonDisabled,
      ]}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,

    backgroundColor: "#2563EB",

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  text: {
    color: "#FFF",

    fontSize: 18,

    fontWeight: "700",
  },
});