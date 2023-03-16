import React from "react";
import { View } from "react-native";
import DmStyles from "./styles";

export const DirectMessage = () => {
  return (
    <ScrollView style={DmStyles.container}>
      <View style={DmStyles.box}>mama</View>
      <View style={DmStyles.box}>baba</View>
      <View style={DmStyles.box}>mtoto</View>
      <View style={DmStyles.box}>mjukuu</View>
    </ScrollView>
  );
};
