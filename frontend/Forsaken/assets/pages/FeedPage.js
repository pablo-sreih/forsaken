import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import Card from "../components/Card";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import moment from "moment";

export default function FeedPage({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("http://192.168.8.139:8000/api/testAPI", {
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
      <ScrollView>
        {data.map((data, index) => {
          return (
            <Card
              key={index}
              navigation={navigation}
              image={data.image}
              prof={data.user["profile_pic"]}
              lat={data.location["latitude"]}
              long={data.location["longitude"]}
              time={moment(data.creation_date, "YYYY-MM-DD")
                .startOf("day")
                .fromNow()}
              name={data.location["name"]}
              city={data.location["city"]}
              likes={data.total_likes}
              emf={data.location["avg_emf_reading"]}
              prof_name={data.user["name"]}
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
