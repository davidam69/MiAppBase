import { useState } from "react";
import { Image, Text, ActivityIndicator, Pressable} from "react-native";
import { styles } from "./styles";
import iconCheck from "../../assets/button/Check.png";
import iconAlert from "../../assets/button/Alert.png";

export default function Button({ title, onPress, disabled, loading, success, error, style }) {
const [pressed, setPressed] = useState(false);

const getButtonStyle = () => {
    if (disabled) return styles.disabled;
    if (loading) return styles.loading;
    if (success) return styles.success;
    if (error) return styles.error;
    if (pressed) return styles.pressed;
    return styles.default;
};

const getIcon = () => {
    if (loading) return <ActivityIndicator size="small" color="#FFFFFF" />;
    if (success) return <Image source={iconCheck} style={styles.icon} />
    if (error) return <Image source={iconAlert} style={styles.icon} />;
    return null;
}

return (
    <Pressable
        onPress={onPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
        disabled={disabled || loading}
        style={[styles.button, getButtonStyle(), style]}
    >
        {getIcon()}
        <Text style={disabled ? styles.textDisabled : styles.text}>
            {loading ? "Cargando..." : title}
        </Text>   
    </Pressable>
);
}