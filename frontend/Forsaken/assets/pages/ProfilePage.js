import { View, StyleSheet } from "react-native"
import Header from "../components/Header"

export default function ProfilePage() {
    return(
        <View style={styles.container}>
            <Header name="PROFILE"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})