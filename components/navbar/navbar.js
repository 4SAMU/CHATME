import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import navStyles from "./styles";
import Icon from "react-native-vector-icons/Feather";
const { width } = Dimensions.get("window");

export const Navbar = () => {
  return (
    <View style={[navStyles.navbar, { width }]}>
      <Text style={navStyles.navText}>ChatMe</Text>
      <TouchableOpacity onPress={() => console.log("Menu icon pressed")}>
      <View>
        <Icon name="menu" size={25} color="#000" />
      </View>
    </TouchableOpacity>
    </View>
  );
};
