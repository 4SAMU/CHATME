import React from "react";
import { ScrollView, Text, View } from "react-native";
import dmStyles from "./dmstyles";

const DirectMessage = () => {
  return (
    <ScrollView style={dmStyles.container}>
      <View style={dmStyles.items}>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
        <Text style={dmStyles.text}>Mama</Text>
      </View>
    </ScrollView>
  );
};

export { DirectMessage };
