import React from "react";
import { Dimensions, Text, View } from "react-native";
import dmStyles from "./dmstyles";
const { height } = Dimensions.get("window");
const DmsHeight = height - 50;
console.log("height", DmsHeight);

const DirectMessage = () => {
  return (
    <View style={[dmStyles.container, }>
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
