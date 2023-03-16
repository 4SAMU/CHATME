import React from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, Pressable } from "react-native";

export default App = () => (


  <SafeAreaView style={styles.container}>
    <Pressable onPress={()={const data=Na}}>
      <Text>I'm pressable!</Text>
    </Pressable>
  </SafeAreaView>
);

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
