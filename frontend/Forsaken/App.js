import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginPage from './assets/pages/LoginPage';
import FeedPage from './assets/pages/FeedPage';
import ActivityPage from './assets/pages/ActivityPage';
import ProfilePage from './assets/pages/ProfilePage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FeedPage/> */}
      {/* <LoginPage/> */}
      {/* <ActivityPage/> */}
      <ProfilePage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
