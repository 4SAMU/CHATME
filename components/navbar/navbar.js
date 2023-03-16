import React from "react";
import { Dimensions, StatusBar, Text, View } from "react-native";
import navStyles from "./styles";
const { width } = Dimensions.get("window");

export const Navbar = () => {
  return (
    <View style={[navStyles.navbar, { width }]}>
      <StatusBar barStyle="default" backgroundColor="" />
      <Text styles={navStyles.text}>hello</Text>
    </View>
  );
};
