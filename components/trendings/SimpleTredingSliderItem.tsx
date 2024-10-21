import React from "react";
import { ISlider } from "@/components/Interfaces/ISlider";
import {Dimensions, ImageBackground, StyleSheet, Text, View} from "react-native";
import {ITEM_WIDTH_CARD} from "@/constants/Sizes";
import {RectButton} from "react-native-gesture-handler";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {IMAGE_URL} from "@/constants/Env";
import {Link} from "expo-router";

const { width } = Dimensions.get("window");

export const SimpleTrendingSliderItem: React.FC<ISlider> = ({ item, baseRouter}) => {
    return (
        <Link href={`/${baseRouter}/${item.id.toString()}`}>
        <RectButton
            onPress={() => console.log(item.id)}
            style={styles.container}
        >
        <ImageBackground
            style={styles.image}
            source={{ uri: `${IMAGE_URL}/${item.poster_path}` }}
            resizeMode="cover"
        />
            <View style={styles.imdbRatting}>
                <Text style={styles.imdbRattingText}>IMDb</Text>
                <View style={{gap: 4, flexDirection:"row", alignItems:"center"}}>
                    <FontAwesome name="star" size={16} color="#F3BE00" />
                    <Text style={styles.imdbRattingText}>{item.vote_average.toFixed(2)}</Text>
                </View>
            </View>
        </RectButton>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center"
    },
    image: {
        width: ITEM_WIDTH_CARD,
        height: ITEM_WIDTH_CARD,
        backgroundColor: "red",
    },
    imdbRatting: {
        position: "absolute",
        top: 10,
        right: 20,
        padding: 10,
        borderRadius: 8,
        backgroundColor:"rgba(0,0,0,0.44)"
    },
    imdbRattingText: {
        fontSize: 16,
        color:"white"

    }
});
