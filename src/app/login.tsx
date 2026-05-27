import AuthLayout from "@/components/Auth/AuthLayout";
import AuthInput from "@/components/Auth/AuthInput";
import AuthButton from "@/components/Auth/AuthButton";

import { router } from "expo-router";
import { useState } from "react";

import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AuthPhoneInput from "@/components/Auth/AuthPhoneInput";

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
    <AuthLayout>
      <View style={styles.form}>
        <AuthPhoneInput
          placeholder="999 999 999"
          value={phone}
          onChangeText={setPhone}
        />
        <AuthInput
          icon="lock-closed-outline"
          placeholder="Clave (6 dígitos)"
          secureTextEntry
          maxLength={6}
          value={password}
          onChangeText={setPassword}
        />

        <AuthButton title="Ingresar" onPress={handleLogin} />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Olvidé la contraseña</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 18,
    marginTop: 20,
  },

  forgotText: {
    textAlign: "center",

    color: "#2563EB",

    fontSize: 15,

    marginTop: 4,
  },
});
