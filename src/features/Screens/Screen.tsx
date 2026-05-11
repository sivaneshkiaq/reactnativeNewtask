import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Navbar from "@/src/features/components/Navbar";
import Content from "@/src/features/components/Content";
import Header from "@/src/features/components/Header";
import About from "@/src/features/components/About";
import ListSection from "@/src/features/components/ListSection";
import SectionOffer from "@/src/features/components/SectionOffer";
import Gallery from "@/src/features/components/Gallery";
import SectionStats from "@/src/features/components/SectionStats";
import Contact from "@/src/features/components/Contact";
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
