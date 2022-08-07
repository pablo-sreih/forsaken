import * as React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";

export default function MapPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://192.168.0.108:8000/api/testGetAllLocations", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const array = [];
        for (let i = 0; i < response.length; i++) {
          array.push(response[i]);
        }
        console.log(array);
        setData(array);
      });
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 33.8547,
          longitude: 35.8623,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        style={styles.map}
        provider={"google"}
      >
        {data.map((data, index) => {
          return (
            <Marker
              key={index}
              title={data.name}
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
              draggable={false}
              onPress={() =>
                props.navigation.navigate("Location", {
                  id: data.id,
                  name: data.name,
                  city: data.city,
                  description: data.description,
                  rating: data.avg_rating,
                })
              }
            ></Marker>
          );
        })}
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
