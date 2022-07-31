import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import FollowButton from "../components/FollowButton";
import MiniPhoto from "../components/MiniPhoto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

const image = require("../images/abandonedplaces/1.jpg");
const image1 = require("../images/abandonedplaces/2.jpg");
const image2 = require("../images/abandonedplaces/3.jpg");
const image3 = require("../images/abandonedplaces/4.jpg");
const image4 = require("../images/abandonedplaces/5.jpg");
const image5 = require("../images/abandonedplaces/6.jpg");
const image6 = require("../images/abandonedplaces/7.jpg");
const image7 = require("../images/abandonedplaces/8.jpg");

export default function ProfilePage() {
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [profilePic, setProfilePic] = useState();
  const [token, setToken] = useState("");
  const [images, setImages] = useState([]);

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  useEffect(() => {
    getToken();
    getData();
    getProfileInfo();
  }, []);

  const getData = () => {
    AsyncStorage.getItem("name").then((value) => setName(value));
    AsyncStorage.getItem("about").then((value) => setAbout(value));
    AsyncStorage.getItem("profile_pic").then((value) => setProfilePic(value));
  };

  async function getProfileInfo() {
    await fetch("http://192.168.0.103:8000/api/user_info", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        let imagesArray = [];
        for (var i = 0; i < response.photos.length; i++) {
          imagesArray.push(response.photos[i]["image"]);
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
      <Header name="PROFILE" />
      <ScrollView contentContainerStyle={{ marginTop: 10, paddingBottom: 100 }}>
        <View style={styles.profilePicContainer}>
          <Image
            style={{ flex: 1, resizeMode: "cover", borderRadius: 100 }}
            source={{ uri: profilePic }}
          />
        </View>
        <Text style={styles.profileName}>{name}</Text>
        <View style={{ marginTop: 10, alignSelf: "center" }}>
          {/* <FollowButton /> */}
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.infoContainer}>
            <Text style={styles.numbers}>980</Text>
            <Text style={styles.category}>Followers</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.numbers}>1412</Text>
            <Text style={styles.category}>Posts</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.numbers}>312</Text>
            <Text style={styles.category}>Following</Text>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{about}</Text>
        </View>
        <View style={styles.photosContainer}>
          {images
            ? images.map((image, index) => {
                return <MiniPhoto key={index} image={image} />;
              })
            : ""}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  profilePicContainer: {
    marginTop: 20,
    alignSelf: "center",
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 100,
  },

  profileName: {
    fontFamily: "montserratExtraBold",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },

  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },

  infoContainer: {
    alignItems: "center",
  },

  numbers: {
    fontSize: 15,
    fontFamily: "montserratRegular",
  },

  category: {
    fontSize: 15,
    fontFamily: "montserratBold",
  },

  description: {
    fontFamily: "montserratRegular",
    fontSize: 12,
    textAlign: "justify",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
  },

  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 20,
    marginRight: 20,
  },
});
