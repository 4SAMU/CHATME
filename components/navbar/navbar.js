import React, { useRef } from "react";
import { Dimensions, Text, TouchableOpacity, View, DrawerLayoutAndroid } from "react-native";
import navStyles from "./styles";
import Icon from "react-native-vector-icons/Feather";
const { width } = Dimensions.get("window");

export const Navbar = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="left"
      renderNavigationView={() => (
        <View>
          <Text>Drawer content</Text>
        </View>
      )}
    >
      <View style={[navStyles.navbar, { width }]}>
        
        <Text style={navStyles.navText}>ChatMe</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};
