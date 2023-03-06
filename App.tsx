import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashBoardScreen from "./screens/DashBoardScreen";
import SearchScreen from "./screens/SearchScreen";
import DoctorList from "./screens/DoctorList";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import PhysicianProfile from "./screens/PhysicianProfile";
import AppointmentForDetails from "./screens/AppointmentForDetails";
import CareAgenda from "./screens/CareAgenda";
import AppointmentSummary from "./screens/AppointmentSummary";

// import IonIcon from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
export default function App() {
  console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={{flex: 1}}> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashBoardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchResult"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DoctorList"
            component={DoctorList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PhysicianProfile"
            component={PhysicianProfile}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="AppointmentForDetails"
            component={AppointmentForDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CareAgenda"
            component={CareAgenda}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppointmentSummary"
            component={AppointmentSummary}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

//rnss
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEE2E74D",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? 28 : 4
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 4,
  },
});
