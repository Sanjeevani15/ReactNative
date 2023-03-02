import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePickerCom from "../components/DatePicker";
import DropdownSelect from "../components/DropdownSelect";
import OverviewAccordion from "../components/OverviewAccordion";
import Rating from "../components/StarRating";
import Timeslots from "../components/Timeslots";

const doctorDetails = [
  {
    id: "1",
    name: "Robert Kilm",
    years: 20,
    type: "Neurologist",
    languages: "English, Japenese",
    rate: 230,
    ratingCount: 3.0,
    reviewCount: 25,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

const reviews = [
  {
    id: "1",
    reviewBy: "Amanda Johnson",
    review:
      "Doctor is an exceptional physician who truly cares about his patients. He takes the time to listen to your concerns and explains everything in a way that's easy to understand.His staff is also wonderful, always making you feel welcome and comfortable.",
  },
  {
    id: "2",
    reviewBy: "Sophia Davis",
    review:
      "Doctor always been very thorough and attentive to my health needs. He's very knowledgeable and takes the time to answer all of my questions. His approach is very patient-centered, and it's clear that he's passionate about helping his patients live healthier lives.",
  },
  {
    id: "3",
    reviewBy: "William Chen",
    review:
      "Doctor was able to diagnose me correctly and develop a treatment plan that has greatly improved my quality of life. He's always available to answer questions and makes you feel like you're his top priority. I'm so grateful to have found such a wonderful doctor.",
  },
];

export default function PhysicianProfile({ navigation }: any) {
  return (
    <ScrollView style={{ backgroundColor: "#FEE2E74D", flex: 1 }}>
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
          Physician Profile
        </Text>
      </View>
      <View style={{ marginTop: 22 }}>
        {doctorDetails.map((doctor) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: 140,
              backgroundColor: "white",
              justifyContent: "flex-start",
              marginHorizontal: 16,
              padding: 13,
              marginBottom: 16,
              borderRadius: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.8,
              elevation: 5, // for android
            }}
            key={doctor.id}
          >
            <Image style={styles.doctorImage} source={{ uri: doctor.image }} />
            <View
              style={{
                marginLeft: 16,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <View style={{ display: "flex", justifyContent: "flex-start" }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: "#000000",
                    marginBottom: 5,
                  }}
                >
                  Dr. {doctor.name}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: "#000000",
                    opacity: 0.5,
                    marginBottom: 5,
                  }}
                >
                  {doctor.years} years of experience
                </Text>
                <Text style={styles.doctorTypeText}>{doctor.type}</Text>
                <Text style={styles.doctorTypeText}>{doctor.languages}</Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Rating doctorrating={doctor.rating} />
                  </View>
                  <Text
                    style={{ fontSize: 12, fontWeight: "600", marginLeft: 5 }}
                  >
                    {`${doctor.ratingCount.toFixed(1)}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "500",
                      color: "#F54061",
                      marginLeft: 5,
                    }}
                  >
                    ({doctor.reviewCount})
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
      <View
        style={{
          display: "flex",
          height: 52,
          backgroundColor: "white",
          justifyContent: "center",
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.8,
          elevation: 5, // for android
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "400" }}>
          Rate per hour :{" "}
          <Text style={{ fontWeight: "700", color: "#F54061" }}>
            $230 <Text style={{ fontWeight: "500" }}>USD</Text>
          </Text>
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          backgroundColor: "white",
          justifyContent: "center",
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.8,
          elevation: 5, // for android
        }}
      >
        <OverviewAccordion title="Overview" content={reviews} />
      </View>
      <View
        style={{
          display: "flex",
          height: 122,
          backgroundColor: "white",
          justifyContent: "center",
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.8,
          elevation: 5, // for android
          paddingHorizontal: 14,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 14, marginBottom: 10 }}>
          Select a Date
        </Text>
        <DatePickerCom />
      </View>
      <View
        style={{
          display: "flex",
          height: 122,
          backgroundColor: "white",
          justifyContent: "center",
          marginHorizontal: 16,
          marginBottom: 16,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.8,
          elevation: 5, // for android
          paddingHorizontal: 14,
          position: 'relative',
          zIndex: 20
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 14, marginBottom: 10 }}>
          Select Duration
        </Text>
        <DropdownSelect />
      </View>
      <View
        style={{
          display: "flex",
          height: 130,
          backgroundColor: "white",
          //   justifyContent: "center",
          marginHorizontal: 16,
          marginBottom: 32,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.8,
          elevation: 5, // for android
          position: 'relative',
          zIndex: 10
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 14,
            paddingHorizontal: 14,
            borderBottomWidth: 1,
            borderBottomColor: "#BFBFBF",
            height: 50,
            display: "flex",
            textAlignVertical: "center",
          }}
        >
          Time Availability
        </Text>
        <Timeslots />
      </View>
      <TouchableOpacity
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
          shadowOpacity: 0.8,
          elevation: 5, // for android,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "800", fontSize: 16 }}>
          Book Appointment
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 18,
    color: "#464043",
    fontWeight: "800",
    alignSelf: "center",
  },
  doctorImage: {
    height: 114,
    width: 121,
    borderRadius: 8,
  },
  doctorTypeText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#000000",
    marginBottom: 5,
  },
});
