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
          <Image
            style={dmStyles.userimg}
            source={{
              uri: "https://gallery-store-api.vercel.app/files/63f38cb6cb8b99f477d87474",
            }}
          />
          <Text style={dmStyles.text}>Mama</Text>
        </View>
        <View style={dmStyles.box}>
          <Image
            style={dmStyles.userimg}
            source={{
              uri: "https://gallery-store-api.vercel.app/files/63f38cb6cb8b99f477d87474",
            }}
          />
          <Text style={dmStyles.text}>Baba</Text>
        </View>
        <View style={dmStyles.box}>
          <Image
            style={dmStyles.userimg}
            source={{
              uri: "https://gallery-store-api.vercel.app/files/63f38cb6cb8b99f477d87474",
            }}
          />
          <Text style={dmStyles.text}>Mtoto</Text>
        </View>
        <View style={dmStyles.box}>
          <Image
            style={dmStyles.userimg}
            source={{
              uri: "https://gallery-store-api.vercel.app/files/63f38cb6cb8b99f477d87474",
            }}
          />
          <Text style={dmStyles.text}>Mjukuu</Text>
        </View>
        <Text style={dmStyles.footer}>Footer</Text>
      </ScrollView>
    </View>
  );
};

export { DirectMessage };
