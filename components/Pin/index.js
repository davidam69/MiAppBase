import { Pressable, Text, Animated, Image } from "react-native";
import { styles } from "./styles";
import { usePinAnimation } from "./animations";

import CircleD1b from "../../assets/Pin/CircleD1b.png";
import CircleD2b from "../../assets/Pin/CircleD2b.png";

export default function Pin({ type, selected, onPress,}) {
    const { scaleAnim, haloAnim } = usePinAnimation(selected);
    const pinImage = type === "pin1" ? CircleD1b : CircleD2b;
    return (
        <Pressable onPress={onPress}>
            <Animated.View style={[styles.container,{transform: [{ scale: scaleAnim }],},]}>
                <Animated.View style={[styles.halo,{opacity: haloAnim,},]} />
                <Animated.View style={[styles.pin, selected && styles.selected,]}>
                    <Image source={pinImage} style={styles.image} resizeMode="contain"  />
                </Animated.View>
            </Animated.View>
        </Pressable>
    );
}