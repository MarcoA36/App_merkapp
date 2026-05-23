import { router } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      {/* TOP */}

      <View style={styles.top}>

        <Text style={styles.logo}>
          MERKAPP
        </Text>

        <Image
          source={require("../../assets/images/sda.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          El mejor surtido para tu negocio en un solo lugar
        </Text>

      </View>

      {/* BOTTOM */}

      <View style={styles.bottom}>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>
            router.push("/registro" as any)
          }
        >
          <Text style={styles.registerText}>
            Regístrate
          </Text>
        </TouchableOpacity>

        <Text style={styles.description}>
          Si es tu primera compra en esta app.
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() =>
            router.push("/login" as any)
          }
        >
          <Text style={styles.loginText}>
            Inicia sesión
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Con tus credenciales de Agora o de la nueva app Merkao
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",

    paddingHorizontal: 24,

    paddingTop: 40,
    paddingBottom: 30,

    justifyContent: "space-between",
  },

  top: {
    alignItems: "center",
  },

  bottom: {},

  logo: {
    fontSize: 32,
    fontWeight: "800",

    color: "#1E3A8A",

    marginBottom: 10,
  },

  image: {
    width: 260,
    height: 260,

    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",

    color: "#1E3A8A",

    textAlign: "center",

    lineHeight: 34,
  },

  registerButton: {
    width: "100%",

    backgroundColor: "#FACC15",

    paddingVertical: 18,

    borderRadius: 18,

    alignItems: "center",

    marginBottom: 14,
  },

  registerText: {
    fontSize: 20,
    fontWeight: "700",

    color: "#1E3A8A",
  },

  description: {
    color: "#777",

    fontSize: 15,

    textAlign: "center",

    marginBottom: 20,
  },

  loginButton: {
    width: "100%",

    borderWidth: 2,
    borderColor: "#1E3A8A",

    paddingVertical: 18,

    borderRadius: 18,

    alignItems: "center",
  },

  loginText: {
    fontSize: 20,
    fontWeight: "700",

    color: "#1E3A8A",
  },

  footerText: {
    textAlign: "center",

    color: "#888",

    marginTop: 22,

    fontSize: 14,

    lineHeight: 20,

    paddingHorizontal: 10,
  },
});