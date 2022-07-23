import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const image = require('../images/back.jpg')

export default function MiniPhoto() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        width:'31%',
        height: '53%',
        borderRadius: 10,
        margin:3
    },

    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10
    }
})