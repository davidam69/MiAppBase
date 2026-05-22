import {StyleSheet} from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
    link: {
        paddingVertical: 8,
        paddingHorizontal: 4,
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 16,
        height: 16,
        resizeMode: "contain",
    },
    iconLeft: {
        marginRight: 8,
    },
    iconRight: {
        marginLeft: 8,
    },
    default: {
        color: theme.linkButton.DEFAULT.color,
    },  
    disabled: {
        color: theme.linkButton.DISABLED.color,
    },  
    pressed: {
        color: theme.linkButton.PRESSED.color,
    },
    destructiveDefault: {
        color: theme.linkButton.DESTRUCTIVE.DEFAULT.color,
    },
    destructivePressed: {
        color: theme.linkButton.DESTRUCTIVE.PRESSED.color,
    },
    destructiveDisabled: {
        color: theme.linkButton.DESTRUCTIVE.DISABLED.color,
    },
});