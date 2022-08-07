import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import FollowButton from "../components/FollowButton";
import MiniPhoto from "../components/MiniPhoto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfilePage({ navigation }) {
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [profilePic, setProfilePic] = useState();
  const [token, setToken] = useState("");
  const [images, setImages] = useState([]);
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [refreshing, setRefreshing] = useState(false);

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  const getData = () => {
    AsyncStorage.getItem("name").then((value) => setName(value));
    AsyncStorage.getItem("about").then((value) => setAbout(value));
    AsyncStorage.getItem("profile_pic").then((value) => setProfilePic(value));
  };

  async function getProfileInfo() {
    await fetch("http://192.168.0.108:8000/api/user_info", {
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
        setFollowers(response.followers);
        setFollowing(response.following);
        console.log(imagesArray);
      });
  }

  useEffect(() => {
    getToken();
    getProfileInfo();
    getData();
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
    <View style={styles.container}>
      <Header name="PROFILE" />
      {refreshing ? <ActivityIndicator /> : null}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getProfileInfo} />
        }
        contentContainerStyle={{ marginTop: 10, paddingBottom: 100 }}
      >
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Followers")}
            style={styles.infoContainer}
          >
            <Text style={styles.numbers}>{followers}</Text>
            <Text style={styles.category}>Followers</Text>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={styles.numbers}>{images.length}</Text>
            <Text style={styles.category}>Posts</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Followings")}
            style={styles.infoContainer}
          >
            <Text style={styles.numbers}>{following}</Text>
            <Text style={styles.category}>Following</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.description}>{about}</Text>
        </View>
        <View style={styles.photosContainer}>
          {images.map((image, index) => {
            return <MiniPhoto key={index} image={image} />;
          })}
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
