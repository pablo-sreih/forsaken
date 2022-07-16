import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function FollowButton() {
    return (
        <TouchableOpacity style={styles.button}>
            <Text>Follow</Text>
        </TouchableOpacity>
    )   
}

const styles = StyleSheet.create ({
    button: {
        borderWidth: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})