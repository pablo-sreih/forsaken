import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Card from '../components/Card';
import Header from '../components/Header';


export default function FeedPage() {

  const [loaded] = useFonts({
    montserratBlack : require('../fonts/Montserrat-Black.ttf'),
    montserratExtraBold: require('../fonts/Montserrat-ExtraBold.ttf'),
    montserratBold: require('../fonts/Montserrat-Bold.ttf'),
    montserratSemiBold: require ('../fonts/Montserrat-SemiBold.ttf'),
    montserratRegular: require ('../fonts/Montserrat-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header name="DISCOVER"/>
      <ScrollView>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});