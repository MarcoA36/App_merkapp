// // components/PromotionBanner.tsx

// import {
//   Image,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";

// type Props = {
//   image: string;
//   onPress?: () => void;
// };

// export default function PromotionBanner({
//   image,
//   onPress,
// }: Props) {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       onPress={onPress}
//     >
//       <Image
//         source={{ uri: image }}
//         style={styles.banner}
//       />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   banner: {
//     width: 300,
//     height: 180,
//     borderRadius: 28,
//     marginRight: 15,
//     backgroundColor: "#ddd",
//   },
// });
// components/PromotionBanner.tsx

// import {
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ImageSourcePropType,
// } from "react-native";

// type Props = {
//   image: ImageSourcePropType;
//   onPress?: () => void;
// };

// export default function PromotionBanner({
//   image,
//   onPress,
// }: Props) {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.9}
//       onPress={onPress}
//     >
//       <Image
//         source={image}
//         style={styles.banner}
//       />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   banner: {
//     width: 300,
//     height: 180,
//     borderRadius: 28,
//     marginRight: 15,
//     backgroundColor: "#ddd",
//   },
// });




















// components/PromotionBanner.tsx

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

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
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Image
        source={image}
        style={styles.banner}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: 320,
    height: 240,

    borderRadius: 28,
    marginRight: 15,

    backgroundColor: "#ddd",
  },
});