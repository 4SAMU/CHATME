import React from "react";
import { ScrollView, Text, View } from "react-native";
import dmStyles from "./dmstyles";

export const DirectMessage = () => {
  return (
    
      <View style={dmStyles.container}>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
      </View>
    </View>
  );
};
