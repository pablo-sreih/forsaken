import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function Header(props) {
  const [loaded] = useFonts({
    montserratBlack: require("../fonts/Montserrat-Black.ttf"),
    montserratExtraBold: require("../fonts/Montserrat-ExtraBold.ttf"),
    montserratBold: require("../fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.name}</Text>
      <TouchableOpacity onPress={() => alert("options")}>
        <Text style={styles.headerOpt}>...</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#7090B0",
    elevation: 10,
    height: "16%",
  },

  headerText: {
    color: "black",
    fontSize: 25,
    marginTop: 25,
    marginLeft: 20,
    fontFamily: "montserratExtraBold",
  },

  headerOpt: {
    color: "black",
    fontSize: 30,
    marginTop: 15,
    marginRight: 20,
    fontFamily: "montserratExtraBold",
  },
});
