import React, { useRef } from "react";
import {
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  DrawerLayoutAndroid,
} from "react-native";
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
      style={navStyles.drawer}
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="right"
      renderNavigationView={() => (
        <View>
          <Text>Drawer content</Text>
        </View>
      )}
    >
      <View style={[navStyles.navbar, { width }]}>
        <Text style={navStyles.navText}>ChatMe</Text>
        <TouchableOpacity onPress={openDrawer}>
          <View>
            <Icon name="menu" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
  );
};
