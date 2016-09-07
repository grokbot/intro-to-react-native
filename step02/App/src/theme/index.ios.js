import { StyleSheet } from "react-native";
import { BaseTheme, Colors } from "./common";
import { OverridesIOS } from "./platforms/theme-ios";

export const Theme = Object.assign({}, BaseTheme, OverridesIOS);
export const Color = Colors;
