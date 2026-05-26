// components/headers/SectionHeader.tsx

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import BackButton from "./BackButton";
import CartButton from "./CartButton";

type Props = {
  title: string;
};

export default function SectionHeader({
  title,
}: Props) {
  return (
    <View style={styles.header}>

      <BackButton />

      <Text style={styles.title}>
        {title}
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

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
});