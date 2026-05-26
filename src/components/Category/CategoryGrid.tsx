
import { View, StyleSheet } from "react-native";
import CategoryCircle from "./CategoryCircle";

import { layout } from "@/theme/theme";

type Props = {
  categories: any[];
  onPress: (category: any) => void;
};

export default function CategoryGrid({ categories, onPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {categories.map((category) => (
          <View key={category.id} style={styles.item}>
            <CategoryCircle
              title={category.title}
              image={category.image}
              bg={category.bg}
              onPress={() => onPress(category)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.screenPadding,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start", 
  },

  item: {
    marginHorizontal: layout.gridGap / 2,
    marginBottom: layout.gridGap,
  },
});