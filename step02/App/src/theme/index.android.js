import { StyleSheet } from "react-native";
import { BaseTheme, Colors } from "./common";
import { OverridesAndroid } from "./platforms/theme-android";

export const Theme = Object.assign({}, BaseTheme, OverridesAndroid);
export const Color = Colors;
