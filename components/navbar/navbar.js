import React from "react";
import { Dimensions, Text, View } from "react-native";
import navStyles from "./styles";
const { width } = Dimensions.get("window");

export const Navbar = () => {
  return (
    <View style={[navStyles.navbar, { width }]}>
      <Text styles={navStyles.text}>ChatMe</Text>
    </View>
  );
};
