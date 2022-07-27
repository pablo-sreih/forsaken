import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

const image = require("../images/back.jpg");
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("window");

export default function MiniPhoto() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    borderRadius: 10,
    aspectRatio: 1,
    width: windowWidth / 3.5,
    marginHorizontal: 1.9,
    marginVertical: 1.9,
  },

  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});
