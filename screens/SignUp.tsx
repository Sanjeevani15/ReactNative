import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import IconFontisto from "react-native-vector-icons/Fontisto";

export default function SignUp({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedRole, setSelectedRole] = useState("member");
  return (
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
          <Text style={styles.headerLine}>Create My Account</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 16,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => setSelectedRole("member")}
          >
            <Icon name="user-circle" size={65} color={selectedRole === "member" ? "#F54061" : "gray"} />
            <Text
              style={[
                styles.tabsText,
                { color: selectedRole === "member" ? "#F54061" : "#7E7E7E" },
              ]}
            >
              Member
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => setSelectedRole("physician")}
          >
            <IconFontisto name="doctor" size={65} color={selectedRole === "physician" ? "#F54061" : "gray"} />
            <Text style={[
                styles.tabsText,
                { color: selectedRole === "physician" ? "#F54061" : "#7E7E7E" },
              ]}>Physician</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 30, width: "100%" }}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              // value={fullName}
              // onChangeText={setFullName}
              keyboardType="default"
              autoCapitalize="none"
            />
          </View>
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
            <View>
              <TextInput
                style={styles.passwordinput}
                placeholder="Create Password"
                //   value={password}
                //   onChangeText={setPassword}
                //   secureTextEntry
                secureTextEntry={!showPassword}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={24}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 10 }}
          >
            <Checkbox
              style={{
                borderColor: "#F54061",
                backgroundColor: "#fff",
                marginRight: 8,
              }}
              value={toggleCheckBox}
              onValueChange={(newValue: any) => setToggleCheckBox(newValue)}
              color={toggleCheckBox ? "#F54061" : undefined}
            />
            <Text style={styles.terms}>
              I accept the{" "}
              <Text
                style={{ textDecorationLine: "underline", fontWeight: "500" }}
              >
                Terms &amp; Conditions
              </Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <Text style={styles.buttonText}>Create My Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text
            style={styles.routeToSignup}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Login
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
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    color: "#464043",
    marginVertical: 2,
    marginTop: 24,
  },
  input: {
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    elevation: 5, // for android
  },
  terms: {
    fontSize: 14,
    color: "#F54061",
    marginBottom: 30,
    textAlign: "left",
    fontWeight: "400",
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
  passwordinput: {
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    elevation: 5, // for android
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    bottom: 28,
  },
  icon: {
    width: 12,
    height: 12,
  },
  tabs: {
    height: 120,
    flexBasis: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 20,
    borderColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  tabsText: {
    fontSize: 15,
    marginTop: 4,
    fontWeight: "600",
  },
});
