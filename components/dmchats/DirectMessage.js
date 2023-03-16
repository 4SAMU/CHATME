import React from "react";
import { ScrollView, View } from "react-native";
import dmStyles from "./dmstyles";

export const DirectMessage = () => {
  return (
    <View>
      <View style={dmStyles.container}>
        <View style={dmStyles.box}>mama</View>
        <View style={dmStyles.box}>baba</View>
        <View style={dmStyles.box}>mtoto</View>
        <View style={dmStyles.box}>mjukuu</View>
      </View>
    </View>
  );
};
