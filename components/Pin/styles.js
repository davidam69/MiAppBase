import { StyleSheet } from "react-native";
import { theme } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        justifyContent: "center",
        alignItems: "center",
    },

    halo: {
        position: "absolute",
        width: 86,
        height: 86,
        borderRadius: 43,
        backgroundColor: "rgba(124,58,237,0.20)",
    },

    pin: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: theme.colors.purple,
        justifyContent: "center",
        alignItems: "center",
    },

    selected: {
        borderWidth: 3,
        borderColor: "#FFF",
    },

    image: {
        width: 80,
        height: 80,
    },
});