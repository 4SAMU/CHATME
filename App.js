import React from "react";
import { Pressable, SafeAreaView, StyleSheet } from "react-native/types";

const App = () => {
  function onPressFunction() {
    let x = Naame();
    Alert.alert(x);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </SafeAreaView>
  );

  
};

export default App;
