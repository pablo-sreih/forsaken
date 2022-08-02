import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";
import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddPost() {
  const [image, setImage] = useState(null);
  // const [data, setData] = useState(null);
  const [token, setToken] = useState("");

  // Use State for DropDown Menu
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  useEffect(() => {
    getData();
    getToken();
  }, []);

  async function getData() {
    await fetch("http://192.168.0.103:8000/api/testGetAllLocations", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const array = [];
        for (let i = 0; i < response.length; i++) {
          array.push(response[i]);
        }
        console.log(array);
        // setData(array);
        setItems(
          array.map((location) => ({
            label: location.name,
            value: location.id,
          }))
        );
      });
  }

  async function addPost() {
    await fetch("http://192.168.0.103:8000/api/add_post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
      body: JSON.stringify({
        location_id: value,
        caption: "caption",
        uri: image,
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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Header name="ADD POST" />
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
        <Text style={styles.label}>Choose Location</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.dropdown}
          placeholder="Select a Location"
        />
      </View>
      <TouchableOpacity onPress={addPost} style={styles.button2}>
        <Text style={styles.label1}>Save</Text>
      </TouchableOpacity>
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

  button2: {
    marginTop: 50,
    alignSelf: "center",
    borderWidth: 1,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    width: 180,
    borderColor: "#24A0ED",
    height: 40,
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

  dropdown: {
    borderColor: "#24A0ED",
    width: "89%",
    marginLeft: 20,
  },

  modal: {
    // flexDirection: "column",
    width: "90%",
    backgroundColor: "black",
    borderRadius: 20,
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
});
