import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import FollowButton from "../components/FollowButton";
import MiniPhoto from "../components/MiniPhoto";
import { useState, useEffect } from "react";
import { RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfilePageByID({ navigation, route }) {
  const [name, setName] = useState();
  const [about, setAbout] = useState();
  const [profilePic, setProfilePic] = useState();
  const [images, setImages] = useState([]);
  const [followers, setFollowers] = useState();
  const [following, setFollowing] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [token, setToken] = useState("");
  const [followed, setFollowed] = useState([]);

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  async function getData() {
    await fetch("http://192.168.0.108:8000/api/getFollowings", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response[1]["user"]);
        const array = [];
        for (let i = 0; i < response.length; i++) {
          array.push(response[i]["follower_id"]);
        }
        setFollowed(array);
        console.log(array);
      });
  }

  async function getProfileInfo() {
    await fetch("http://192.168.0.108:8000/api/getUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: route.params.id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        let imagesArray = [];
        for (var i = 0; i < response.photos.length; i++) {
          imagesArray.push(response.photos[i]["image"]);
        }
        setImages(imagesArray);
        setName(response.user["name"]);
        setAbout(response.user["about"]);
        setProfilePic(response.user["profile_pic"]);
        setFollowers(response.followers);
        setFollowing(response.followings);
        console.log(followed.includes(route.params.id));
      });
  }

  useEffect(() => {
    getToken();
    getData();
    getProfileInfo();
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
          <RefreshControl
            refreshing={refreshing}
            onRefresh={(getProfileInfo, getData)}
          />
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
        <View style={{ marginTop: 10, alignSelf: "center", marginBottom: 10 }}>
          <FollowButton id={route.params.id} state={followed.includes(route.params.id)} />
        </View>
        <View style={styles.profileInfo}>
          <View
            onPress={() => navigation.navigate("Followers")}
            style={styles.infoContainer}
          >
            <Text style={styles.numbers}>{followers}</Text>
            <Text style={styles.category}>Followers</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.numbers}>{images.length}</Text>
            <Text style={styles.category}>Posts</Text>
          </View>
          <View
            onPress={() => navigation.navigate("Followings")}
            style={styles.infoContainer}
          >
            <Text style={styles.numbers}>{following}</Text>
            <Text style={styles.category}>Following</Text>
          </View>
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
