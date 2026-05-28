// import {
//   TouchableOpacity,
//   Text,
//   StyleSheet,
// } from "react-native";

// type Props = {
//   onPress?: () => void;
// };

// export default function CheckoutButton({
//   onPress,
// }: Props) {
//   return (
//     <TouchableOpacity
//       style={styles.button}
//       activeOpacity={0.9}
//       onPress={onPress}
//     >
//       <Text style={styles.text}>
//         Finalizar compra
//       </Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     position: "absolute",

//     left: 20,
//     right: 20,
//     bottom: 20,

//     height: 58,

//     borderRadius: 18,

//     backgroundColor: "#1E3A8A",

//     alignItems: "center",
//     justifyContent: "center",
//   },

//   text: {
//     color: "#fff",

//     fontSize: 18,
//     fontWeight: "700",
//   },
// });
// components/Cart/CheckoutButton.tsx

import { spacing } from "@/theme/theme";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function CheckoutButton() {
  return (
    <TouchableOpacity
      style={styles.button}
    >
      <Text style={styles.text}>
        Finalizar compra
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {

    height: 58,

    backgroundColor: "#2E3192",

    borderRadius: 18,

    alignItems: "center",

    justifyContent: "center",

    marginTop: spacing.md,
  },

  text: {

    fontSize: 18,

    fontWeight: "700",

    color: "#fff",
  },
});