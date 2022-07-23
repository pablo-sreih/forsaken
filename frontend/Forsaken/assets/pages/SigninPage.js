import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";



export default function SigninPage({ navigation }){

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
            <Text style={styles.title}>Sign In</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Register</Text>
            </TouchableOpacity>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1
    },

    title: {
        fontSize: 30,
        fontFamily: 'montserratBold',
        alignSelf: 'center'
    }
})