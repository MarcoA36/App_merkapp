// import {
//   View,
//   Image,
//   StyleSheet,
// } from "react-native";

// type Props = {
//   image: string;
// };

// export default function ProductImage({
//   image,
// }: Props) {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: image }}
//         style={styles.image}
//         resizeMode="contain"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 320,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },

//   image: {
//     width: "85%",
//     height: "85%",
//   },
// });
import { View, Image, StyleSheet, ViewStyle } from "react-native";

type Props = {
  image: string;
  containerStyle?: ViewStyle; // 🌟 NUEVO: Propiedad opcional para pasar estilos externos
};

export default function ProductImage({ image, containerStyle }: Props) {
  return (
    // Combinamos el estilo base con el que venga de afuera
    <View style={[styles.container, containerStyle]}>
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
    height: 320, // Alto por defecto para la vista normal
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: "85%",
    height: "85%",
  },
});