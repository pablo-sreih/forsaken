import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


export default function SignupPage({ navigation }){
    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Signup Page</Text>
            </TouchableOpacity>
        </View>
    )
}