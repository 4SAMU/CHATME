import React from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";
import { Naame } from "./zip";

const App = () => {
  function onPressFunction() {
    let x = Naame();
    Alert.al(x);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default App;
