import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
  },
});
