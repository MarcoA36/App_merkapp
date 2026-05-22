// import { router } from "expo-router";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";

// export default function LoginScreen() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.back()}
//         >
//           <Text style={styles.backText}>←</Text>
//         </TouchableOpacity>

//         <Text style={styles.logo}>LOGO</Text>

//         <View style={{ width: 40 }} />
//       </View>

//       <View style={styles.form}>
//         <View style={styles.phoneContainer}>
//           <Text style={styles.flag}>🇵🇪 +51</Text>

//           <TextInput
//             placeholder="000 000 000"
//             keyboardType="phone-pad"
//             style={styles.phoneInput}
//             placeholderTextColor="#BDBDBD"
//           />
//         </View>

//         <TextInput
//           placeholder="Clave (6 dígitos)"
//           keyboardType="number-pad"
//           secureTextEntry
//           maxLength={6}
//           style={styles.passwordInput}
//           placeholderTextColor="#BDBDBD"
//         />

//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginText}>Ingresar</Text>
//         </TouchableOpacity>

//         <TouchableOpacity>
//           <Text style={styles.forgotText}>Olvidé la contraseña</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
import { router } from "expo-router";
import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function LoginScreen() {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (phone === "123456" && password === "123456") {
   router.replace("/(tabs)" as any);
    } else {
      Alert.alert("Error", "Datos incorrectos");
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>LOGO</Text>

        <View style={{ width: 40 }} />

      </View>

      <View style={styles.form}>

        <View style={styles.phoneContainer}>

          <Text style={styles.flag}>🇵🇪 +51</Text>

          <TextInput
            placeholder="000 000 000"
            keyboardType="phone-pad"
            style={styles.phoneInput}
            placeholderTextColor="#BDBDBD"
            value={phone}
            onChangeText={setPhone}
          />

        </View>

        <TextInput
          placeholder="Clave (6 dígitos)"
          keyboardType="number-pad"
          secureTextEntry
          maxLength={6}
          style={styles.passwordInput}
          placeholderTextColor="#BDBDBD"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>
            Olvidé la contraseña
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 60,
  },

  backButton: {
    width: 40,
  },

  backText: {
    fontSize: 28,
    color: "#1E3A8A",
  },

  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E3A8A",
  },

  form: {
    gap: 28,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    paddingBottom: 12,
    marginBottom: 30,
  },

  flag: {
    fontSize: 22,
    marginRight: 10,
  },

  phoneInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 24,
    color: "#000",
  },

  passwordInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    fontSize: 20,
    paddingBottom: 12,
     paddingHorizontal: 10,
    color: "#000",
  },

  loginButton: {
    backgroundColor: "#EEF2FF",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E3A8A",
  },

  forgotText: {
    textAlign: "center",
    color: "#1E3A8A",
    fontSize: 16,
    marginTop: 5,
  },
});
