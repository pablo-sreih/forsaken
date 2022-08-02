import React from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import FollowerCard from "../components/FollowerCard";

export default function FollowersPage() {
  return (
    <View style={styles.container}>
      <Header name="FOLLOWERS" />
      <ScrollView>
        <FollowerCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
