import React from "react"
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState, useRef } from "react";
import axios from "axios";


export default function SigninPage({ navigation }){

    const email = useRef(null)
    const pwd = useRef(null)

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

    async function login(){
        await axios.post('http://192.168.0.106:8000/api/login',
        {
            email: email.current.value,
            password: pwd.current.value
        })

        .then(function (response){
            console.log(response)
        })

        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.contentContainer}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput ref={email} style={styles.inputField} placeholder='Email'></TextInput>
            <TextInput ref={pwd} style={styles.inputField} placeholder='Password'></TextInput>
            <TouchableOpacity style={styles.signinButton} onPress={login}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signinButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <StatusBar style='auto'/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center'
    },

    contentContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        paddingBottom: 40,
        paddingTop: 40,
        width: '85%',
        alignSelf: 'center'
    },

    inputField: {
        borderWidth: 2,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 7,
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
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 7,
        backgroundColor: 'black'
    },

    buttonText: {
        fontFamily: 'montserratBold',
        color: 'white'
    }
})