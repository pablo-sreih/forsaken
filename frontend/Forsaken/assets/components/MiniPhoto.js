import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

const image = require("../images/back.jpg");
const windowWidth = Dimensions.get("screen").width;

export default function MiniPhoto() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={styles.container}
    >
      <Image style={styles.image} source={image} />
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
              <View style={{ flex: 1 }}>
                <Image source={image} style={styles.imageContainer} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    borderRadius: 10,
    aspectRatio: 1,
    width: windowWidth / 3.5,
    marginHorizontal: 1.9,
    marginVertical: 1.9,
  },

  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
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
    height: "60%",
    backgroundColor: "black",
    borderRadius: 20,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
});
