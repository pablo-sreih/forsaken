import React from "react";
import { Formik } from "formik";
import { TextInput, View, StyleSheet } from "react-native";

export default function SignInForm() {
  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <View>
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
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {},
});
