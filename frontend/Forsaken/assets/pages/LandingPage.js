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

import SignInForm from "./SignInForm";

const image = require("../images/back.jpg");
const logo = require("../logos/logo_white.png");

export default function LandingPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setmodal2Visible] = useState(false);

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
            <Text style={styles.title}>Sign in</Text>
            {/* <View style={styles.closeIcon}> */}
            {/* <Icon name="close" onPress={() => setModalVisible(false)} /> */}
            {/* </View> */}
            <SignInForm />
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
            <Text style={styles.title}>Sign up</Text>
            {/* <View style={styles.closeIcon}> */}
            {/* <Icon name="close" onPress={() => setmodal2Visible(false)} /> */}
            {/* </View> */}
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
            onPress={() => setmodal2Visible(true)}
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
    backgroundColor: "white",
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
    flexDirection: "column",
    height: "85%",
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
});
