import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function SettingsScreen() {
  return (
    <View>
      <ScrollView></ScrollView>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: "Hello Spotify",
};
