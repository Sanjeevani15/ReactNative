import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchIcon from "react-native-vector-icons/AntDesign";
import CancelIcon from "react-native-vector-icons/MaterialIcons";

const DoctorType = [
  { id: "1", title: "Neurologist" },
  { id: "2", title: "Dermatologist" },
  { id: "3", title: "ENT" },
  { id: "4", title: "Cardiologist" },
  { id: "5", title: "Dentist" },
  { id: "6", title: "Psychiatrists" },
  { id: "7", title: "Endocrinologists" },
  // { id: "8", title: "Neurologist" },
  // { id: "9", title: "Dermatologist" },
  // { id: "10", title: "ENT" },
  // { id: "11", title: "Cardiologist" },
  // { id: "12", title: "Dentist" },
  // { id: "13", title: "Psychiatrists" },
  // { id: "14", title: "Endocrinologists" },
];

const Item = ({ title }: { title: string }) => (
  <View style={styles.item}>
    <Text style={styles.searchTitles}>{title}</Text>
  </View>
);

export default function SearchScreen({ navigation }: { navigation: any }) {
  const [searchText, setSearchText] = useState("");
  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate("DoctorList", { item })}
      >
        <Item title={item.title} />
      </TouchableOpacity>
    );
  };
  const filteredData = DoctorType.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <View style={{ backgroundColor: "#FEE2E74D" }}>
      <View
        style={{ marginTop: 8, flexDirection: "row", alignItems: "center" }}
      >
        <Icon
          name="angle-left"
          size={28}
          color="#000"
          style={{ marginLeft: 10 }}
          onPress={() => navigation.navigate("Dashboard")}
        />
        <Text style={[styles.headingText, { flex: 1, textAlign: "center" }]}>
          Find a Doctor
        </Text>
      </View>

      <View style={{ marginTop: 28, height: '100%' }}>
        <View
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
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
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              onChangeText={(text) => setSearchText(text)}
              value={searchText}
            />
            <View
              style={{
                backgroundColor: "#fff",
                height: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CancelIcon
                name="cancel"
                size={20}
                color="#848E9A"
                onPress={() => setSearchText("")}
              />
            </View>
          </View>
          <View style={styles.searchFilterIcon}>
            <Icon
              name="sliders"
              size={28}
              color="#F54061"
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={{ backgroundColor: "white", height: '70%', overflow: 'scroll' }}>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator
          />
        </View>
      </View>
    </View>
  );
}
//rnss
const styles = StyleSheet.create({
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
    marginVertical: 20,
    marginRight: 10,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
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
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius: 10,
  },
});
