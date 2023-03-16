import React from "react";
import { View } from "react-native";
import DmStyles from "./styles";

export const dms = () => {
  return (
    <View style={DmStyles.container}>
      <View style={dm}></View>
    </View>
  );
};
