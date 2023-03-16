import React from "react";
import { Pressable, SafeAreaView, StyleSheet } from "react-native/types";

const App = () => {
  function onPressFunction() {
    let x = Naame();
    Alert.alert(x);
  }

  return (
    <SafeAreaView >
      <Pressable onPress={onPressFunction}>
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
};

export default App;
