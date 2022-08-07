import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Card from "../components/Card";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RefreshControl } from "react-native";
import { ActivityIndicator } from "react-native";

export default function FeedPage({ navigation }) {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () =>
    await AsyncStorage.getItem("token").then((token) => {
      setToken(token);
    });

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://192.168.0.108:8000/api/testAPI", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer  ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const array = [];
        for (let i = 0; i < response.length; i++) {
          array.push(response[i]);
        }
        setData(array);
        console.log(array);
      });
  }

  // Prevents Going Back to Landing Page
  useEffect(() =>
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    })
  );

  const [loaded] = useFonts({
    montserratBlack: require("../fonts/Montserrat-Black.ttf"),
    montserratExtraBold: require("../fonts/Montserrat-ExtraBold.ttf"),
    montserratBold: require("../fonts/Montserrat-Bold.ttf"),
    montserratSemiBold: require("../fonts/Montserrat-SemiBold.ttf"),
    montserratRegular: require("../fonts/Montserrat-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header name="DISCOVER" />
      {refreshing ? <ActivityIndicator /> : null}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getData} />
        }
      >
        {data.map((data, index) => {
          return (
            <Card
              key={index}
              id={data.user["id"]}
              navigation={navigation}
              image={data.image}
              prof={data.user["profile_pic"]}
              lat={data.location["latitude"]}
              long={data.location["longitude"]}
              time={moment(data.created_at, "YYYY-MM-DD, hh:mm:ss a")
                .startOf("hour")
                .fromNow()}
              name={data.location["name"]}
              city={data.location["city"]}
              likes={data.total_likes}
              emf={data.location["avg_emf_reading"]}
              prof_name={data.user["name"]}
              location_id={data.location["id"]}
              description={data.location["description"]}
            />
          );
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    backgroundColor: "white",
  },
});
