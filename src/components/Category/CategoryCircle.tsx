import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { colors, typography, spacing } from "@/theme/theme";

type Props = {
  title: string;
  image: string;
  bg?: string;
  onPress?: () => void;
};

export default function CategoryCircle({
  title,
  image,
  bg = "#FFF9E6",
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <View style={[styles.circle, { backgroundColor: bg }]}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text} numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 90,
  },
  circle: {
    width: 86,
    height: 86,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: spacing.sm,
  },
  image: {
    width: 54,
    height: 54,
  },
  text: {
    ...typography.small,
    textAlign: "center",
    color: colors.primary,
    fontWeight: "600",
    lineHeight: 16,
  },
});