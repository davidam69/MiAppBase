import { Pressable, Animated, View } from "react-native";
import { styles } from "./styles";
import { usePinAnimation } from "./animations";

import CircleD1b from "../../assets/Pin/CircleD1b.png";
import CircleD2b from "../../assets/Pin/CircleD2b.png";

export default function Pin({ type, selected, onPress }) {
  const { haloOpacity } = usePinAnimation(selected);

  const pinImages = {
    pin1: CircleD1b,
    pin2: CircleD2b,
  };

  const pinImage = pinImages[type];

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        {selected && (
          <Animated.View
            style={[
              styles.selectedHalo,
              {
                opacity: haloOpacity,
              },
            ]}
          />
        )}

        <Animated.View
          style={[
            styles.defaultHalo,
            {
              transform: [
                {
                  scale: selected ? 1.08 : 1,
                },
              ],
            },
          ]}
        />

        <View style={styles.pin}>
          <Animated.Image
            source={pinImage}
            style={[
              styles.image,
              {
                transform: [
                  { translateY: 4 },
                  {
                    scale: selected ? 1.08 : 1,
                  },
                ],
              },
            ]}
          />
        </View>

        {selected && <View style={styles.whiteRing} />}
      </View>
    </Pressable>
  );
}