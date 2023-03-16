import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const DmsHeight = height - 50;

const dmStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: DmsHeight,
  },
  items: {
    height: DmsHeight - 60,
  },
  text: {
    color: "#fff",
  },
  box: {
    height: 50,
    backgroundColor: "",
    padding: 10,
    justifyContent: "center",
    borderRadius: 2,
    width: width - 10,
    marginTop: 4,
  },
});

export default dmStyles;
