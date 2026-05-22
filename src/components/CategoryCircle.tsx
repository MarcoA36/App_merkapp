// components/CategoryCircle.tsx

import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

type Props = {
  title: string;
  image: string;
  bg?: string;
  onPress?: () => void;
};

export default function CategoryCircle({
  title,
  image,
  bg = "#fff",
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <View
        style={[
          styles.circle,
          { backgroundColor: bg },
        ]}
      >
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 95,
  },

  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
    marginBottom: 10,
  },

  image: {
    width: 58,
    height: 58,
  },

  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#3A2C7B",
    fontWeight: "600",
    lineHeight: 18,
  },
});