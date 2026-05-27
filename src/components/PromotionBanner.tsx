
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  image: ImageSourcePropType;
  onPress?: () => void;
};

export default function PromotionBanner({
  image,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.card}>
        <Image
          source={image}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },

  card: {
    borderRadius: 18,
    overflow: "hidden",

    backgroundColor: "#FFF",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  banner: {
    width: width - 48,
    height: 260,

    backgroundColor: "#E5E5E5",
  },
});