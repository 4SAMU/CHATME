import React from "react";
import { View } from "react-native";
import DmStyles from "./styles";

export const dms = () => {
  return (
    <ScrollView style={DmStyles.container}>
      <View style={DmStyles.box}></View>
      <View style={DmStyles.box}></View>
      <View style={DmStyles.box}></View>
      <View style={DmStyles.box}></View>
    </View>
  );
};
