import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Navbar from "@components/Navbar";
import Content from "@components/Content";
import Header from "@components/Header";
import About from "@components/About";
import ListSection from "@components/ListSection";
import SectionOffer from "@components/SectionOffer";
import Gallery from "@components/Gallery";
import SectionStats from "@components/SectionStats";
import Contact from "@components/Contact";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Navbar />
        <Header />
        <Content />
        <About />
        <SectionOffer />
        <ListSection />
        <Gallery />
        <SectionStats />
        <Contact />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
