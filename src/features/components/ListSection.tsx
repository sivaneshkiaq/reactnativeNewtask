import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ListSection = () => {
  const data = [
    {
      id: 1,
      title: "Residential",
      icon: "https://cdn-icons-png.flaticon.com/512/2544/2544087.png",
    },
    {
      id: 2,
      title: "Commercial",
      icon: "https://cdn-icons-png.flaticon.com/512/2163/2163350.png",
    },
    {
      id: 3,
      title: "Industries",
      icon: "https://cdn-icons-png.flaticon.com/512/2910/2910793.png",
    },
    {
      id: 4,
      title: "Office",
      icon: "https://cdn-icons-png.flaticon.com/512/2065/2065064.png",
    },
  ];

  return (
   
      <View style={styles.container}>
        {data.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <View style={styles.iconContainer}>
              <Image
                source={{ uri: item.icon }}
                style={styles.iconStyle}
                tintColor="#e65100"
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>
                Lorem ipsum dolor sit amet, elit.
              </Text>
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.readMoreBtn}>
          <Text style={styles.btnText}>Read More</Text>
        </TouchableOpacity>
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#fff",
    flex: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  iconContainer: {
    marginRight: 20,
  },
  iconStyle: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
  },
  readMoreBtn: {
    backgroundColor: "#fbc02d",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 10,
    elevation: 3,
  },
  btnText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ListSection;
