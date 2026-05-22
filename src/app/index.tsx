import { router } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>Logo</Text>

      <Image
        source={require('../../assets/images/sda.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>
        El mejor surtido para tu negocio en un solo lugar
      </Text>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => router.push('/registro' as any)}
      >
        <Text style={styles.registerText}>Regístrate</Text>
      </TouchableOpacity>

      <Text style={styles.description}>
        Si es tu primera compra en esta app.
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push('/login' as any)}
      >
        <Text style={styles.loginText}>Inicia sesión</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Con tus credenciales de Agora o de la nueva app Merkao
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 30,
  },

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 30,
  },

  image: {
    width: 360,
    height: 360,
    marginBottom: 30,
    borderRadius:10
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 38,
  },

  registerButton: {
    width: '100%',
    backgroundColor: '#FACC15',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 15,
  },

  registerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E3A8A',
  },

  description: {
    color: '#999',
    fontSize: 16,
    marginBottom: 25,
  },

  loginButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#1E3A8A',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  loginText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E3A8A',
  },

  footerText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 25,
    fontSize: 16,
    lineHeight: 24,
  },
});