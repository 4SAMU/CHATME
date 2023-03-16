import { StyleSheet } from "react-native";

const navStyles = StyleSheet.create({
  navbar: {
    flex: 1,
    marginTop: 0,
    height: 50,
    backgroundColor: "#FFBB36",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  navText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  drawer: {
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
