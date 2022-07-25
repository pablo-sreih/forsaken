import React from "react";
import { Formik } from "formik";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useFonts } from "expo-font";

export default function SignUpForm() {
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
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          fetch("http://192.168.0.129:8000/api/register", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password,
            }),
          })
            .then((response) => response.json())
            .then((response) => {
              console.log(response);
            });
        }}
      >
        {(props) => (
          <View style={styles.formVIew}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={props.handleSubmit}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontFamily: "montserratSemiBold",
    fontSize: 17,
    borderBottomWidth: 2,
    width: "85%",
    height: 60,
    marginBottom: 10,
  },

  formVIew: {
    alignContent: "center",
    alignItems: "center",
  },

  button: {
    marginTop: 30,
    borderWidth: 2,
    backgroundColor: "black",
    width: "86%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontFamily: "montserratBold",
    fontSize: 20,
  },
});
