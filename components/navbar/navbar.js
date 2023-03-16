import React from "react";
import { View } from "react-native/types";
import navStyles from "./styles";

export const navbar = () => {
  return (
    <View styles={navStyles.navbar}>
      <Text styles={navStyles.text}></Text>
    </View>
  );
};
