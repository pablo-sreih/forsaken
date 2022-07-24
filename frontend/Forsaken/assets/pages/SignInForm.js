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

export default function SignInForm() {
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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View style={styles.formVIew}>
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
              <Text style={styles.buttonText}>Sign in</Text>
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
    fontSize: 20,
    borderWidth: 2,
    width: "90%",
    height: 60,
    marginBottom: 10,
    borderRadius: 20,
    padding: 15,
  },

  formVIew: {
    alignContent: "center",
    alignItems: "center",
  },

  button: {
    borderWidth: 2,
    backgroundColor: "black",
    width: "90%",
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontFamily: "montserratBold",
    fontSize: 20,
  },
});
