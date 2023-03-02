import React from "react";
import {
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  View,
} from "react-native";

function TestScreen() {
  return (
    <View>
      <Text onPress={() => console.log("text Clicked")}>
        If you don't have an Android device available to test with, we recommend
        using the default emulator that comes with Android Studio. If you run
        into any problems setting it up, follow the steps in this guide.
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableWithoutFeedback onPress={() => console.log("image Clicked")}>
        <Image
          blurRadius={1}
          source={{
            uri: "https://picsum.photos/200/300",
            height: 100,
            width: 100,
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => console.log("TouchableOpacity")}>
        <Image
          blurRadius={1}
          source={{
            uri: "https://picsum.photos/200/300",
            height: 100,
            width: 100,
          }}
        />
      </TouchableOpacity>
      <TouchableHighlight onPress={() => console.log("TouchableHighlight")}>
        <Image
          blurRadius={1}
          source={{
            uri: "https://picsum.photos/200/300",
            height: 100,
            width: 100,
          }}
        />
      </TouchableHighlight>
      <Button title="Click Me" onPress={() => alert("Button Tapped")} />
      <Button
        title="Custom Alert"
        onPress={() =>
          Alert.alert(
            "My Title",
            "My message and third paramater will be array of buttons and every button will have its own properties",
            [
              { text: "Yes", onPress: () => console.log("yes Clicked") },
              { text: "No" },
            ]
          )
        }
      />
      <Button
        title="Custom Prompt Alert"
        onPress={() =>
          Alert.prompt(
            "Works only on IOS",
            "My message and third paramater is a callback or buttons , for exmaple here text is the text enterted by the user",
            (text) => console.log("text is: ", text)
          )
        }
      />
      <View
        style={{ backgroundColor: "orange", width: "50%", height: 70 }}
      ></View>
      <View style={{ backgroundColor: "pink", flex: 0.5, height: 100 }}>
        {/* <View style={{backgroundColor: 'yellow', flex: 2}} /> */}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
          justifyContent: "center",
          // alignContent: "center", //alignContent used with flexWrap
          // flexWrap: "wrap"
        }}
      >
        <View
          style={{
            backgroundColor: "brown",
            width: 50,
            height: 50,
            top: -10,
          }}
        />
        <View
          style={{ backgroundColor: "green", width: 50, height: 50, top: 10 }}
        />
        <View
          style={{
            backgroundColor: "tomato",
            width: 50,
            height: 50,
            left: 10,
            position: "absolute",
          }}
        />
        <View style={{ backgroundColor: "indigo", width: 50, height: 50 }} />
      </View>
    </View>
  );
}

export default TestScreen;
