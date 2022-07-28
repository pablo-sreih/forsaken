import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";
import { TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function AddPost() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Amrieh Hotel", value: "apple" },
    { label: "Kassouf Hotel", value: "kassouf" },
    { label: "Donna Maria", value: "donna" },
    { label: "Abandoned Aquarium", value: "aquarium" },
    { label: "Grand Hotel Aaley", value: "aaley" },
  ]);

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
      <TouchableOpacity style={styles.button2}>
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
});
