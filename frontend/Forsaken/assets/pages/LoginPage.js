import React from "react"
import { View, Text, TouchableOpacity } from "react-native"


export default function LoginPage({navigation}){
    return(
        <View>
            <Text>Login Page</Text>
            <TouchableOpacity>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}