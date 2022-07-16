import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import FollowButton from "./FollowButton";

export default function Card(){

    const [loaded] = useFonts({
        montserratBlack : require ('../fonts/Montserrat-Black.ttf'),
        montserratExtraBold: require ('../fonts/Montserrat-ExtraBold.ttf'),
        montserratBold: require ('../fonts/Montserrat-Bold.ttf'),
        montserratSemiBold: require ('../fonts/Montserrat-SemiBold.ttf'),
        montserratRegular: require ('../fonts/Montserrat-Regular.ttf')
      })
    
      if (!loaded) {
        return null;
      }

    return(
        <View>
            <View style={styles.profileContainer}>
                <View style={styles.profile}></View>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.time}>20min ago</Text>
                </View>
                <FollowButton/>    
            </View>
        <View style={styles.container}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'gray',
        width: 320,
        height: 200,
        borderRadius: 15
    },

    profileContainer:{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 20,
        marginTop: 20,
        
    },

    profile: {
        width: 55,
        height: 55,
        backgroundColor: 'gray',
        borderRadius: 50
    },

    name: {
        fontFamily: 'montserratSemiBold',
        fontSize: 15,
    },

    time: {
        fontFamily: 'montserratRegular',
        fontSize: 12,
        opacity: 0.3,
        marginTop: -4
    },

    profileInfo: {
        flex:1,
        marginLeft: 14,
        justifyContent: 'center',
    }
})