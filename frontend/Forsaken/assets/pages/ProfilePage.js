import { View, StyleSheet, Text, ScrollView } from "react-native"
import Header from "../components/Header"
import { useFonts } from "expo-font"
import FollowButton from "../components/FollowButton";
import MiniPhoto from "../components/MiniPhoto";


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
            <View style={{marginTop: 10, alignSelf: 'center'}}>
                <FollowButton/>
            </View>
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
            <View>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ante metus dictum at tempor commodo ullamcorper. 
                    Egestas integer eget aliquet nibh praesent tristique 
                    magna sit amet.
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.photosContainer}>
                <MiniPhoto/>
                <MiniPhoto/>
                <MiniPhoto/>
                <MiniPhoto/>
                <MiniPhoto/>
                <MiniPhoto/>
                <MiniPhoto/>
                <MiniPhoto/>
            </ScrollView>
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
    },

    description: {
        fontFamily: 'montserratRegular',
        fontSize: 12,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 15
    },

    photosContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 17,
        marginRight: 17,
        marginTop: 10
    },

})