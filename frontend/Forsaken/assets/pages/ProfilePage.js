import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import FollowButton from "../components/FollowButton";
import MiniPhoto from "../components/MiniPhoto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [profilePic, setProfilePic] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    AsyncStorage.getItem("name").then((value) => setName(value));
    AsyncStorage.getItem("about").then((value) => setAbout(value));
    AsyncStorage.getItem("profile_pic").then((value) => setProfilePic(value));
  };

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
      <View style={styles.profilePicContainer}>
        <Image
          style={{ flex: 1, resizeMode: "cover", borderRadius: 100 }}
          source={{ uri: profilePic }}
        />
      </View>
      <Text style={styles.profileName}>{name}</Text>
      <View style={{ marginTop: 10, alignSelf: "center" }}>
        <FollowButton />
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
      <ScrollView contentContainerStyle={styles.photosContainer}>
        <MiniPhoto />
        <MiniPhoto />
        <MiniPhoto />
        <MiniPhoto />
        <MiniPhoto />
        <MiniPhoto />
        <MiniPhoto />
        <MiniPhoto />
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
    justifyContent: "space-around",
    marginTop: 10,
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
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
  },

  photosContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 17,
    marginRight: 17,
    marginTop: 10,
  },
});
