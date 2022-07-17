import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import { useFonts } from 'expo-font';
import Header from '../components/Header';

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
    montserratBold: require('../fonts/Montserrat-Bold.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
    <Header name='EMF TRACKER'/>
      <Text style={styles.text}>Magnetometer:</Text>
      <Text style={{fontSize: 20}}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
      <Text>μT formula: Math.sqrt(x**2 + y**2 + z**2).toFixed(2)</Text>
      <Text style={{fontFamily: 'montserratBold',fontSize: 40}}>
        microtesla: {Math.sqrt(x**2 + y**2 + z**2).toFixed(2)} μT
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})

const round = Math.floor