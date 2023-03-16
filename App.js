import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { DirectMessage } from "./components/dmchats/DirectMessage";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" />
      <DirectMessage/>
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
