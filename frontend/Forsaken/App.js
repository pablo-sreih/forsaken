import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import LandingPage from "./assets/pages/LandingPage";
import TabNavigator from "./assets/navigation/TabNavigator";
import LocationPage from "./assets/pages/LocationPage";
import ProfilePage from "./assets/pages/ProfilePage";
import InitialNavigator from "./assets/navigation/InitialNavigator";
import AddReview from "./assets/pages/AddReview";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <AddReview /> */}
        <TabNavigator />
        {/* <InitialNavigator /> */}
        {/* <LocationPage/> */}
        {/* <ProfilePage /> */}
        {/* <LandingPage /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
