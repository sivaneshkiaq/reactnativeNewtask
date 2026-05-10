import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

export default function Header() {
  const designs = [
    {
      id: 1,
      title: "Interior Designs.",
      subtitle: "Inspirational Interiors",
      image: require("../../../assets/image.jpg"),
    },
    {
      id: 2,
      title: "Decorate Ideas.",
      subtitle: "Designing Dreams",
      image: require("../../../assets/Image1.jpg"),
    },
    {
      id: 3,
      title: "Office Designs.",
      subtitle: "Make Your Dream Office",
      image: require("../../../assets/image2.webp"),
    },
  ];

  return (
    <View style={styles.container}>
      <Swiper autoplay dotColor="gray" activeDotColor="white">
        {designs.map((item) => (
          <ImageBackground
            key={item.id}
            source={item.image}
            style={styles.slide}
            blurRadius={4}
          >
            <View style={styles.overlay}>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.title}>{item.title}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { height: 350 },
  slide: { 
    
    flex: 1,
    justifyContent: "center" 
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  subtitle: {
     color: "white", 
     fontSize: 20, 
     marginBottom: 10 
    },
  title: { 
    color: "white",
     fontSize: 40, 
     fontWeight: "bold",
      marginBottom: 25 
    },
  button: {
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "600" 
  },
});
