import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { DirectMessage } from "./components/dmchats/DirectMessage";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Navbar />
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
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
