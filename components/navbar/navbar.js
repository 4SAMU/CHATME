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
import { DirectMessage } from "../dmchats/DirectMessage";
const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export const Navbar = () => {
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current.openDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={250}
      drawerPosition="right"
      renderNavigationView={() => (
        <View style={[navStyles.drawer, { height, zIndex: 1 }]}>
          <Text style={navStyles.drawerText}>
            <Icon name="settings" size={25} color="#fff" /> Setting
          </Text>
          <Text style={navStyles.drawerText}>
            <Icon name="users" size={25} color="#fff" /> Group
          </Text>
          <Text style={navStyles.drawerText}>
            <Icon name="message-circle" size={25} color="#fff" /> DMS
          </Text>
          <Text style={navStyles.drawerText}>
            <Icon name="cpu" size={25} color="#fff" /> ChatBot
          </Text>
          <Text style={navStyles.drawerText}>
            <Icon name="log-out" size={25} color="#fff" /> Log out
          </Text>
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
      <DirectMessage />

    </DrawerLayoutAndroid>
  );
};
