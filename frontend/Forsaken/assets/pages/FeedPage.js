import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Card from '../components/Card';

export default function FeedPage() {

  const [loaded] = useFonts({
    montserratBlack : require('../fonts/Montserrat-Black.ttf'),
    montserratExtraBold: require('../fonts/Montserrat-ExtraBold.ttf'),
    montserratBold: require('../fonts/Montserrat-Bold.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DISCOVER</Text>
        <Text onPress={() => alert('options')} style={styles.headerOpt}>...</Text>
      </View>
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

  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#7090B0',
    elevation: 20,
    height: '16%'
  },

  headerText:{
    color: 'black',
    fontSize: 25,
    marginTop: 25,
    marginLeft: 20,
    fontFamily: 'montserratExtraBold',
  },

  headerOpt:{
    color: 'black',
    fontSize: 30,
    marginTop: 15,
    marginRight: 20,
    fontFamily: 'montserratExtraBold',
  }
});