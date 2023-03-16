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


export default App;
