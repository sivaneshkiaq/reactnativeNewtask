import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';



const SectionOffer = () => {
  return (
    <View style={styles.aboutSection}>
      <View style={styles.orangeLine} />
      <Text style={styles.subTitle}>WHAT WE OFFER</Text>
      <Text style={styles.mainTitle}>
        The Luxury Apartment of Special Interiors
      </Text>
      <Text style={styles.description}>
        Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in
        ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non
        quae, fugiat nihil ad. Lorem ipsum dolor sit amet.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  aboutSection: {
    padding: 25,
    marginTop: 40,
  },
  orangeLine: {
    width: 40,
    height: 2,
    backgroundColor: '#ff5722',
    marginBottom: 10,
  },
  subTitle: {
    color: '#ff5722',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    lineHeight: 35,
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
});

export default SectionOffer;
