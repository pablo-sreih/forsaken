import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import { Rating } from "react-native-ratings";
import MiniPhoto from "../components/MiniPhoto";

export default function LocationPage({ route, navigation }) {
  const rateImage = require("../images/circleRating.png");
  const [images, setImages] = useState([]);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    await fetch("http://192.168.0.108:8000/api/get_location", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        location_id: route.params.id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response[0]["photos"][0]["image"]);
        let imagesArray = [];
        for (var i = 0; i < response[0]["photos"].length; i++) {
          imagesArray.push(response[0]["photos"][i]["image"]);
        }
        setImages(imagesArray);
        console.log(images);
      });
  }

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
      <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 100 }}>
        <View style={styles.reviewContainer}>
          <View>
            <Text style={styles.locationName}>{route.params.name}</Text>
            <Text style={styles.location}>{route.params.city}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Review", {
                name: route.params.name,
                id: route.params.id,
              })
            }
            style={styles.button}
          >
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
            startingValue={route.params.rating}
            style={{ alignSelf: "flex-start", marginLeft: 20, marginTop: 3 }}
          />
        </View>
        <View>
          <Text style={styles.description}>{route.params.description}</Text>
        </View>
        <View style={styles.photosContainer}>
          {images.map((image, index) => {
            return <MiniPhoto image={image} key={index} />;
          })}
        </View>
      </ScrollView>
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

  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
