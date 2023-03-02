import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropdownSelect() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "20 Mins", value: 20 },
    { label: "30 Mins", value: 30 },
  ]);

  return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select Duration"
        style={{
          height: 50,
          borderWidth: 1,
          borderColor: "#BFBFBF",
          borderRadius: 8,
          paddingHorizontal: 14,
          justifyContent: "center",
        }}
        textStyle={{ fontSize: 14, fontWeight: "600" }}    
        dropDownContainerStyle={{
            borderWidth: 1,
            borderColor: "#BFBFBF",
            borderRadius: 1,
        }}  
        dropDownDirection='BOTTOM'  
        listMode="SCROLLVIEW"
      />
  );
}
