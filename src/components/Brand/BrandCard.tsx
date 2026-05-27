// import {
//   TouchableOpacity,
//   View,
//   Text,
//   Image,
//   StyleSheet,
// } from "react-native";

// type Props = {
//   name: string;
//   image: string;
//   onPress?: () => void;
// };

// export default function BrandCard({
//   name,
//   image,
//   onPress,
// }: Props) {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.85}
//       style={styles.container}
//       onPress={onPress}
//     >
//       <View style={styles.logoBox}>
//         <Image
//           source={{ uri: image }}
//           style={styles.image}
//           resizeMode="contain"
//         />
//       </View>

//       <Text
//         numberOfLines={2}
//         style={styles.text}
//       >
//         {name}
//       </Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 100,
//     marginBottom: 28,
//     alignItems: "center",
//   },

//   logoBox: {
//     width: 92,
//     height: 92,
//     borderRadius: 18,
//     backgroundColor: "#fff",

//     alignItems: "center",
//     justifyContent: "center",

//     borderWidth: 1,
//     borderColor: "#F1F1F1",

//     marginBottom: 10,
//   },

//   image: {
//     width: 64,
//     height: 64,
//   },

//   text: {
//     fontSize: 14,
//     color: "#222",
//     fontWeight: "500",
//     textAlign: "center",
//   },
// });






















import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

type Props = {
  name: string;
  image: string;
  onPress?: () => void;
  showName?: boolean;
};

export default function BrandCard({
  name,
  image,
  onPress,
  showName = true,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.container,
        !showName && styles.compactContainer,
      ]}
      onPress={onPress}
    >
      <View style={styles.logoBox}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {showName && (
        <Text
          numberOfLines={2}
          style={styles.text}
        >
          {name}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    marginBottom: 28,
    alignItems: "center",
  },

  compactContainer: {
    width: 92,
    marginBottom: 0,
  },

  logoBox: {
    width: 92,
    height: 92,

    borderRadius: 18,

    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: "#F1F1F1",
  },

  image: {
    width: 64,
    height: 64,
  },

  text: {
    marginTop: 10,

    fontSize: 14,

    color: "#222",

    fontWeight: "500",

    textAlign: "center",
  },
});