import * as React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function MapPageByLocation({ route }) {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: route.params.lat,
          longitude: route.params.long,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        style={styles.map}
        provider={"google"}
      >
        <Marker
          title="Beirut"
          coordinate={{
            latitude: route.params.lat,
            longitude: route.params.long,
          }}
          draggable={true}
        ></Marker>
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
