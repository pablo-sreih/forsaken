import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import { useFonts } from "expo-font";

export default function LocationPage(){

    const [loaded] = useFonts({
        montserratBlack : require('../fonts/Montserrat-Black.ttf'),
        montserratExtraBold: require('../fonts/Montserrat-ExtraBold.ttf'),
        montserratBold: require('../fonts/Montserrat-Bold.ttf')
    })
    
    if (!loaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Header name='LOCATION'/>
            <View style={styles.reviewContainer}>
                <View>
                    <Text style={styles.locationName}>HARDER HALL</Text>
                    <Text style={styles.location}>Beirut, Lebanon</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.addReviewText}>Add Review</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    reviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },

    locationName: {
        fontFamily: 'montserratBold',
        fontSize: 15
    },

    location: {
        fontFamily: 'montserratRegular',
        fontSize: 12,
        marginTop: -4
    },

    button: {
        borderWidth: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: 108,
        borderColor: '#E6E6E6'
    },

    addReviewText: {
        fontFamily: 'montserratSemiBold'
    }
})