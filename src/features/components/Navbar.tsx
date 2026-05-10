import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT", "SERVICES", "TEAM", "GALLERY", "CONTACT"];

  return (
    <View style={styles.wrapper}>
      <View style={styles.navHead}>
        <Text style={styles.navTitle}>
          INTRA<Text style={{ color: "black" }}>DOS</Text>
        </Text>

        <View style={styles.navSub}>
          <TouchableOpacity>
            <Feather
              style={styles.navIcon}
              name="moon"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOpen(!open)}>
            <FontAwesome
              style={styles.menuBtn}
              name="navicon"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      {open && (
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <Text key={index} style={styles.menuItem}>
              {item}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },

  navHead: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },

  navTitle: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 30,
  },

  navSub: {
    flexDirection: "row",
    alignItems: "center",
  },

  navIcon: {
    padding: 10,
    borderRadius: 8,
    marginRight: 15,
  },

  menuBtn: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 8,
  },

  menu: {
    position:"absolute",
    top: 70,
    left: 0,
    right: 0,
    backgroundColor: "lightgray",
    padding: 20,
    zIndex: 999,
    elevation: 10,
    overflow:"hidden"
  },

  menuItem: {
    fontSize: 16,
    marginVertical: 8,
  },
});
