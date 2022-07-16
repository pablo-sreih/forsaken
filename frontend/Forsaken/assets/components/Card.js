import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useFonts } from 'expo-font';
import FollowButton from "./FollowButton";
import { Icon } from "react-native-elements";

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
                <View style={{marginRight: 20}}><FollowButton/></View>
            </View>
        <View style={styles.container}></View>
        <View style={styles.icons}>
            <TouchableOpacity style={styles.iconContainer}><Icon color={'red'} name='favorite'/></TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}><Icon name='share'/></TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}><Icon name='info'/></TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}><Icon name='room'/></TouchableOpacity>
        </View>
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
        alignItems: 'center',
        justifyContent: 'center',
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
    },

    icons: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginRight: 20
    },

    iconContainer: {
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: '#F1F1F1',
        padding: 7,
        borderRadius: 5
    }
})