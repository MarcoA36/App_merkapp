import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  title: string;
  image: string;
  bg: string;
};

export default function ActiveCategoryCard({ title, image, bg }: Props) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bg,
        },
      ]}
    >
      <Image source={{ uri: image }} style={styles.icon} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderRadius: 16, // Ligeramente más redondeado
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
  },
  icon: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2E3A59", // Tono azul oscuro/morado similar al de la imagen
  },
});