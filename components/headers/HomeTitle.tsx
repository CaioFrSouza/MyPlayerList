import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { IHomeTitle } from "../Interfaces/IHomeTitle";
import { Colors } from '@/constants/Colors';
import MaskedView from "@react-native-masked-view/masked-view";
import {LinearGradient} from "expo-linear-gradient";

export const HomeTitle: React.FC<IHomeTitle> = (props) => {
    const colorScheme = useColorScheme();
    const gradientEnd = Colors[colorScheme ?? 'light'].orangeTitleEnd;
    const gradientStart = Colors[colorScheme ?? 'light'].orangeTitleStart;

    return (
        <View style={styles.container}>
            <MaskedView
            maskElement={
                <Text style={[styles.text,{backgroundColor:"transparent"}]}>{props.titleOrange.toUpperCase()}</Text>
            }
            >
                <LinearGradient
                    colors={[gradientStart, gradientEnd]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Text style={[styles.text,{opacity:0}]}>{props.titleOrange.toUpperCase()}</Text>
                </LinearGradient>
            </MaskedView>
        <Text style={styles.text}>{` ${props.TitleWhite.toUpperCase()}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        color: "white",
        fontSize: 20,
        fontFamily: "LatoRegular",
    },
    gradient: {
        flex: 1, // Ensure the gradient covers the masked text area
    },
});
