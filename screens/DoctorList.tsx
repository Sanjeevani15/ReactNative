import React from "react";
import { StyleSheet, View, Text, Image, Button, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchIcon from "react-native-vector-icons/AntDesign";
import Rating from "../components/StarRating";
import { ScrollView, TouchableHighlight } from "react-native-gesture-handler";

export default function DoctorList({ navigation, route }: any) {
  const { item } = route.params;
  const doctorDetails = [
    {
      id: "1",
      name: "Robert Kilm",
      years: 20,
      type: item.title,
      languages: "English, Japenese",
      rate: 240,
      ratingCount: 3.0,
      reviewCount: 25,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: "2",
      name: "Norman Davis",
      years: 8,
      type: item.title,
      languages: "English, Spanish",
      rate: 250,
      ratingCount: 4.0,
      reviewCount: 16,
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#FEE2E74D", flex: 1 }}>
      <View>
        <View
          style={{ marginTop: 8, flexDirection: "row", alignItems: "center" }}
        >
          <Icon
            name="angle-left"
            size={28}
            color="#000"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("SearchResult")}
          />
          <Text style={[styles.headingText, { flex: 1, textAlign: "center" }]}>
            Find a Doctor
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 38,
            marginBottom: 10,
          }}
        >
          <View style={styles.searchBox}>
            <View
              style={{
                backgroundColor: "#fff",
                height: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SearchIcon name="search1" size={20} color="#848E9A" />
            </View>
            <Text
              style={[
                styles.searchInput,
                { fontWeight: "600", paddingLeft: 28 },
              ]}
            >
              {item.title}
            </Text>
          </View>
          <View style={styles.searchFilterIcon}>
            <Icon
              name="sliders"
              size={30}
              color="#F54061"
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={{ marginVertical: 15, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 14, color: "#F54061", fontWeight: "600" }}>
            Available Doctors
          </Text>
        </View>
        <View>
          {doctorDetails.map((doctor) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                height: 224,
                backgroundColor: "white",
                justifyContent: "flex-start",
                marginHorizontal: 16,
                padding: 16,
                marginBottom: 16,
              }}
              key={doctor.id}
            >
              <Image
                style={styles.doctorImage}
                source={{ uri: doctor.image }}
              />
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
                  <Text style={{ marginBottom: 5 }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "800",
                        color: "#000000",
                      }}
                    >
                      ${doctor.rate}
                    </Text>{" "}
                    USD
                  </Text>
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

                <TouchableHighlight
                  underlayColor="#F54061"
                  activeOpacity={0.9}
                  style={styles.bookButton}
                  onPress={() =>
                    navigation.navigate("PhysicianProfile", { doctor })
                  }
                >
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: Platform.OS == "android" ? 14 : 12,
                      color: "#fff",
                      textAlign: "center",
                      textAlignVertical: "center",
                    }}
                  >
                    Book Appointment
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEE2E74D",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingTop: Platform.OS === "android" ? 28 : 4
  },
  textcenter: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7BB4E3",
  },
  headingText: {
    fontSize: 18,
    color: "#464043",
    fontWeight: "800",
    alignSelf: "center",
  },
  searchBox: {
    paddingHorizontal: 14,
    display: "flex",
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: Platform.OS == "android" ? 0.6 : 0.3,
    shadowRadius: 2,
    borderRadius: 10,
    elevation: 20,
    borderWidth: 1,
  },
  searchInput: {
    backgroundColor: "#fff",
    height: 40,
    padding: 10,
    display: "flex",
    flex: 1,
  },
  item: {
    backgroundColor: "#fff",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#00000033",
    justifyContent: "center",
  },
  searchTitles: {
    fontSize: 14,
    alignItems: "center",
    paddingLeft: 20,
    color: "#464043",
  },
  searchFilterIcon: {
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    height: 40,
    justifyContent: "center",
    elevation: 20,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: Platform.OS == "android" ? 0.6 : 0.3,
    shadowRadius: 2,
    borderRadius: 10,
  },
  doctorImage: {
    height: 194,
    width: 121,
    borderRadius: 8,
  },
  doctorTypeText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#000000",
    marginBottom: 5,
  },
  bookButton: {
    elevation: 10,
    borderColor: "#fff",
    shadowColor: "#F54061",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: Platform.OS == "android" ? 0.6 : 0.3,
    shadowRadius: 2,
    borderRadius: 10,
    backgroundColor: "#F54061",
    height: 44,
    justifyContent: "center",
    width: Platform.OS == "android" ? 160 : 130,
  },
});
