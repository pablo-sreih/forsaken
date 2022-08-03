import React from "react";
import Header from "../components/Header";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { Rating } from "react-native-elements";
import { useEffect } from "react";

export default function AddReview({ route }) {
  const rateImage = require("../images/circleRating.png");

  async function rate(rating) {
    await fetch("http://192.168.0.105:8000/api/addRating", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location_id: route.params.id,
        rating: rating,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  useEffect(() => {
    console.log(JSON.stringify(route.params.id));
  }, []);

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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header name="ADD REVIEW" />
      <Text style={styles.title}>{route.params.name}</Text>
      <View>
        <Rating
          type="custom"
          ratingImage={rateImage}
          ratingBackgroundColor="#E4E4E4"
          ratingCount={5}
          imageSize={30}
          readonly={false}
          startingValue={0}
          showRating
          onFinishRating={(rating) => {
            rate(rating);
          }}
          style={{ alignSelf: "center", marginLeft: 20, marginTop: 3 }}
        />
      </View>
      <Text style={styles.review}>Review</Text>
      <View style={{ alignItems: "center" }}>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.followText}>Add Review</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    fontFamily: "montserratBold",
    fontSize: 20,
    margin: 20,
  },

  review: {
    fontFamily: "montserratBold",
    marginLeft: 20,
    marginTop: 20,
  },

  input: {
    marginTop: 10,
    textAlignVertical: "top",
    borderWidth: 1,
    width: "90%",
    height: 150,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    marginTop: 50,
    borderWidth: 1,
    height: 40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 200,
    borderColor: "#E6E6E6",
  },

  followText: {
    fontFamily: "montserratBold",
  },
});
