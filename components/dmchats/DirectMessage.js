import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import dmStyles from "./dmstyles";

const DirectMessage = () => {
  return (
    <View style={dmStyles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={dmStyles.items}
      >
        <View style={dmStyles.box}>
          <Image />
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
