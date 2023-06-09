import { StyleSheet } from "react-native";

const navStyles = StyleSheet.create({
  navbar: {
    height: 50,
    backgroundColor: "#FFBB36",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  navText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  drawer: {
    flex: 1,
    backgroundColor: "#FFBB36",
    padding: 20,
  },
  drawerText: {
    color: "#fff",
    fontSize: 20,
    padding: 20,
    fontWeight: "bold",
  },
});

export default navStyles;
