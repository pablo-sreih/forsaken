import { View, StyleSheet, Text } from "react-native"
import Header from "../components/Header"
import { useFonts } from "expo-font"


export default function ProfilePage() {

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

    return(
        <View style={styles.container}>
            <Header name="PROFILE"/>
            <View style={styles.profilePicContainer}></View>
            <Text style={styles.profileName}>John Doe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    profilePicContainer: {
        marginTop: 20,
        alignSelf: 'center',
        width: 150,
        height: 150,
        backgroundColor: 'gray',
        borderRadius: 100
    },

    profileName: {
        fontFamily: 'montserratBold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10
    }
})