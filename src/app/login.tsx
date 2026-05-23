import AuthHeader from "@/components/AuthHeader";
import { router } from "expo-router";
import { useState } from "react";

import {
  View,
  Text,
 StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";


export default function LoginScreen() {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (
      phone === "123456" &&
      password === "123456"
    ) {

      router.replace("/(tabs)" as any);

    } else {

      Alert.alert(
        "Error",
        "Datos incorrectos"
      );

    }
  };

  return (

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
    >

      <View style={styles.container}>

        {/* HEADER */}

        <AuthHeader />

        {/* FORM */}

        <View style={styles.form}>

          {/* TELÉFONO */}

          <View style={styles.phoneContainer}>

            <Text style={styles.flag}>
              🇵🇪 +51
            </Text>

            <TextInput
              placeholder="000 000 000"
              keyboardType="numeric"
              style={styles.phoneInput}
              placeholderTextColor="#BDBDBD"
              value={phone}
              onChangeText={setPhone}
            />

          </View>

          {/* PASSWORD */}

          <TextInput
            placeholder="Clave (6 dígitos)"
           keyboardType="default"
            secureTextEntry
            maxLength={6}
            style={styles.passwordInput}
            placeholderTextColor="#BDBDBD"
            value={password}
            onChangeText={setPassword}
          />

          {/* BOTÓN */}

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >

            <Text style={styles.loginText}>
              Ingresar
            </Text>

          </TouchableOpacity>

          {/* OLVIDÉ */}

          <TouchableOpacity>

            <Text style={styles.forgotText}>
              Olvidé la contraseña
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

    backgroundColor: "#fff",

    paddingHorizontal: 25,

    paddingTop: 30,
  },

  form: {
    gap: 28,
  },

  phoneContainer: {
    flexDirection: "row",

    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",

    paddingBottom: 14,

    marginBottom: 10,
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

    paddingBottom: 14,

    paddingHorizontal: 10,

    color: "#000",
  },

  loginButton: {
    backgroundColor: "#EEF2FF",

    paddingVertical: 18,

    borderRadius: 18,

    alignItems: "center",

    marginTop: 14,
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