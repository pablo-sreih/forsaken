import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import { TextInput } from "react-native";

export default function AddPost() {
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
      <Header name="ADD POST" />
      <View style={styles.div}>
        <Text style={styles.label}>Choose Image:</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label1}>Choose From Gallery</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.label}>Add Caption</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View>
        <Text style={styles.label}>Choose Location</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
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
});
