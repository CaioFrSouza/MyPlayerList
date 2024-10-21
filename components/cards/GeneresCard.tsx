import {StyleSheet, Text, View} from "react-native";

export const GenreCard = (p: { name: string }) => {
    return <View style={styles.card}>
        <Text style={styles.text}>{p.name}</Text>
    </View>
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor:"rgba(250,240,202,0.18)",
        borderRadius: 8,
        borderWidth: 1,
        borderColor:"rgba(255,255,255,0.25)"
    },
    text: {
        color:"#BCBCBC",
        fontSize: 10,
    }
})