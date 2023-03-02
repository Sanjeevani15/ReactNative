import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Timeslots() {
  const [selectedSlot, setSelectedSlot] = useState<any>();
  const timeSlots = [
    { startTime: "10:30 AM", status: "enabled" },
    { startTime: "11:30 AM", status: "disabled" },
    { startTime: "12:30 PM", status: "disabled" },
    { startTime: "01:30 PM", status: "enabled" },
    { startTime: "02:00 PM", status: "disabled" },
    { startTime: "03:30 PM", status: "enabled" },
  ];
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 80,
      }}
    >
      {timeSlots.map((timeslot: any) => (
        <TouchableOpacity
          style={{
            height: 40,
            width: 80,
            borderWidth: 1,
            borderRadius: 8,
            borderColor:
              timeslot.status == "enabled"
                ? selectedSlot === timeslot.startTime
                  ? "#F54061"
                  : "#BFBFBF"
                : "#EDEDED",
            marginRight: 10,
            backgroundColor:
              timeslot.status == "enabled"
                ? selectedSlot === timeslot.startTime
                  ? "#F54061"
                  : "#fff"
                : "#EDEDED",
          }}
          key={timeslot.startTime}
          onPress={() => timeslot.status == "enabled" && setSelectedSlot(timeslot.startTime)}
        >
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              height: 40,
              color:
                timeslot.status == "enabled"
                  ? selectedSlot === timeslot.startTime
                    ? "#fff"
                    : "#000"
                  : "#333333",
            }}
          >
            {timeslot.startTime}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
