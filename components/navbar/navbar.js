import React from "react";
import { View } from "react-native";
import navStyles from "./styles";

export const Navbar = () => {
  return (
    <View styles={navStyles.navbar}>
      <Text styles={navStyles.text}></Text>
    </View>
  );
};
