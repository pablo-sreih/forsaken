import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"



export default function LoginPage({ navigation }){
    return(
        <View style={styles.container}>
            <Text>Login Page</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1
    }
})