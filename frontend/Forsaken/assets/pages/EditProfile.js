import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import { TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export default function EditProfile() {
  const [image, setImage] = useState(null);
  const [token, setToken] = useState("");

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  useEffect(() => {
    getToken();
  }, []);

  async function editPhoto() {
    await fetch("http://192.168.0.105:8000/api/addProfilePic", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
      body: JSON.stringify({
        profile_pic: image,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
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
      <Header name="EDIT PROFILE" />
      <ScrollView>
        <View style={styles.div}>
          <Text style={styles.label}>Choose Image:</Text>
          <TouchableOpacity onPress={pickImage} style={styles.button}>
            <Text style={styles.label1}>Choose From Gallery</Text>
          </TouchableOpacity>
        </View>
        {image && (
          <View style={styles.modal}>
            <Image source={{ uri: image }} style={styles.imageContainer} />
          </View>
        )}
        <View>
          <Text style={styles.label}>Edit About</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <TouchableOpacity onPress={editPhoto} style={styles.button2}>
          <Text style={styles.label1}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  label: {
    fontFamily: "montserratBold",
    margin: 20,
  },
  label1: {
    fontFamily: "montserratBold",
    // color: "white",
  },
  div: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    // backgroundColor: "#24A0ED",
    borderWidth: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 180,
    borderColor: "#24A0ED",
    marginRight: 20,
  },

  input: {
    height: 100,
    borderWidth: 1,
    borderColor: "#24A0ED",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    textAlignVertical: "top",
    padding: 10,
  },

  button2: {
    marginTop: 50,
    alignSelf: "center",
    borderWidth: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 180,
    borderColor: "#24A0ED",
  },

  modal: {
    marginTop: 15,
    width: 200,
    backgroundColor: "black",
    borderRadius: 100,
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },
});
