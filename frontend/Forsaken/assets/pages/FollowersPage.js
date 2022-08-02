import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import FollowerCard from "../components/FollowerCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FollowersPage() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    getToken();
    getData();
  }, []);

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  async function getData() {
    await fetch("http://192.168.0.103:8000/api/getFollowers", {
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
      <ScrollView>
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
