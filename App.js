import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { DirectMessage } from "./components/dmchats/DirectMessage";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <Navbar />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
   position:
    backgroundColor: "#fff",
  },
});
