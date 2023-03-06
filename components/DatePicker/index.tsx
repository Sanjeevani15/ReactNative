import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";

export default function DatePickerCom({
  placeholder,
  textStyle,
  iconStyle,
  containerStyle,
  minimumDate,
  maximumDate
}: {
  placeholder: string;
  textStyle: any;
  iconStyle: any;
  containerStyle: any;
  minimumDate?: any;
  maximumDate?: any;
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setSelectedDate(moment(date).format("LL"));
    hideDatePicker();
  };
  return (
    <View>
      <View>
        <TouchableHighlight
          // style={{
          //   height: 50,
          //   borderWidth: 1,
          //   borderColor: "#BFBFBF",
          //   borderRadius: 8,
          //   paddingHorizontal: 14,
          //   justifyContent: "center",
          // }}
          style={containerStyle}
          underlayColor="#fff"
          onPress={showDatePicker}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={textStyle}>{selectedDate || placeholder}</Text>

            <Icon name="calendar-o" size={20} style={iconStyle} />
          </View>
        </TouchableHighlight>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
        />
      </View>
    </View>
  );
}
