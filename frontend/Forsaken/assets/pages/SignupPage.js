import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export default function SignupPage({ navigation }){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Signup Page</Text>
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