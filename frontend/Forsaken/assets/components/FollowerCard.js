import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function FollowerCard(props) {
  return (
    <View>
      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Image
            source={{ uri: props.prof }}
            style={{ flex: 1, resizeMode: "cover", borderRadius: 100 }}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 20,
  },

  profile: {
    width: 55,
    height: 55,
    backgroundColor: "gray",
    borderRadius: 50,
  },

  name: {
    fontFamily: "montserratSemiBold",
    fontSize: 15,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
});
