import { StyleSheet } from "react-native";
import { constants } from "../../constants/constants";

export const styles = StyleSheet.create({

    container: {
        marginTop: 20,
        width: "100%",
    },

    label: {
        fontSize: 15,
        marginBottom: 5,
        marginLeft: 4,
    },

    labelFocused: {
        color: constants.INPUT.LABEL_FOCUSED,
    },

    labelError: {
        color: constants.INPUT.LABEL_ERROR,
    },

    labelSuccess: {
        color: constants.INPUT.LABEL_SUCCESS,
    },

    labelDisabled: {
        opacity: 0.5,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 52,
        width: "100%",
    },

    input: {
        flex: 1,
        paddingVertical: 0,
        fontSize: 15,
        height: 48,
    },

    default: {
        borderColor: constants.INPUT.BORDER_DEFAULT,
        backgroundColor: constants.INPUT.BACKGROUND_DEFAULT,
    },

    focused: {
        borderColor: constants.INPUT.BORDER_FOCUSED,
        backgroundColor: constants.INPUT.BACKGROUND_DEFAULT,
    },

    error: {
        borderColor: constants.INPUT.BORDER_ERROR,
        backgroundColor: constants.INPUT.BACKGROUND_ERROR,
    },

    success: {
        borderColor: constants.INPUT.BORDER_SUCCESS,
        backgroundColor: constants.INPUT.BACKGROUND_SUCCESS,
    },

    disabled: {
        opacity: 0.5,
        borderColor: constants.INPUT.BORDER_DEFAULT,
        backgroundColor: constants.INPUT.BACKGROUND_DISABLED,
    },

    errorText: {
        color: constants.INPUT.MESSAGE_ERROR,
        marginTop: 5,
        fontSize: 12,
    },

    successText: {
        color: constants.INPUT.MESSAGE_SUCCESS,
        marginTop: 5,
        fontSize: 12,
    },

    messageContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    icon: {
        width: 14,
        height: 14,
        marginRight: 5,
    },

    rightIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },

    leftIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
});