import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import FollowerCard from "../components/FollowerCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native";

export default function FollowersPage() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getToken();
    getData();
  }, []);

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  async function getData() {
    await fetch("http://192.168.0.105:8000/api/getFollowers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response[1]["user"]);
        const array = [];
        for (let i = 0; i < response.length; i++) {
          array.push(response[i]["user"]);
        }
        setData(array);
      });
  }

  return (
    <View style={styles.container}>
      <Header name="FOLLOWERS" />
      {refreshing ? <ActivityIndicator /> : null}
      <ScrollView
        style={{ marginBottom: 80 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getData} />
        }
      >
        {data.map((user, index) => {
          return (
            <FollowerCard
              key={index}
              prof={user.profile_pic}
              name={user.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
