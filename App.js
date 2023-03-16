import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { DMs } from "./components/dmChats/dms";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Navbar />
      <DMs />
      <
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
