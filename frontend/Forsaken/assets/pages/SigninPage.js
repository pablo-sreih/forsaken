import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native"
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
            <TextInput style={styles.inputField} placeholder='Email'></TextInput>
            <TextInput style={styles.inputField} placeholder='Password'></TextInput>
            <TouchableOpacity style={styles.signinButton}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
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
        flex: 1,
        justifyContent: 'center'
    },

    inputField: {
        borderWidth: 2,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 5,
        fontSize: 15,
        padding: 7,
        fontFamily: 'montserratSemiBold',
        marginTop: 20
    },

    title: {
        fontSize: 30,
        fontFamily: 'montserratBold',
        alignSelf: 'center',
        marginBottom: 50
    },

    signinButton: {
        borderWidth: 2,
        width: '80%',
        alignSelf: 'center',
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: 'black'
    },

    buttonText: {
        fontFamily: 'montserratBold',
        color: 'white'
    }
})