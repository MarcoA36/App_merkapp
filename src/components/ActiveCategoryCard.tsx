import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

type Props = {
  title: string;
  image: string;
  bg: string;
};

export default function ActiveCategoryCard({
  title,
  image,
  bg,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bg,
        },
      ]}
    >
      <Image
        source={{ uri: image }}
        style={styles.icon}
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 18,
  },

  icon: {
    width: 24,
    height: 24,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
});