// import AuthHeader from "@/components/Auth/AuthHeader";
// import { router } from "expo-router";
// import { useState } from "react";

// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";


// export default function RegistroScreen() {

//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");

//   const [adsAccepted, setAdsAccepted] =
//     useState(false);

//   const [termsAccepted, setTermsAccepted] =
//     useState(false);

//   return (

//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={
//         Platform.OS === "ios"
//           ? "padding"
//           : undefined
//       }
//     >

//       <View style={styles.container}>

//         {/* HEADER */}

//         <AuthHeader />

//         {/* FORM */}

//         <View style={styles.form}>

//           {/* TELÉFONO */}

//           <View style={styles.phoneContainer}>

//             <Text style={styles.flag}>
//               🇵🇪 +51
//             </Text>

//             <TextInput
//               placeholder="000 000 000"
//               keyboardType="numeric"
//               style={styles.phoneInput}
//               placeholderTextColor="#BDBDBD"
//               value={phone}
//               onChangeText={setPhone}
//             />

//           </View>

//           {/* EMAIL */}

//           <TextInput
//             placeholder="Email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             style={styles.emailInput}
//             placeholderTextColor="#BDBDBD"
//             value={email}
//             onChangeText={setEmail}
//           />

//           {/* CHECKBOX 1 */}

//           <TouchableOpacity
//             style={styles.checkRow}
//             activeOpacity={0.8}
//             onPress={() =>
//               setAdsAccepted(!adsAccepted)
//             }
//           >

//             <View
//               style={[
//                 styles.checkbox,
//                 adsAccepted &&
//                   styles.checkboxActive,
//               ]}
//             />

//             <Text style={styles.checkText}>
//               Acepto recibir información
//               publicitaria y ofertas de
//               Merkao
//             </Text>

//           </TouchableOpacity>

//           {/* CHECKBOX 2 */}

//           <TouchableOpacity
//             style={styles.checkRow}
//             activeOpacity={0.8}
//             onPress={() =>
//               setTermsAccepted(
//                 !termsAccepted
//               )
//             }
//           >

//             <View
//               style={[
//                 styles.checkbox,
//                 termsAccepted &&
//                   styles.checkboxActive,
//               ]}
//             />

//             <Text style={styles.checkText}>
//               Al crear una cuenta, estoy de
//               acuerdo con Condiciones de
//               uso y Política de privacidad
//             </Text>

//           </TouchableOpacity>

//           {/* BOTÓN */}

//           <TouchableOpacity
//             style={styles.nextButton}
//             activeOpacity={0.8}
//           >

//             <Text style={styles.nextText}>
//               Siguiente
//             </Text>

//           </TouchableOpacity>

//         </View>

//       </View>

//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,

//     backgroundColor: "#fff",

//     paddingHorizontal: 25,

//     paddingTop: 30,
//   },

//   form: {
//     gap: 24,
//   },

//   phoneContainer: {
//     flexDirection: "row",

//     alignItems: "center",

//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E7EB",

//     paddingBottom: 14,
//   },

//   flag: {
//     fontSize: 22,

//     marginRight: 10,
//   },

//   phoneInput: {
//     flex: 1,

//     fontSize: 24,

//     color: "#000",
//   },

//   emailInput: {
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E7EB",

//     fontSize: 20,

//     paddingBottom: 14,

//     color: "#000",
//   },

//   checkRow: {
//     flexDirection: "row",

//     alignItems: "flex-start",
//   },

//   checkbox: {
//     width: 24,
//     height: 24,

//     borderWidth: 2,
//     borderColor: "#D4A017",

//     borderRadius: 7,

//     marginRight: 14,

//     marginTop: 2,
//   },

//   checkboxActive: {
//     backgroundColor: "#FACC15",
//   },

//   checkText: {
//     flex: 1,

//     fontSize: 15,

//     color: "#4B5563",

//     lineHeight: 22,
//   },

//   nextButton: {
//     marginTop: 12,

//     backgroundColor: "#EEF2FF",

//     paddingVertical: 18,

//     borderRadius: 18,

//     alignItems: "center",
//   },

//   nextText: {
//     fontSize: 22,

//     fontWeight: "700",

//     color: "#1E3A8A",
//   },

// });
import AuthLayout from "@/components/Auth/AuthLayout";
import AuthPhoneInput from "@/components/Auth/AuthPhoneInput";
import AuthInput from "@/components/Auth/AuthInput";
import AuthCheckbox from "@/components/Auth/AuthCheckbox";
import AuthButton from "@/components/Auth/AuthButton";

import { useState } from "react";

import {
  View,
  StyleSheet,
} from "react-native";

export default function RegistroScreen() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [adsAccepted, setAdsAccepted] =
    useState(false);

  const [termsAccepted, setTermsAccepted] =
    useState(false);

  const handleNext = () => {
    // lógica
  };

  return (
    <AuthLayout>
      <View style={styles.form}>
        <AuthPhoneInput
          placeholder="999 999 999"
          value={phone}
          onChangeText={setPhone}
        />

        <AuthInput
          icon="mail-outline"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <AuthCheckbox
          checked={adsAccepted}
          onPress={() =>
            setAdsAccepted(!adsAccepted)
          }
          label="Acepto recibir información publicitaria y ofertas de Merkao"
        />

        <AuthCheckbox
          checked={termsAccepted}
          onPress={() =>
            setTermsAccepted(!termsAccepted)
          }
          label="Al crear una cuenta, estoy de acuerdo con las Condiciones de uso y la Política de privacidad"
        />

        <AuthButton
          title="Siguiente"
          onPress={handleNext}
          disabled={!termsAccepted}
        />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 18,
    marginTop: 20,
  },
});