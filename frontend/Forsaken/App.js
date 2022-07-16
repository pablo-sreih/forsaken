import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginPage from './assets/pages/LoginPage';
import FeedPage from './assets/pages/FeedPage';

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPage/>
      {/* <LoginPage/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
