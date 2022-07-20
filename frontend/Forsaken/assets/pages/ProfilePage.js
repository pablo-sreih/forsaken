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
            <View style={styles.profileInfo}>
                <View style={styles.infoContainer}>
                    <Text style={styles.numbers}>980</Text>
                    <Text style={styles.category}>Followers</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.numbers}>1412</Text>
                    <Text style={styles.category}>Posts</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.numbers}>312</Text>
                    <Text style={styles.category}>Following</Text>
                </View>
            </View>
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
        fontFamily: 'montserratExtraBold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10
    },

    profileInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },

    infoContainer: {
        alignItems: 'center'
    },

    numbers: {
        fontSize: 15,
        fontFamily: 'montserratRegular'
    },

    category: {
        fontSize: 15,
        fontFamily: 'montserratBold'
    }

})