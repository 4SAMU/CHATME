import React from "react";
import {
  Alert,
  Dimensions,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Naame } from "./zip";

const { width } = Dimensions.get('window');

const App = () => {
  function onPressFunction() {
    let x = Naame();
    Alert.alert(x);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{[styles.navbar, { width }]}}>
        <Pressable onPress={onPressFunction}>
          <Text>I'm pressable!</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    alignItems: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  navbar: {
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
});

export default App;
