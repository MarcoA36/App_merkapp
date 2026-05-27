import {
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

type Props = {
  image: string;
  onPress?: () => void;
};

export default function HomeBrandCard({
  image,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.container}
    >
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});