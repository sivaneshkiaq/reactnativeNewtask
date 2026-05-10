import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";

import { Video, ResizeMode } from "expo-av";

const { width } = Dimensions.get("window");



const About = () => {
  
  const video = require("../../../assets/video/Video.mp4");

  const image = require("../../../assets/image01.jpg");

  const cardData = [
    {
      id: 1,
      image: require("../../../assets/image.jpg"),
      category: "LIVING",
      title: "Meet the new creativity",
    },
    {
      id: 2,
      image: require("../../../assets/Image1.jpg"),
      category: "LIVING",
      title: "Meet the new creativity",
    },
    {
      id: 3,
      image: require("../../../assets/image2.webp"),
      category: "LIVING",
      title: "Meet the new creativity",
    },
  ];

  return (
    <View style={styles.container}>
    
      <View style={styles.aboutSection}>
        <View style={styles.orangeLine} />

        <Text style={styles.subTitle}>ABOUT US</Text>

        <Text style={styles.mainTitle}>
          We Provide You The Quality With Perfect Credibility
        </Text>

        <Text style={styles.description}>
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non
          quae, fugiat nihil ad. Lorem ipsum dolor sit amet.
        </Text>
      </View>

   
      <View style={styles.cardContainer}>
        {cardData.map((item) => (
          <ImageBackground
            key={item.id}
            source={item.image}
            style={styles.card}
            imageStyle={{ borderRadius: 15 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.categoryText}>{item.category}</Text>

              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          </ImageBackground>
        ))}
      </View>

   
      <View style={styles.video}>
        <Video
          source={video}
          style={styles.background}
          resizeMode={ResizeMode.COVER}
          isLooping
          shouldPlay
        />
      </View>


      <View style={styles.mainImg}>
        <Image source={image} style={styles.img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },

  aboutSection: {
    padding: 25,
    marginTop: 40,
  },

  orangeLine: {
    width: 40,
    height: 2,
    backgroundColor: "#ff5722",
    marginBottom: 10,
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

  description: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
  },

  cardContainer: {
    padding: 20,
    alignItems: "center",
  },

  card: {
    width: width - 40,
    height: 250,
    marginBottom: 20,
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 15,
    padding: 25,
    justifyContent: "center",
  },

  categoryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    width: "80%",
  },

  video: {
    height: 250,
  },

  background: {
    height: "100%",
    width: "100%",
  },

  mainImg: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 40,
    marginBottom: 30,
  },

  img: {
    width: width - 40,
    height: 400,
    borderRadius: 25,
  },
});

export default About;
