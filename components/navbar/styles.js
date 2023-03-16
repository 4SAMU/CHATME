import { StyleSheet } from "react-native";

const navStyles = StyleSheet.create({
  navbar: {
    height: 50,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default navStyles;
