import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Rating from "../components/StarRating";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";

export default function AppointmentSummary({ navigation, route }: any) {
  const { doctor } = route.params;
  return (
    <ScrollView style={{ backgroundColor: "#FEE2E74D", flex: 1 }}>
      <View
        style={{
          marginVertical: 8,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 33,
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
          Appointment Summary
        </Text>
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            height: 189,
            backgroundColor: "white",
            justifyContent: "space-between",
            marginHorizontal: 16,
            padding: 13,
            marginBottom: 16,
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
            elevation: 5, // for android
          }}
          key={doctor.id}
        >
          <View
            style={{ height: 20, justifyContent: "center", marginBottom: 24 }}
          >
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              Booking Details
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              height: 140,
              justifyContent: "flex-start",
            }}
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
                  {doctor.years} Years of Experience
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
        </View>
        <View
          style={{
            display: "flex",
            height: 119,
            backgroundColor: "white",
            justifyContent: "space-between",
            marginHorizontal: 16,
            paddingHorizontal: 13,
            paddingVertical: 18,
            marginBottom: 16,
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
            elevation: 5, // for android
          }}
        >
          <View style={{ height: 20, justifyContent: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              Scheduled For
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 10,
                alignItems: "center",
              }}
            >
              <Icon name="calendar-o" size={13} color={"#2C3983"} />
              <Text style={{ fontSize: 14, color: "#F54061", marginLeft: 12 }}>
                December 6, 2021
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon name="clock-o" size={15} color={"#2C3983"} />
              <Text style={{ fontSize: 13, color: "#F54061", marginLeft: 12 }}>
                10:00 AM
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            height: 239,
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
            shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
            elevation: 5, // for android
          }}
        >
          <View
            style={{
              flexBasis: "40%",
              paddingLeft: 13,
              paddingRight: 9,
              justifyContent: "space-around",
              paddingTop: 8,
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              Member Details
            </Text>
            <View>
              <Text style={{ fontSize: 14, color: "#777C92" }}>
                Janifer Max
              </Text>
              <Text style={{ fontSize: 14, color: "#777C92" }}>
                June 22, 1988
              </Text>
            </View>
          </View>
          <View
            style={{
              flexBasis: "60%",
              borderTopWidth: 1,
              borderTopColor: "#00000033",
              paddingLeft: 13,
              paddingRight: 9,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                paddingTop: 10,
                paddingBottom: 8,
              }}
            >
              Appointment Topic
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#888" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 66,
            backgroundColor: "white",
            justifyContent: "space-between",
            marginHorizontal: 16,
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginBottom: 30,
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
            elevation: 5, // for android
          }}
        >
          <View>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              Appointment Total
            </Text>
            <Text style={{ fontSize: 11, fontWeight: "400" }}>
              including all charges
            </Text>
          </View>
          <View style={{ justifyContent: 'center'}}>
            <Text style={{ fontWeight: "800", fontSize: 20, color: "#F54061" }}>
              ${doctor.rate}<Text style={{ fontWeight: "500", fontSize: 15, color: "#F54061" }}> USD</Text>
            </Text>
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
          marginBottom: 30,
          borderRadius: 8,
          shadowColor: "#F54061",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: Platform.OS == "android" ? 0.8 : 0.3,
          elevation: 5, // for android,
          justifyContent: "center",
        }}
        // onPress={() => navigation.navigate("AppointmentSummary", { doctor })}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "800",
            fontSize: 16,
          }}
        >
          Confirm
        </Text>
      </TouchableHighlight>
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
