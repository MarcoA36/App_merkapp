import { router } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function RegistroScreen() {
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

      <View style={styles.phoneContainer}>
        <Text style={styles.flag}>🇵🇪 +51</Text>

        <TextInput
          placeholder="000 000 000"
          keyboardType="phone-pad"
          style={styles.phoneInput}
          placeholderTextColor="#BDBDBD"
        />
      </View>

      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.emailInput}
        placeholderTextColor="#BDBDBD"
      />

      <TouchableOpacity style={styles.checkRow}>
        <View style={styles.checkbox} />

        <Text style={styles.checkText}>
          Acepto recibir información publicitaria y ofertas de Merkao
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.checkRow}>
        <View style={styles.checkbox} />

        <Text style={styles.checkText}>
          Al crear una cuenta, estoy de acuerdo con Condiciones de uso y
          Política de privacidad
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Siguiente</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 20,
  },

header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 50,
},

backButton: {
  width: 40,
},

logo: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#1E3A8A',
},

backText: {
  fontSize: 28,
  color: '#1E3A8A',
},
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 12,
    marginBottom: 30,
  },

  flag: {
    fontSize: 22,
    marginRight: 10,
  },

  phoneInput: {
    flex: 1,
    fontSize: 24,
    color: '#000',
  },

  emailInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    fontSize: 18,
    paddingBottom: 12,
    marginBottom: 35,
    color: '#000',
  },

  checkRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#D4A017',
    borderRadius: 6,
    marginRight: 12,
    marginTop: 2,
  },

  checkText: {
    flex: 1,
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },

  nextButton: {
    marginTop: 20,
    backgroundColor: '#EEF2FF',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  nextText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E3A8A',
  },
  
});