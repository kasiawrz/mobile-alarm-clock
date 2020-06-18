import React, { useState } from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

export default function TimePicker(hours = true) {
  const [selectedValue, setSelectedValue] = useState("java");
  //   const MINUTES = 59;
  const MAX = hours ? 24 : 60;
  const pickerValues = [];

  function generateValues() {
    for (let i = 0; i < MAX; i++) {
      console.log(
        "debug📍: TimePicker 13",
        `<Picker.Item key=${i} label={i} value={i}></Picker.Item>`
      );
      pickerValues.push(
        <Picker.Item key={i} label={i} value={i}></Picker.Item>
      );
    }
  }
  generateValues();
  console.log("debug📍: TimePicker 22", pickerValues);

  return (
    <View style={styles.container}>
      <Text>Select Languageuuu</Text>
      <Picker
        selectedValue="java"
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}

{
  /* <Picker
  selectedValue="java"
  // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
>
  {/* {pickerValues}
  <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="lol" value="j" />
</Picker>; */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    height: 200,
    width: 200,
    // color: "red",
    backgroundColor: "pink",
  },
});
