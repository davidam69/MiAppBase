import React from "react";
import { View, Text, TouchableOpacity, Image,} from "react-native";
import { styles } from "./styles";
import { theme } from "../../constants/theme";

const Navigation = ({
  title,
  subtitle,
  onBack,
  backIcon,
  rightIcon,
  centerIcon,
  onRightPress,
  state = theme.NAVIGATION.TYPE.DEFAULT,
}) => {
  return (
    <View
      style={[
        styles.container,
        state === theme.NAVIGATION.TYPE.DEFAULT && styles.default,
        state === theme.NAVIGATION.TYPE.DISABLED && styles.disabled,
      ]}>
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <TouchableOpacity
            activeOpacity={0.5}
            disabled={state === theme.NAVIGATION.TYPE.DISABLED}
            onPress={onBack}
            style={[
              styles.backButton,
              state === theme.NAVIGATION.TYPE.DISABLED && styles.backButtonDisabled,
            ]}>
            {backIcon && (<Image source={backIcon} style={[styles.icon, state === theme.NAVIGATION.TYPE.DISABLED && styles.disabledIcon]} resizeMode="contain"/>)}
          </TouchableOpacity>
          <View>
            <Text style={[styles.title, state === theme.NAVIGATION.TYPE.DISABLED && styles.disabledText]}> {title} </Text>
            {subtitle && (<Text style={[styles.subtitle, state === theme.NAVIGATION.TYPE.DISABLED && styles.disabledSubtitle]}> {subtitle} </Text>)}
          </View>
        </View>
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.5}
            disabled={state === "disabled"}
            onPress={onRightPress}
            style={[
              styles.rightButton,
              state === "disabled" && styles.backButtonDisabled,
            ]}>
            <Image source={rightIcon} style={[styles.icon, state === theme.NAVIGATION.TYPE.DISABLED && styles.disabledIcon]} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.backCenter]}>
        {centerIcon && (<Image source={centerIcon} style={[styles.iconCenter]}/>)}
      </View>
    </View>
  );
};

export default Navigation;