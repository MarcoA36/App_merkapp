// components/layout/Screen.tsx

import {
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";

import {
  colors,
  spacing,
  layout,
} from "@/theme/theme";

type Props = {
  children: React.ReactNode;

  backgroundColor?: string;

  style?: ViewStyle;
};

export default function Screen({
  children,
  backgroundColor =
    colors.background,

  style,
}: Props) {
  return (
    <View
      style={[
        styles.container,

        {
          backgroundColor,
        },

        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: spacing.md,
  },
});