import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function Content() {
  const video = require("../../../assets/video/Video.mp4");

  return (
    <View>
      <View style={styles.main}>
        <Text style={styles.title}>Reflect Your Style</Text>
      </View>

      <View style={styles.para}>
        <Text style={styles.paraText}>
          Interior design is the art and science of enhancing a building's
          interior to achieve.
        </Text>
      </View>

      <View style={styles.container}>
        <Video
          source={video}
          style={styles.backgroundVideo}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: 80,
    justifyContent: "center",
  },

  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },

  para: {
    backgroundColor: "#333",
  },

  paraText: {
    color: "white",
    padding: 35,
    fontSize: 20,
    lineHeight:22,
  },

  container: {
    height: 250,
    
  },

  backgroundVideo: {
    width: "100%",
    height: "100%",
  },
});
