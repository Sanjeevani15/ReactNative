import React from "react";
import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const dashboard = [
  { id: 1, title: "My Profile", icon: "user-circle" },
  { id: 2, title: "Health Status", icon: "files-o" },
  { id: 3, title: "Inbox", icon: "inbox" },
  { id: 4, title: "Appointments", icon: "calendar-check-o" },
  { id: 5, title: "Payment", icon: "credit-card" },
  { id: 6, title: "Support", icon: "info" },
];
const session = { name: "Linda" };

export default function DashBoardScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ backgroundColor: "#FEE2E74D", flex: 1}}>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: 16,
          marginLeft: 18,
        }}
      >
        <Icon
          name="bars"
          size={28}
          color="#000"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 24,
          marginLeft: 18,
        }}
      >
        <Image
          style={styles.headerImage}
          source={{
            // uri: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
            uri: "https://cutt.ly/E8kUPHm",
          }}
        />
        <Text style={styles.headerText}>Welcome {session?.name}!</Text>
      </View>
      <View style={{ marginTop: 16, marginBottom: 20 }}>
        <Text style={styles.headingText}>Do you want to ?</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={styles.searchContainer}
          onPress={() => navigation.navigate("SearchResult")}
        >
          <Text style={{ fontSize: 14, color: "#F54061", fontWeight: "600" }}>
            Find a Doctor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer}>
          <Text style={{ fontSize: 14, color: "#F54061", fontWeight: "600" }}>
            Find One Together
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 26, marginBottom: 26 }}>
        <Text style={styles.headingText}>My Dashboard</Text>
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 30,
          }}
        >
          {dashboard.slice(0, 2).map((tab) => (
            <View style={styles.tabs} key={tab.id}>
              <Icon name={tab.icon} size={65} color="#F54061" />
              <Text style={styles.tabsText}>{tab.title}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 30,
          }}
        >
          {dashboard.slice(2, 4).map((tab) => (
            <View style={styles.tabs} key={tab.id}>
              <Icon name={tab.icon} size={65} color="#F54061" />
              <Text style={styles.tabsText}>{tab.title}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {dashboard.slice(4, 6).map((tab) => (
            <View style={styles.tabs} key={tab.id}>
              <Icon name={tab.icon} size={65} color="#F54061" />
              <Text style={styles.tabsText}>{tab.title}</Text>
            </View>
          ))}
        </View>
      </View>
      </View>
   
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 20,
  },
  headerText: {
    fontSize: 23,
    color: "#F54061",
    fontWeight: "800",
  },
  headingText: {
    fontSize: 18,
    color: "#464043",
    fontWeight: "800",
    alignSelf: "center",
  },
  searchContainer: {
    display: "flex",
    flexBasis: "44%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    height: 50,
    borderWidth: 1,
    elevation: 20,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  tabs: {
    height: 120,
    flexBasis: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 10,
    borderColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    zIndex: 20,
  },
  tabsText: {
    fontSize: 15,
    color: "#464043",
    marginTop: 4,
    fontWeight: "600",
  },
});
