import { useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';

import icChecked from '../../assets/check.png'

import { styles } from './styles'

export default function Checkbox({label, isError, isDisable, isActive = false, onPress = () => {}}) {
const [isChecked, setIsChecked] = useState(isActive)

const handleOnPress = () => {
    setIsChecked(!isChecked)
    onPress(!isChecked)
}

  return (
    <View style={[styles.container, isDisable && styles.disabled]}>
        <Pressable onPress={handleOnPress} disabled={isDisable} style={[styles.checkboxContent, isChecked && styles.checkedContent, isError && styles.errorContent]}>
            {isChecked && <Image source={icChecked} style={styles.checked} /> }
        </Pressable>
        <Text style={[styles.text, isError && styles.textError]}>{label}</Text>
    </View>
  );
}