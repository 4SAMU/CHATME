import React from "react";
import { ScrollView, Text, View } from "react-native";
import dmStyles from "./dmstyles";

const DirectMessage = () => {
  return (
    <View style={dmStyles.container}>
      <ScrollView style={[dmStyles.items, {alig}]}>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Text style={dmStyles.text}>Mama</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export { DirectMessage };
