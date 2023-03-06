import React, { useCallback, useState } from "react";
// import { TouchableWithoutFeedback } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropdownSelect({
  placeholder,
  options,
  textStyle,
  style,
}: {
  placeholder: string;
  options: any;
  textStyle: any;
  style: any;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(options);

  const handleSetItems = useCallback((newItems: any) => {
    setItems(newItems);
  }, []);

  // const dropdownRef = useRef(null);

  // const handleOutsidePress = useCallback(() => {
  //   if (dropdownRef.current) {
  //     setOpen(false);
  //   }
  // }, []);

  return (
    // <TouchableWithoutFeedback onPress={handleOutsidePress}>
    <DropDownPicker
      //  ref={dropdownRef}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      // setItems={setItems}
      setItems={handleSetItems}
      placeholder={placeholder}
      style={style}
      textStyle={textStyle}
      dropDownContainerStyle={{
        borderWidth: 1,
        borderColor: "#BFBFBF",
        borderRadius: 1,
      }}
      dropDownDirection="BOTTOM"
      listMode="SCROLLVIEW"
    />
    // </TouchableWithoutFeedback>
  );
}
