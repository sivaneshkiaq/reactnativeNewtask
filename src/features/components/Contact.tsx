import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { FontAwesome5, EvilIcons, Entypo, AntDesign } from "@expo/vector-icons";

const Contact = () => {
  const socialIcons = [
    {
      id: 1,
      component: EvilIcons,
      name: "sc-facebook",
      size: 24,
    },
    {
      id: 2,
      component: Entypo,
      name: "instagram",
      size: 22,
    },
    {
      id: 3,
      component: Entypo,
      name: "twitter",
      size: 22,
    },
    {
      id: 4,
      component: Entypo,
      name: "pinterest",
      size: 22,
    },
    {
      id: 5,
      component: AntDesign,
      name: "google-plus",
      size: 22,
    },
    {
      id: 6,
      component: Entypo,
      name: "linkedin",
      size: 22,
    },
  ];

  const quickLinks = [
    "Home",
    "About",
    "Blogs",
    "Contact",
    "Privacy Policy",
    "Terms of Use",
    "Sales and Refunds",
    "FAQ",
  ];

  return (
    <View style={styles.main}>
      <View style={styles.head}>
        <Text style={styles.title}>
          Intra<Text style={{ color: "white" }}>dos</Text>
        </Text>

        <Text style={styles.para}>
          The art and science of enhancing a building's interior to achieve a
          healthier, more aesthetic, and functional environment for users
        </Text>
      </View>

      <View style={styles.quickLinks}>
        <Text style={styles.quick}>Quick Links</Text>

        <View style={styles.linksContainer}>
          {quickLinks.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.menu}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.keepMain}>
        <Text style={styles.keep}>Keep Connected</Text>

        <Text style={styles.keepPara}>
          Get Updates By Subscribe Our Weekly Newsletter
        </Text>
      </View>

      <View style={styles.mail}>
        <TextInput
          style={styles.input}
          placeholder="Your Email Address"
          placeholderTextColor="white"
        />

        <TouchableOpacity>
          <FontAwesome5
            name="telegram-plane"
            size={28}
            color="black"
            style={styles.font}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.fontList}>
        {socialIcons.map((item) => {
          const IconComponent = item.component;

          return (
            <TouchableOpacity key={item.id} style={styles.iconBox}>
              <IconComponent name={item.name} size={item.size} color="white" />
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.version}>
        <Text style={styles.versionExplain}>
          © 2021 Intrados. All rights reserved | Designed by W3layouts
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    paddingVertical: 20,
  },

  head: {
    paddingHorizontal: 20,
  },

  title: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 32,
    marginVertical: 20,
  },

  para: {
    color: "white",
    fontSize: 17,
    lineHeight: 26,
  },

  quickLinks: {
    marginHorizontal: 20,
    marginTop: 30,
  },

  quick: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27,
    marginBottom: 20,
  },

  linksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  menu: {
    color: "#FFFFF7",
    fontSize: 17,
    marginBottom: 14,
    width: 150,
  },

  keepMain: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  keep: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27,
    marginBottom: 15,
  },

  keepPara: {
    color: "white",
    fontSize: 18,
    lineHeight: 25,
  },

  mail: {
    flexDirection: "row",
    backgroundColor: "#454545",
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },

  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingHorizontal: 20,
  },

  font: {
    backgroundColor: "orange",
    padding: 18,
  },

  fontList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flexWrap: "wrap",
  },

  iconBox: {
    marginHorizontal: 8,
  },

  version: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },

  versionExplain: {
    color: "white",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default Contact;
