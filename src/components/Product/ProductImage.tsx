import {
  View,
  Image,
  StyleSheet,
} from "react-native";

type Props = {
  image: string;
};

export default function ProductImage({
  image,
}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 320,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  image: {
    width: "85%",
    height: "85%",
  },
});