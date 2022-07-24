import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font/build/FontHooks";
import { Icon } from "react-native-elements";

const image = require("../images/back.jpg");
const logo = require("../logos/logo_white.png");

export default function LandingPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [loaded] = useFonts({
    montserratBlack: require("../fonts/Montserrat-Black.ttf"),
    montserratExtraBold: require("../fonts/Montserrat-ExtraBold.ttf"),
    montserratBold: require("../fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        presentationStyle="overFullScreen"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text>Hello from modal</Text>
            <Icon name="close" onPress={() => setModalVisible(false)} />
            <TextInput>SignIn</TextInput>
          </View>
        </View>
      </Modal>

      <ImageBackground style={styles.back} resizeMode="cover" source={image}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.button}
          >
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.button}
          >
            <Text style={styles.text}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: "20%",
    paddingBottom: "20%",
  },

  logo: {
    width: "65%",
    resizeMode: "contain",
    alignSelf: "center",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
  },

  text: {
    fontSize: 20,
    fontFamily: "montserratBold",
  },

  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "center",
  },

  modal: {
    height: "70%",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
