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
  Dimensions,
} from "react-native";
import { useFonts } from "expo-font/build/FontHooks";
import { Video } from "expo-av";

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const image = require("../images/back2.jpg");
const logo = require("../logos/FORSAKEN.png");
const video = require("../videos/video.mp4");
const { width, height } = Dimensions.get("window");

export default function LandingPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setmodal2Visible] = useState(false);

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
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        presentationStyle="overFullScreen"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.title}>Sign in</Text>
            <SignInForm navigation={navigation} />
          </View>
        </View>
      </Modal>

      <Modal
        visible={modal2Visible}
        animationType="slide"
        onRequestClose={() => setmodal2Visible(false)}
        presentationStyle="overFullScreen"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.title}>Create Account</Text>
            <SignUpForm navigation={navigation} />
          </View>
        </View>
      </Modal>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* <Video
          style={styles.back}
          resizeMode="cover"
          source={video}
          shouldPlay={true}
          isLooping={true}
        /> */}
        <Image source={image} style={styles.back} />
        <Image source={logo} style={styles.logo} />
        <Text style={styles.slogan}>It's like being Home Alone</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setmodal2Visible(true)}
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text style={styles.text}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    position: "absolute",
    height: height,
    width: width,
  },

  logo: {
    marginTop: 60,
    width: 170,
    height: 170,
    resizeMode: "contain",
    alignSelf: "center",
  },

  buttons: {
    marginBottom: 50,
  },

  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    width: "60%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
  },

  text: {
    color: "black",
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
    flexDirection: "column",
    height: "75%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontFamily: "montserratBold",
    marginBottom: 30,
    alignSelf: "center",
  },

  slogan: {
    fontSize: 14,
    fontFamily: "montserratRegular",
    marginTop: -320,
    alignSelf: "center",
    color: "white",
    textAlign: "center",
  },
});
