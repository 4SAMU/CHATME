import React from "react";
import { Dimensions, Text, View } from "react-native";
import dmStyles from "./dmstyles";

const DirectMessage = () => {
  return (
    <View style={dmStyles.container}>
      <View style={dmStyles.items}>
        <Text style={dmStyles.text}>Mama</Text>
      </View>
      <View style={dmStyles.items}>
        <Text style={dmStyles.text}>Mama</Text>
      </View>
      <View style={dmStyles.items}>
        <Text style={dmStyles.text}>Mama</Text>
      </View>
    </View>
  );
};

export { DirectMessage };
