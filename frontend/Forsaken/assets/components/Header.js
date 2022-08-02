import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";

export default function Header(props) {
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
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.name}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.headerOpt}>...</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
        presentationStyle="overFullScreen"
        transparent={true}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
          activeOpacity={1}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <Text style={styles.title}>Options</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("EditProfile");
                }}
                activeOpacity={0.8}
                style={styles.optionButton}
              >
                <Icon color={"white"} name="edit" />
                <Text style={styles.options}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButton} activeOpacity={0.8}>
                <Icon name="logout" color={"white"} />
                <Text style={styles.options}>Logout</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#7090B0",
    elevation: 10,
    height: "16%",
  },

  headerText: {
    color: "black",
    fontSize: 25,
    marginTop: 25,
    marginLeft: 20,
    fontFamily: "montserratExtraBold",
  },

  headerOpt: {
    color: "black",
    fontSize: 30,
    marginTop: 15,
    marginRight: 20,
    fontFamily: "montserratExtraBold",
  },

  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  modal: {
    flexDirection: "column",
    width: "90%",
    height: "32%",
    backgroundColor: "black",
    borderRadius: 20,
    padding: 20,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontFamily: "montserratBold",
    marginBottom: 30,
    alignSelf: "center",
  },

  options: {
    color: "white",
    fontFamily: "montserratSemiBold",
    fontSize: 20,
    marginLeft: 15,
  },

  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});
