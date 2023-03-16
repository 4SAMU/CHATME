import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");
const DmsHeight = height - 50;
console.log("height", DmsHeight);

const dmStyles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    marginTop: 0,
    width: "100%",
    height: DmsHeight,
    marginLeft: 0,
  },
  items: {
    height: 0,
    backgroundColor: "#030C1A",
  },
  text: {
    color: "#fff",
  },
});

export default dmStyles;
