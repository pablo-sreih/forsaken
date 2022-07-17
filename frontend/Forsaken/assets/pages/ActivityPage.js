import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity,Image, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import { useFonts } from 'expo-font';
import Header from '../components/Header';

const image = require ( '../logos/logo_emf.png' )

export default function ActivityPage() {

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Magnetometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Magnetometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener(result => {
        setData(result);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;

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
    <Header name='EMF TRACKER'/>
    <Image style={styles.image} source={image}/>
      <Text style={styles.emfTracker}>
        {Math.sqrt(x**2 + y**2 + z**2).toFixed(2)} μT
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    image:{
        marginTop: 40,
        width: 125,
        height: 125,
        alignSelf: 'center'
    },

    emfTracker: {
        marginTop: 40,
        fontFamily: 'montserratRegular',
        fontSize: 40,
        alignSelf: 'center'
    }

})

const round = Math.floor