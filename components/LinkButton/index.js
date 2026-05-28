import {useState} from "react";
import {View, Text, Pressable, Image} from "react-native";
import { styles } from "./styles";

import icarleftdef from "../../assets/LinkButton/ArrowLeftDefault.png";
import icarleftpres from "../../assets/LinkButton/ArrowLeftPressed.png";
import icarRigdef from "../../assets/LinkButton/ArrowRightDefault.png";
import icarRigpres from "../../assets/LinkButton/ArrowRightPressed.png";
import iclogoutdef from "../../assets/LinkButton/LogOutDefault.png";
import iclogoutpres from "../../assets/LinkButton/LogOutPressed.png";

export default function LinkButton({title, onPress, disabled=false, destructive=false, iconLeft=null, iconRight=null, style,}) {
    const [isPressed, setIsPressed] = useState(false);

    const getIconSource = (iconType, position) => {
        if (!iconType) return null;

        if (iconType === "arrow" && position === "left") {
            return isPressed ? icarleftpres : icarleftdef;
        }
        if (iconType === "arrow" && position === "right") {
            return isPressed ? icarRigpres : icarRigdef;
        }
        if (iconType === "logout") {
            return isPressed ? iclogoutpres : iclogoutdef;     //mirar esto, no se si es correcto, lo puse asi para evitar repetir codigo pero no se si es correcto, revisa porfavor
        }
        return null;
    };

    const getLinkStyle = () => {
        if (disabled) {
            return destructive ? styles.destructiveDisabled : styles.disabled;
        }
        if (destructive) {
            return isPressed ? styles.destructivePressed : styles.destructiveDefault;
        }
        return isPressed ? styles.pressed : styles.default;
    };

    const handlePress = () => {
        if (!disabled && onPress) {
            onPress();
        }
    };

    const iconLeftSource = destructive ? getIconSource("logout", "left") : getIconSource(iconLeft, "left");
    const iconRightSource = destructive ? null : getIconSource(iconRight, "right");

    return (
        <Pressable
            onPress={handlePress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            disabled={disabled}
        >
            <View style={[styles.container]}>
                {iconLeftSource && (<Image source={iconLeftSource} style={[styles.icon, styles.iconLeft]} />)}
                <Text style={[styles.link, getLinkStyle(),style]}>{title}</Text>
                {iconRightSource && (<Image source={iconRightSource} style={[styles.icon, styles.iconRight]} />)}
            </View>
        </Pressable>
    );
}