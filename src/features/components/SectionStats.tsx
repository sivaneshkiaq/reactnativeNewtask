import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';



const SectionStats = () => {

  const statsData = [
    {
      id: 1,
      number: "1500",
      title: "PROJECTS",
    },
    {
      id: 2,
      number: "2360",
      title: "AWARDS",
    },
  ];
  return (
    <View style={styles.statsSection}>
      <View>
        <View style={styles.main}>
          <View style={styles.orangeLine} />
          <Text style={styles.subTitle}>STATS</Text>
        </View>
        <Text style={styles.mainTitle}>MODERN OF LIVING</Text>
        <Text style={styles.description}>
          Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
          in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non
          quae, fugiat nihil ad. Lorem ipsum dolor sit amet.
        </Text>
      </View>
      <View style={styles.project}>
        {statsData.map((item) => (
          <View key={item.id} style={styles.pointer}>
            <Text style={styles.num}>{item.number}</Text>

            <Text style={styles.str}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statsSection: {
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
  main:{
    flexDirection:"row",
    alignItems:"center"
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
  project:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:40,  },
    num:{
    fontWeight:"bold",
    fontSize:34,
  },
  pointer:{
    marginLeft:30,
    marginRight:30,

  },
  str:{
    fontWeight:"bold",
    color:"orange",
    fontSize:20
  }
});

export default SectionStats;
