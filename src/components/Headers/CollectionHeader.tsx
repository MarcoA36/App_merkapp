// components/headers/CollectionHeader.tsx

import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import BackButton from "./BackButton";
import CartButton from "./CartButton";

type Props = {
  title: string;
  image?: string;
};

export default function CollectionHeader({
  title,
  image,
}: Props) {
  return (
    <View style={styles.header}>

      <BackButton />

      <View style={styles.center}>

        {image && (
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
        )}

        <Text style={styles.title}>
          {title}
        </Text>

      </View>

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

  center: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  image: {
    width: 24,
    height: 24,
    borderRadius: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
});