import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function FollowersPage() {
  return (
    <View style={styles.container}>
      <Header name="FOLLOWERS" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
