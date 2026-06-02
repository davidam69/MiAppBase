import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export function usePinAnimation(selected) {
  const haloOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(haloOpacity, {
      toValue: selected ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [selected]);

  return {
    haloOpacity,
  };
}