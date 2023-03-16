import React from "react";
import { Text, View } from "react-native";
import navStyles from "./styles";
const { width } = Dimensions.get('window');

export const Navbar = () => {
  return (
    <View styles={navStyles.navbar}>
      <Text styles={navStyles.text}>hello</Text>
    </View>
  );
};
