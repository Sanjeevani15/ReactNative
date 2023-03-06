import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import LovedOneIcon from "react-native-vector-icons/Octicons";
import DropdownSelect from "../components/DropdownSelect";
import TextAreawithSpeech from "../components/TextAreawithSpeech";

export default function CareAgenda({ navigation, route }: any) {
  const { appointmentFor, doctor } = route.params;
  return (
    <View style={{ backgroundColor: "#FEE2E74D", flex: 1 }}>
      <View
        style={{
          marginVertical: 8,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Icon
          name="angle-left"
          size={28}
          color="#000"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.headingText, { flex: 1, textAlign: "center" }]}>
          Book Appointment
        </Text>
      </View>
      <View
        style={{
          marginTop: 33,
          height: 144,
          backgroundColor: "#fff",
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
          elevation: 5, // for android
          display: "flex",
          justifyContent: "center",
          marginHorizontal: 16,
          marginBottom: 16,
          paddingHorizontal: 14,
        }}
      >
        <Text style={styles.titleText}>Who is the appointment for?</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <View
            style={[
              styles.tabs,
              {
                backgroundColor:
                  appointmentFor === "myself" ? "#F54061" : "#F7F7F7",
              },
            ]}
          >
            <Icon
              name="user-circle"
              size={20}
              color={appointmentFor === "myself" ? "#fff" : "#777C92"}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontWeight: appointmentFor === "myself" ? "700" : "500",
                color: appointmentFor === "myself" ? "#fff" : "#000",
              }}
            >
              Myself
            </Text>
          </View>
          <View
            style={[
              styles.tabs,
              {
                backgroundColor:
                  appointmentFor === "lovedone" ? "#F54061" : "#F7F7F7",
              },
            ]}
          >
            <LovedOneIcon
              name="feed-heart"
              size={20}
              color={appointmentFor === "lovedone" ? "#fff" : "#777C92"}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 14,
                fontWeight: appointmentFor === "lovedone" ? "700" : "500",
                color: appointmentFor === "lovedone" ? "#fff" : "#000",
              }}
            >
              Loved One
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 290,
          backgroundColor: "#fff",
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
          elevation: 5, // for android
          display: "flex",
          justifyContent: "center",
          marginHorizontal: 16,
          marginBottom: 35,
          paddingHorizontal: 14,
        }}
      >
        <View style={{ marginBottom: 24 }}>
          <Text style={styles.titleText}>Let&apos;s set the CareAgenda</Text>
        </View>
        <View>
          <View
            style={{
              marginBottom: 16,
              position: "relative",
              zIndex: 30,
            }}
          >
            <DropdownSelect
              placeholder={"Appointment Topic"}
              options={[
                {
                  label: "Respiratory infections",
                  value: "respiratoryInfections",
                },
                { label: "Digestive problems", value: "digestiveProblems" },
                { label: "Skin problems", value: "skinProblems" },
                { label: "Diabetes", value: "diabetes" },
              ]}
              textStyle={{ fontSize: 14, fontWeight: "500" }}
              style={{
                height: 50,
                borderWidth: 1,
                borderColor: "#BFBFBF",
                borderRadius: 6,
                paddingHorizontal: 14,
                justifyContent: "center",
              }}
            />
          </View>
          <View>
            <TextAreawithSpeech />
          </View>
        </View>
      </View>
      <TouchableHighlight
        underlayColor="#F54061"
        activeOpacity={0.9}
        style={{
          display: "flex",
          height: 50,
          backgroundColor: "#F54061",
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 8,
          shadowColor: "#F54061",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
          elevation: 5, // for android,
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
        onPress={() => navigation.navigate("AppointmentSummary", { doctor })}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "800",
            fontSize: 16,
          }}
        >
          Continue
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    color: "#464043",
    fontWeight: "800",
    alignSelf: "center",
  },
  titleText: {
    fontSize: 15,
    fontWeight: "600",
    paddingHorizontal: 6,
  },
  tabs: {
    height: 48,
    flexBasis: "46%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: Platform.OS == "android" ? 1 : 0.2,
    shadowRadius: 2,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#BFBFBF",
    borderRadius: 6,
    padding: 8,
    fontSize: 14,
    fontWeight: "500",
    backgroundColor: "#fff",
    height: 50,
    color: "#000",
    paddingHorizontal: 14,
    paddingVertical: 15,
  },
});
