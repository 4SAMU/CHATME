import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Navbar } from "./components/navbar/navbar";

const App = () => {
  return (
    <Vi styles={styles.container}>
      <Navbar />
    </Vi>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
