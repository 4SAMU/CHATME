import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");
const DmsHeight = height - 50;

const dmStyles = StyleSheet.create({
  container: {
    marginTop: 0,
    width: "100%",
    height: DmsHeight,
    marginLeft: 10,
  },
  items: {
    height: "100%",
    backgroundColor: "#030C1A",
  },
  text: {
    color: "#fff",
  },
});

export default dmStyles;
