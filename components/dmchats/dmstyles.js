import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const DmsHeight = height - 50;

const dmStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    height: DmsHeight,
  },
  items: {
    height: DmsHeight - 50,
    backgroundColor: "#030C1A",
    width: 10,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  box: {
    height: 50,
    backgroundColor: "red",
    padding: 10,
    justifyContent: "center",
    borderRadius: 2,
  },
});

export default dmStyles;
