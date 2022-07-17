import React, { useState, useEffect } from 'react';
import { Vibration, StyleSheet, Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';

const image = require ( '../logos/logo_emf.png' )

export default function ActivityPage() {

  const [emf, setEmf] = useState([])

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

  const microTesla = Math.sqrt(x**2 + y**2 + z**2).toFixed(2)

  function handlePress(){
    setEmf([microTesla, ...emf]);
  }

  function handleReset() {
    setEmf([])
  }

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
        {microTesla}  μT
        {microTesla > 100 ? Vibration.vibrate() : Vibration.cancel()}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => handlePress()} style={styles.button}>
          <Text style={styles.buttonText}>Add Point</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
      {emf.map((reading, index, emf) => {
        return(
          <View key={index} style={styles.readingsView}>
            <Image style={styles.readingsImage} source={image}/>
            <Text style={styles.readings}>{reading}</Text>
          </View>
        )
      })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    image:{
        marginTop: 20,
        width: 125,
        height: 125,
        alignSelf: 'center'
    },

    emfTracker: {
        marginTop: 20,
        fontFamily: 'montserratRegular',
        fontSize: 40,
        alignSelf: 'center'
    },

    button: {
      alignSelf: 'center',
      padding: 10,
      borderWidth: 2,
      borderRadius: 10,
      marginTop: 20,
      width: '35%',
      borderColor: '#E6E6E6',
      marginRight: 5,
      marginLeft: 5
    },

    buttonText: {
      alignSelf: 'center',
      fontFamily: 'montserratSemiBold',
      fontSize: 15
    },

    readings: {
      fontSize: 20,
      fontFamily: 'montserratRegular',
      marginLeft: 10
    },

    readingsImage: {
      width: 35,
      height: 35,
    },

    readingsView: {
      marginLeft: 20,
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center'
    },

    scroll: {
      borderTopWidth: 1,
      marginTop: 20
    }

})
