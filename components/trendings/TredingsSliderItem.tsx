import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ISlider } from "../Interfaces/ISlider";
import {
    BackdropBlur,
    Canvas,
    Fill,
    Image,
    useImage,
    Text,
    useFont,
    Group,
    rrect, BoxShadow,
} from "@shopify/react-native-skia";
import { Text as TextBase } from 'react-native';
import { RectButton } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");
const rectSize = width * 0.7;

export const TredingsSliderItem: React.FC<ISlider> = (props) => {
    const image = useImage(props.item.poster_path);
    const font = useFont(require("@/assets/fonts/Lato-Regular.ttf"), 20);
    const text = props.item.overview || "Untitled";
    const textWidth = font?.getTextWidth(text) || 0;
    const cornerRadius = 30;
    const roundedRect = rrect({ x: 0, y: 0, width: rectSize, height: rectSize }, cornerRadius, cornerRadius);

    const blurWidth = rectSize * 0.9;
    const blurHeight = rectSize * 0.3;
    const blurX = (rectSize - blurWidth) / 2;
    const blurY = rectSize - blurHeight - 10;
    const blurRoundedRect = rrect({ x: blurX, y: blurY, width: blurWidth, height: blurHeight - 10 }, 25, 25);

    const ratingWidth = 77;
    const ratingX = blurRoundedRect.rect.width - ratingWidth + blurRoundedRect.rect.x;
    const ratingY = 10;
    const ratingRoundedRect = rrect({ x: ratingX, y: ratingY, height: 46, width: ratingWidth }, 5, 5);
    if (!image || !font) {
        return (
            <View style={[styles.container, styles.placeholder]}>
                <TextBase>Loading...</TextBase>
            </View>
        );
    }

    return (
        <RectButton style={styles.container} onPress={() => alert("Item Pressed!")}>
            <Canvas style={styles.container}>
                <Group clip={roundedRect}>
                    <Image image={image} x={0} y={0} width={rectSize} height={rectSize} fit="cover" />

                    {/* Text and blur section */}
                    <Group>
                        <BackdropBlur blur={4.8} clip={blurRoundedRect}>
                            <BoxShadow dx={4} dy={4} blur={10} color="rgba(0, 0, 0, 0.3)" />
                            <Fill color="rgba(100, 100, 100, 0.2)" />
                        </BackdropBlur>

                        <Text
                            x={(blurRoundedRect.rect.width - textWidth) / 2 + blurRoundedRect.rect.x}
                            y={blurRoundedRect.rect.y + blurRoundedRect.rect.height * 0.6}
                            text={props.item.overview || "Untitled"}
                            font={font}
                            color="white"
                        />
                    </Group>

                    {/* Rating section */}
                    <Group clip={ratingRoundedRect}>
                        <BackdropBlur blur={4} clip={ratingRoundedRect}>
                            {/*<BoxShadow dx={10} dy={1} blur={5} color="rgba(0, 0, 0, 1)" />*/}
                            <Fill color="rgba(100, 100, 100, 0.2)" />
                        </BackdropBlur>
                        <Text
                            x={ratingRoundedRect.rect.x + 10}
                            y={ratingRoundedRect.rect.y}
                            text={"IMDb"}
                            font={font}
                            color="white"
                        />
                        <Text
                            x={ratingRoundedRect.rect.x + 10}
                            y={ratingRoundedRect.rect.y + 18}
                            text={props.item.vote_average ? props.item.vote_average.toString() : "N/A"}
                            font={font}
                            color="white"
                        />
                    </Group>
                </Group>
            </Canvas>
        </RectButton>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: rectSize,
        height: rectSize,
        borderRadius: 30,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    placeholder: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
});
