import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function FollowButton(props) {
  useEffect(() => {
    getToken();
    props.state === true
      ? (setFollowColor("#24A0ED"),
        setFollowText("Following"),
        setFollowTextColor("white"))
      : (setFollowColor("white"),
        setFollowText("Follow"),
        setFollowTextColor("black"));
  }, []);

  const [followColor, setFollowColor] = useState(
    props.state === true ? "#24A0ED" : "white"
  );
  const [followText, setFollowText] = useState(
    props.state === true ? "Following" : "Follow"
  );
  const [followTextColor, setFollowTextColor] = useState(
    props.state === true ? "white" : "black"
  );
  const [token, setToken] = useState("");

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  async function follow() {
    await fetch("http://192.168.0.108:8000/api/follow", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
      body: JSON.stringify({
        user_id: props.id
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  async function unfollow() {
    await fetch("http://192.168.0.108:8000/api/unfollow", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
      body: JSON.stringify({
        user_id: props.id
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
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
    <TouchableOpacity
      onPress={() => {
        followColor === "white"
          ? (follow(), setFollowColor("#24A0ED"),
            setFollowText("Following"),
            setFollowTextColor("white"))
          : (unfollow(), setFollowColor("white"),
            setFollowText("Follow"),
            setFollowTextColor("black"));
      }}
      style={[styles.button, { backgroundColor: followColor }]}
    >
      <Text style={[styles.followText, { color: followTextColor }]}>
        {followText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 108,
    borderColor: "#E6E6E6",
  },

  followText: {
    fontFamily: "montserratSemiBold",
  },
});
