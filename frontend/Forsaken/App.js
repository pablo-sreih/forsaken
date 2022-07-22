import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginPage from './assets/pages/LoginPage';
import FeedPage from './assets/pages/FeedPage';
import ActivityPage from './assets/pages/ActivityPage';
import ProfilePage from './assets/pages/ProfilePage';
import MapPage from './assets/pages/MapPage';

export default function App() {
  return (
      <View style={styles.container}>
        {/* <FeedPage/> */}
        {/* <LoginPage/> */}
        {/* <ActivityPage/> */}
        {/* <ProfilePage/> */}
        <MapPage/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
