// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import Voice from "@react-native-voice/voice";

// export default function TextAreawithSpeech() {
//   const [started, setStarted] = useState(false);
//   const [text, setText] = useState("");
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Set up voice recognition event listeners
//     Voice.onSpeechError = handleError;
//     Voice.onSpeechResults = handleResults;

//     return () => {
//       // Remove event listeners when component is unmounted
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const handleStartButton = async () => {
//     try {
//       // Start voice recognition
//       await Voice.start("en-US");
//       setStarted(true);
//       setError(null);
//     } catch (e: any) {
//       // Handle errors
//       setError(e.message);
//     }
//   };

//   const handleStopButton = async () => {
//     try {
//       // Stop voice recognition
//       await Voice.stop();
//       setStarted(false);
//       setError(null);
//     } catch (e: any) {
//       // Handle errors
//       setError(e.message);
//     }
//   };

//   const handleError = (e: any) => {
//     // Handle speech recognition errors
//     setError(e.error.message);
//   };

//   const handleResults = (e: any) => {
//     // Handle speech recognition results
//     setText(e.value[0]);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         value={text}
//         onChangeText={setText}
//         placeholder="Type something..."
//         style={styles.textInput}
//         multiline
//         numberOfLines={5}
//       />
//       <TouchableOpacity
//         style={[styles.button, { backgroundColor: started ? "red" : "green" }]}
//         onPress={started ? handleStopButton : handleStartButton}
//       >
//         <Text style={styles.buttonText}>
//           {started ? "Stop" : "Start"} speech recognition
//         </Text>
//       </TouchableOpacity>
//       {error && <Text style={styles.error}>{error}</Text>}
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     height: 150,
//     marginTop: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   textInput: {
//     width: "100%",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   button: {
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   error: {
//     color: "red",
//     textAlign: "center",
//   },
// });

import React, { useState } from "react";
import { TextInput, StyleSheet, Platform } from "react-native";
export default function TextAreawithSpeech() {
  const [value, setValue] = useState("");

  return (
    <TextInput
      style={styles.textArea}
      placeholder="What do you want to talk about?"
      placeholderTextColor="#40465A"
      numberOfLines={10}
      multiline={true}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  );
}

const styles = StyleSheet.create({
  textArea: {
    borderWidth: 1,
    height: 128,
    borderColor: "#BFBFBF",
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingBottom: 14,
    paddingTop: Platform.OS == 'android' ? 14 : 16,
    fontSize: 14,
    textAlignVertical: "top",
  },
});
