import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Switch } from "react-native";
import { useFonts } from "expo-font";
import Card from "../components/Card";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function FeedPage({ navigation }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://192.168.0.103:8000/api/testAPI", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < response.length; i++) {
          setImages([...images, response[i]["image"]]);
        }
        console.log(images);
      });
  }

  // Prevents Going Back to Landing Page
  useEffect(() =>
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    })
  );

  const [loaded] = useFonts({
    montserratBlack: require("../fonts/Montserrat-Black.ttf"),
    montserratExtraBold: require("../fonts/Montserrat-ExtraBold.ttf"),
    montserratBold: require("../fonts/Montserrat-Bold.ttf"),
    montserratSemiBold: require("../fonts/Montserrat-SemiBold.ttf"),
    montserratRegular: require("../fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header name="DISCOVER" />
      <ScrollView>
        {images.map((image, index) => {
          return (
            <Card
              key={index}
              navigation={navigation}
              image={image}
              lat={35.12}
              long={35.13}
            />
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
