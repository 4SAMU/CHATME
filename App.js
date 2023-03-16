import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Navbar } from "./components/main/navbar";

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
    flex: 1,
    backgroundColor: "black",
  },
});
