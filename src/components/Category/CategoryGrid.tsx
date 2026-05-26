import { View, StyleSheet } from "react-native";
import CategoryCircle from "./CategoryCircle";

type Props = {
  categories: any[];
  onPress: (category: any) => void;
};

export default function CategoryGrid({
  categories,
  onPress,
}: Props) {
  return (
    <View style={styles.grid}>
      {categories.map((category) => (
        <CategoryCircle
          key={category.id}
          title={category.title}
          image={category.image}
          bg={category.bg}
          onPress={() =>
            onPress(category)
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});