import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import { Rating } from "react-native-ratings";

export default function LocationPage({ route }) {
  const rateImage = require("../images/circleRating.png");

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
      <Header name="LOCATION" />
      <View style={styles.reviewContainer}>
        <View>
          <Text style={styles.locationName}>{route.params.name}</Text>
          <Text style={styles.location}>{route.params.city}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.addReviewText}>Add Review</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Rating
          type="custom"
          ratingImage={rateImage}
          ratingBackgroundColor="#E4E4E4"
          ratingCount={5}
          imageSize={8}
          readonly={true}
          startingValue={3.5}
          style={{ alignSelf: "flex-start", marginLeft: 20, marginTop: 3 }}
        />
      </View>
      <View>
        <Text style={styles.description}>{route.params.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  reviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
  },

  locationName: {
    fontFamily: "montserratBold",
    fontSize: 15,
  },

  location: {
    fontFamily: "montserratRegular",
    fontSize: 12,
  },

  button: {
    borderWidth: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 108,
    borderColor: "#E6E6E6",
  },

  addReviewText: {
    fontFamily: "montserratSemiBold",
  },

  description: {
    fontFamily: "montserratRegular",
    fontSize: 12,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
  },
});
