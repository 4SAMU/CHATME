import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { DirectMessage } from "./components/dmchats/DirectMessage";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Navbar />
      <View style={styles.mydata}>
        <Text>wewwe</Text>
        <DirectMessage />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mydata: {
    height:50
    backgroundColor: "red",
  },
});
