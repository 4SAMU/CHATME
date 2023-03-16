import React from "react";
import { ScrollView, Text, View } from "react-native";
import dmStyles from "./dmstyles";

export const DirectMessage = () => {
  return (
    <View>
      <View style={dmStyles.container}>
        <View style={dmStyles.box}>
          <Text>Mama</Text>
        </View>
      </View>
    </View>
  );
};
