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
        const isDestructive = (iconType === "logout");

        let state = "default";
        if (disabled) state = "disabled";
        else if (isPressed) state = "pressed";

        if (iconType === "arrow" && position === "left") {
            if (state === "default") return icarleftdef;
            if (state === "pressed") return icarleftpres;
        }

        if (iconType === "arrow" && position === "right") {
            if (state === "default") return icarRigdef;
            if (state === "pressed") return icarRigpres;
        }   

        if (iconType === "logout") {
            if (state === "default") return iclogoutdef;
            if (state === "pressed") return iclogoutpres;
        }
        return null;
    };

    const getLinkStyle = () => {
        if (disabled) {
            return destructive ? styles.destructiveDisabled : styles.disabled;
        }
        if (isPressed) {
            return destructive ? styles.destructivePressed : styles.pressed;
        }
        return destructive ? styles.destructiveDefault : styles.default;
    };

    const handlePress = () => {
        if (!disabled) {
            onPress();
        } else {
            console.log("Link deshabilitado");
        }
    };

    const iconLeftSource = getIconSource(iconLeft, "left");
    const iconRightSource = getIconSource(iconRight, "right");

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