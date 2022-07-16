import { StyleSheet, TouchableOpacity, Text } from "react-native";
import {useFonts} from 'expo-font';


export default function FollowButton() {

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

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
    )   
}

const styles = StyleSheet.create ({
    button: {
        borderWidth: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: 108,
        borderColor: '#E6E6E6'
    },

    followText: {
        fontFamily: 'montserratSemiBold'
    }
})