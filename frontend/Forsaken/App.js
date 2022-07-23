import "react-native-gesture-handler";
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LandingPage from "./assets/pages/LandingPage";
import FeedPage from './assets/pages/FeedPage';
import ActivityPage from './assets/pages/ActivityPage';
import ProfilePage from './assets/pages/ProfilePage';
import MapPage from './assets/pages/MapPage';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './assets/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
      {/* <View style={styles.container}> */}
        {/* <FeedPage/> */}
        {/* <LoginPage/> */}
        {/* <ActivityPage/> */}
        {/* <ProfilePage/> */}
        {/* <MapPage/> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
