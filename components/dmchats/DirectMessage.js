import React from "react";
import { ScrollView, Text, View } from "react-native";
import dmStyles from "./dmstyles";

const DirectMessage = () => {
  return (
    <ScrollView style={dmStyles.container}>
      <View style={dmStyles.items}>
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
    </ScrollView>
  );
};

export { DirectMessage };
