import {StyleProp, ViewStyle} from "react-native";

export interface IThemedApplicationBackground{
    children: React.ReactNode;
    styles?:  StyleProp<ViewStyle>
}