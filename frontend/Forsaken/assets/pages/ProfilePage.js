import { View, StyleSheet, Text } from "react-native"
import Header from "../components/Header"
import { useFonts } from "expo-font"
import FollowButton from "../components/FollowButton";


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
            <View style={{marginTop: 10, alignSelf: 'center'}}><FollowButton/></View>
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
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        borderRadius: 100
    },

    profileName: {
        fontFamily: 'montserratBold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10
    },

})