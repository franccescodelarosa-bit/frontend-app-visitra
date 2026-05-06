import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [screen, setScreen] = useState<"home" | "login">("home");

  if (screen === "login") {
    return <LoginScreen onBack={() => setScreen("home")} />;
  }

  return <HomeScreen onContinue={() => setScreen("login")} />;
}

function HomeScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900",
      }}
      style={styles.homeContainer}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <SafeAreaView style={styles.homeContent}>
        <Text style={styles.logo}>VISITRA</Text>

        <View style={styles.homeBottom}>
          <Text style={styles.homeTitle}>Sistema de Visitas</Text>

          <Text style={styles.homeDescription}>
            Registra visitas, propietarios, entradas y salidas para condominios.
          </Text>

          <TouchableOpacity style={styles.primaryButton} onPress={onContinue}>
            <Text style={styles.primaryButtonText}>INICIAR</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

function LoginScreen({ onBack }: { onBack: () => void }) {
  const handleSocialLogin = (provider: "Google" | "Facebook") => {
    console.log(`Ingresando con ${provider}`);
    Alert.alert("Login social", `Ingresando con ${provider}`);
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color="#FFC400" />
      </TouchableOpacity>

      <View style={styles.loginCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={42} color="#000" />
        </View>

        <Text style={styles.loginTitle}>
          Ingresa con tus credenciales
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="person-outline"
            size={20}
            color="#FFC400"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Usuario"
            placeholderTextColor="#777"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#FFC400"
            style={styles.inputIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#777"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <MaterialCommunityIcons
            name="shield-lock"
            size={22}
            color="#000"
          />

          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableOpacity>

        <Text style={styles.socialTitle}>O ingresa con</Text>

        <TouchableOpacity
          style={[styles.socialButton, styles.googleButton]}
          onPress={() => handleSocialLogin("Google")}
        >
          <AntDesign name="google" size={20} color="#DB4437" />

          <Text style={styles.googleText}>
            Continuar con Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.socialButton, styles.facebookButton]}
          onPress={() => handleSocialLogin("Facebook")}
        >
          <FontAwesome name="facebook" size={22} color="#FFF" />

          <Text style={styles.facebookText}>
            Continuar con Facebook
          </Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.helpText}>
          ¿Perdiste tus accesos?
        </Text>

        <Text style={styles.supportText}>
          comunícate con Soporte
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.72)",
  },

  homeContent: {
    flex: 1,
    justifyContent: "space-between",
    padding: 28,
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "900",
    letterSpacing: 5,
    marginTop: 35,
    textAlign: "center",
  },

  homeBottom: {
    margin: 35,

  },

  homeTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },

  homeDescription: {
    color: "#E5E7EB",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 14,
    marginBottom: 26,
  },

  primaryButton: {
    backgroundColor: "#FFC400",
    height: 58,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#FFC400",
    shadowOpacity: 0.45,
    shadowRadius: 12,
  },

  primaryButtonText: {
    color: "#0A0A0A",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },

  loginContainer: {
    flex: 1,
    display:"flex",
    justifyContent:"center",
    backgroundColor: "#050505",
  },

  backButton: {
    position: "absolute",
    top: 55,
    left: 20,
    zIndex: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  backButtonText: {
    color: "#FFC400",
    fontSize: 14,
    fontWeight: "800",
  },

  loginHeader: {
    height: 260,
    backgroundColor: "#0A0A0A",
    alignItems: "center",
    paddingTop: 45,
    borderBottomWidth: 2,
    borderBottomColor: "#FFC400",
  },

  loginLogo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
    letterSpacing: 5,
  },

  loginCard: {
    backgroundColor: "#111111",
    marginHorizontal: 26,
    paddingHorizontal: 22,
    paddingTop: 78,
    paddingBottom: 34,
    borderRadius: 18,
    alignItems: "center",
    elevation: 8,
    borderWidth: 1,
    borderColor: "rgba(255,196,0,0.35)",
  },

  avatar: {
    position: "absolute",
    top: -45,
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#FFC400",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  avatarIcon: {
    fontSize: 42,
  },

  loginTitle: {
    color: "#D1D5DB",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    height: 48,
    color: "#FFFFFF",
  },

  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFC400",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    flexDirection: "row",
    gap: 10,
  },

  loginButtonText: {
    color: "#0A0A0A",
    fontSize: 16,
    fontWeight: "900",
  },

  socialTitle: {
    color: "#A1A1AA",
    fontSize: 12,
    marginVertical: 18,
  },

  socialButton: {
    width: "100%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
  },

  googleButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  },

  facebookButton: {
    backgroundColor: "#1877F2",
    borderColor: "#1877F2",
  },

  socialButtonText: {
    color: "#0A0A0A",
    fontSize: 14,
    fontWeight: "800",
  },

  divider: {
    width: "86%",
    height: 1,
    backgroundColor: "rgba(255,196,0,0.25)",
    marginVertical: 22,
  },

  helpText: {
    color: "#D1D5DB",
    fontSize: 12,
  },

  supportText: {
    color: "#FFC400",
    fontSize: 12,
    marginTop: 3,
    fontWeight: "700",
  },
  inputContainer: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#1A1A1A",
  borderWidth: 1,
  borderColor: "#2D2D2D",
  borderRadius: 10,
  marginBottom: 12,
  paddingHorizontal: 12,
},

inputIcon: {
  marginRight: 8,
},

googleText: {
  marginLeft: 10,
  color: "#111",
  fontSize: 14,
  fontWeight: "800",
},

facebookText: {
  marginLeft: 10,
  color: "#FFF",
  fontSize: 14,
  fontWeight: "800",
},
});

