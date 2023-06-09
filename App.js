import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { MainEntry } from "./components/EntryPoint/MainEntry";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <MainEntry />
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
