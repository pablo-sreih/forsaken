import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import FollowButton from "./FollowButton";
import { Icon } from "react-native-elements";
import { useState, useEffect } from "react";
import * as Sharing from "expo-sharing";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Card(props) {
  const [color, setColor] = useState("black");
  const [likes, setLikes] = useState(props.likes);
  const [selectedImage, setSelectedImage] = useState(null);

  const [token, setToken] = useState("");

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  useEffect(() => {
    getToken();
    setSelectedImage(props.image);
  }, []);

  async function like() {
    await fetch("http://192.168.0.108:8000/api/addLike", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
      body: JSON.stringify({
        photo_id: props.photo_id
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  async function unlike() {
    await fetch("http://192.168.0.108:8000/api/deleteLike", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
      body: JSON.stringify({
        photo_id: props.photo_id
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  let openShareDialogAsync = async () => {
    await Sharing.shareAsync(selectedImage);
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
    <View>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ProfileById", { id: props.id })
          }
          style={styles.profile}
        >
          <Image
            source={{ uri: props.prof }}
            style={{ flex: 1, resizeMode: "cover", borderRadius: 100 }}
          />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{props.prof_name}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
        {/* <View style={{ marginRight: 20 }}>
          <FollowButton />
        </View> */}
      </View>
      <View style={styles.container}>
        <Image
          style={{ flex: 1, resizeMode: "cover", borderRadius: 12 }}
          source={{ uri: props.image }}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoChild}>
            <Icon name="favorite" color={"red"} size={14} />
            <Text style={styles.infoText}>{likes}</Text>
          </View>
          <View style={styles.infoChild}>
            <Icon name="track-changes" color={"black"} size={14} />
            <Text style={styles.infoText}>{props.emf}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.locationName}>{props.name}</Text>
          <Text style={styles.location}>{props.city}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              color === "black"
                ? (like(), setColor("red"), setLikes(likes + 1))
                : (unlike(), setColor("black"), setLikes(likes - 1));
            }}
            style={styles.iconContainer}
          >
            <Icon color={color} name="favorite" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openShareDialogAsync}
            style={styles.iconContainer}
          >
            <Icon name="share" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Location", {
                name: props.name,
                city: props.city,
                id: props.location_id,
                description: props.description,
              })
            }
            style={styles.iconContainer}
          >
            <Icon name="info" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("MapByLocation", {
                lat: props.lat,
                long: props.long,
              })
            }
            style={styles.iconContainer}
          >
            <Icon name="room" />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View>
        <TouchableOpacity style={styles.commentTextContainer}>
          <Icon name="chevron-right" />
          <Text style={{ fontFamily: "montserratSemiBold", fontSize: 15 }}>
            Comments
          </Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.borderLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "gray",
    width: "90%",
    height: 240,
    borderRadius: 12,
  },

  profileContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 20,
  },

  profile: {
    width: 55,
    height: 55,
    backgroundColor: "gray",
    borderRadius: 50,
  },

  name: {
    fontFamily: "montserratSemiBold",
    fontSize: 15,
  },

  time: {
    fontFamily: "montserratRegular",
    fontSize: 12,
    opacity: 0.3,
    marginTop: -4,
  },

  profileInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },

  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },

  icons: {
    flexDirection: "row",
  },

  iconContainer: {
    marginLeft: 5,
    marginTop: 10,
    backgroundColor: "#E0E0E0",
    padding: 7,
    borderRadius: 5,
  },

  bottomTextContainer: {
    marginTop: 10,
  },

  locationName: {
    fontSize: 15,
    fontFamily: "montserratBold",
    flexWrap: "wrap",
  },

  location: {
    marginTop: -2,
    fontSize: 12,
    fontFamily: "montserratRegular",
  },

  commentTextContainer: {
    marginLeft: 13,
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  borderLine: {
    marginTop: 30,
    marginBottom: 10,
    alignSelf: "center",
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },

  infoChild: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
  },

  infoContainer: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 8,
    position: "absolute",
    flexDirection: "row",
    margin: 9,
  },

  infoText: {
    marginLeft: 5,
    fontFamily: "montserratRegular",
    fontSize: 13,
  },
});
