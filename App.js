import { StatusBar, StyleSheet, Text, View } from "react-native";

const image = {uri: 'https://reactjs.org/logo-og.png'};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}></View>
      <Text style={styles.Text}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  Text: {
    color: "#fff",
  },
  nav: {
    position: "absolute",
    width: "100%",
    backgroundColor: "yellow",
  },
});
