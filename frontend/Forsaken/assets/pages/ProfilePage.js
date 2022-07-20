import { View, StyleSheet } from "react-native"
import Header from "../components/Header"

export default function ProfilePage() {
    return(
        <View style={styles.container}>
            <Header name="PROFILE"/>
            <View style={styles.profilePicContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    profilePicContainer: {
        marginTop: 20,
        alignSelf: 'center',
        width: 150,
        height: 150,
        backgroundColor: 'gray',
        borderRadius: 100
    }
})