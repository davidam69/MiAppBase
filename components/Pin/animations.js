import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export function usePinAnimation(selected) {
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const haloAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.spring(scaleAnim, {
                toValue: selected ? 1.08 : 1,
                useNativeDriver: true,
            }),
            Animated.timing(haloAnim, {
                toValue: selected ? 1 : 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();
    }, [selected]);

    return {
        scaleAnim,
        haloAnim,
    };
}