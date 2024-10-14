import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { IHomeTitle } from "../Interfaces/IHomeTitle";
import MaskedView from "@react-native-masked-view/masked-view";
import {LinearGradient} from "react-native-linear-gradient";

export const HomeTitle: React.FC<IHomeTitle> = (props) => {
    return <>
     <MaskedView maskElement={<Text />}>
      <LinearGradient
        colors={["red", "green"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
    <Text style={styles.text}>{props.titleOrange}</Text>
      </LinearGradient>
      </MaskedView>
    <View style={styles.container}>
    <Text style={styles.text}>{props.TitleWhite}</Text>
    </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        flexDirection:"row",
        gap: 10,
        },
        text: {
            color:"orange",
            fontFamily: "LatoRegular",
        },
});