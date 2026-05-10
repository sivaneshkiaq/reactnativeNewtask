import React from 'react';
import {View,Text,StyleSheet,Image} from "react-native";

export default function Gallery() {
    const image1 = require("../../../assets/pexel1.jpg");
    const image2 = require("../../../assets/pexel2.jpg");
    const image3 = require("../../../assets/pexel3.jpg");
    const image4 = require("../../../assets/pexel4.jpg");
    const image5 = require("../../../assets/pexel5.jpg");
    const image6 = require("../../../assets/pexel6.jpg");
  return (
    <View style={styles.gallerySection}>
      <View>
        <View style={styles.main}>
          <View style={styles.orangeLine} />
          <Text style={styles.subTitle}>GALLERY</Text>
        </View>
        <Text style={styles.mainTitle}>Latest Projects</Text>
      </View>
      <View style={styles.imageMain}>
        <Image source={image1} style={styles.img} />
        <Image source={image2} style={styles.img} />
      </View>
      <View style={styles.imageMain}>
        <Image source={image3} style={styles.img} />
        <Image source={image4} style={styles.img} />
      </View>
      <View style={styles.imageMain}>
        <Image source={image5} style={styles.img} />
        <Image source={image6} style={styles.img} />
      </View>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gallerySection: {
    padding: 25,
    marginTop: 40,
    alignItems: "center",
  },
  orangeLine: {
    width: 40,
    height: 2,
    backgroundColor: "#ff5722",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    color: "#ff5722",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    lineHeight: 35,
    marginBottom: 15,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageMain: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
  },
  img: {
    width: 180,
    height: 250,
    borderRadius: 15,
    marginRight: 9,
  },
});
