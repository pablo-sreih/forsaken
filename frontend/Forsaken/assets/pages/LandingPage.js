import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font/build/FontHooks';

const image = require ( '../images/back.jpg' )
const logo = require ( '../logos/logo_white.png' )


export default function LandingPage() {

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
      <ImageBackground style={styles.back} resizeMode="cover" source={image}>
        <Image source={logo} style={styles.logo}/>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => alert('Button Pressed')} style={styles.button}>
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Button Pressed')} style={styles.button}>
            <Text style={styles.text}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  back: {
    flex: 1,
    justifyContent:'space-between',
    paddingTop: '20%',
    paddingBottom: '20%',
  },

  logo: {
    flex: 0.3,
    width: '65%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    width: '60%',
    alignSelf: 'center',
    borderRadius:10,
    marginTop: 10,
  },

  text: {
    fontSize: 20,
    fontFamily: 'montserratBold'
  }
});