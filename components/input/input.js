import React from "react";
import { TextInput, Text, View, Image } from "react-native";
import { styles } from "./styles";
import { constants } from "../../constants/constants";

const Input = ({
    label,
    value,
    onChangeText,
    placeholder,
    isFocused = false,
    isError = false,
    isSuccess = false,
    isDisabled = false,
    messageError = "",
    icon,
    rightIcon,
    leftIcon,
}) => {
    return (
        <View style={styles.container}>
            {label && (
                <Text
                    style={[
                        styles.label,
                        isFocused && styles.labelFocused,
                        isError && styles.labelError,
                        isSuccess && styles.labelSuccess,
                        isDisabled && styles.labelDisabled,
                    ]}
                >{label}
                </Text>
            )}
            <View
                style={[
                    styles.inputContainer,
                    isFocused && styles.focused,
                    isError && styles.error,
                    isSuccess && styles.success,
                    isDisabled && styles.disabled,
                    !isFocused &&
                    !isError &&
                    !isSuccess &&
                    !isDisabled &&
                    styles.default
                ]}>
                {leftIcon && (<Image source={leftIcon} style={styles.leftIcon}/>)}
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    editable={!isDisabled}
                />                
                {rightIcon && (<Image source={rightIcon} style={styles.rightIcon}/>)}
            </View>
            
            {isError && (<View style={styles.messageContainer}>{icon && (<Image source={icon} style={styles.icon}/>)}<Text style={styles.errorText}> {messageError} </Text></View>)}

            {isSuccess && (<View style={styles.messageContainer}>{icon && (<Image source={icon} style={styles.icon}/>)}<Text style={styles.successText}> {constants.INPUT.MESSAGE.MESSAGE_SUCCESS_INPUT} </Text></View>)}

        </View>
    );
};

export default Input;