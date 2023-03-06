import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Login({ navigation }: any) {
  return (
    // <ScrollView style={{ flex: 1, justifyContent: "center" }}>

    <View
      style={{
        backgroundColor: "#FEE2E74D",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 44,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/geekcarelogo.png")}
          style={{
            height: 40,
            width: 207,
            justifyContent: "center",
            marginBottom: 26,
          }}
        />
        <View>
          <Text style={styles.headerLine}>Embrace Being Human</Text>
        </View>
        <View>
          <Text style={styles.heading}>Let&apos;s Get Started</Text>
        </View>

        <View style={{ marginVertical: 30, width: "100%" }}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email or Mobile No."
              // value={email}
              // onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              //   value={password}
              //   onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View>
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text
            style={styles.routeToSignup}
            onPress={() => navigation.navigate("SignUp")}
          >
            Don&apos;t have an account? SignUp
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerLine: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#464043",
    marginVertical: 20,
  },
  heading: {
    fontSize: Platform.OS == "android" ? 32 : 30,
    fontWeight: "600",
    textAlign: "center",
    color: "#464043",
    marginVertical: 2,
    marginTop: 24,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    // shadowOpacity: 0.8,
    shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
    elevation: 5, // for android
  },
  forgotPass: {
    fontSize: 14,
    color: "#F54061",
    marginBottom: 30,
    textAlign: "right",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#F54061",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  routeToSignup: {
    fontSize: 14,
    color: "#F54061",
    textAlign: "center",
    fontWeight: "600",
  },
});
