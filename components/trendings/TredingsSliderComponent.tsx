import React, { useRef } from "react";
import {Animated, StyleSheet, View, Dimensions, Text} from "react-native";
import { ITrendings } from "../Interfaces/ITrendings";
import { SimpleTrendingSliderItem } from "@/components/trendings/SimpleTredingSliderItem";
import {ITEM_WIDTH_CARD} from "@/constants/Sizes";
import {Strings} from "@/constants/Strings";

const { width } = Dimensions.get("window");
const SPACING = 0;

export const TredingsSliderComponent: React.FC<ITrendings> = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const strings = Strings.Pt_Br;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title || strings.TrendingMovieTitle}</Text>
            <Animated.FlatList
                contentContainerStyle={styles.contentList}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                snapToAlignment="start"
                data={props.imagesSlider}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ITEM_WIDTH_CARD,
                        index * ITEM_WIDTH_CARD,
                        (index + 1) * ITEM_WIDTH_CARD,
                    ];

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1, 0.8],
                        extrapolate: "clamp",
                    });

                    return (
                        <Animated.View style={[styles.item, { transform: [{ scale }] }]}>
                            <SimpleTrendingSliderItem baseRouter={props.baseRouter} index={index} item={item} />
                        </Animated.View>
                    );
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16}
                snapToInterval={ITEM_WIDTH_CARD + SPACING}
                decelerationRate="fast"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },
    contentList: {
        paddingHorizontal: (width - ITEM_WIDTH_CARD) / 4,
    },
    item: {
        overflow:"hidden",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    title: {
        color:"#fff",
        marginBottom: 12,
        fontSize: 24,
        fontFamily: "LatoRegular",
    }
});
