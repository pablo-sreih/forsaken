import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MapPage() {
  return (
    <View style={styles.container}>
      <MapView 
      initialRegion={{
        latitude: 33.8547,
        longitude: 35.8623,
        latitudeDelta: 0.999,
        longitudeDelta: 0.999,
      }}
      style={styles.map}>

        <Marker
            coordinate={{
            latitude: 33.8547,
            longitude: 35.8623,
        }}
        pinColor='black'
        draggable={true}
        >

        </Marker>
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 20,
  },
});