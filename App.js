import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return (
    <View styles={styles.container}>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
    marginTop: 22,
  },
});

export default App;
