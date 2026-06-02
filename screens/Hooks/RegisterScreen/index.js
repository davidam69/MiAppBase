import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';

import Input from '../../../components/input/input';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';
import LinkButton from '../../../components/LinkButton';
import iconback from "../../../assets/navigation/BackDet.png";
import mailDefault from "../../../assets/input/MailDefault.png";
import lockDefault from "../../../assets/input/LockDefault.png";
import eyeFocused from "../../../assets/input/EyeFocused.png";
import lockKeyHole from "../../../assets/input/LockKeyhole.png";
import { theme } from '../../../constants/theme';

import { styles } from './styles';
  
export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[theme.colors.darkPurple, theme.colors.purple]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
    >
        <View style={styles.headerRow}>
            <Image source={iconback} />
            <Text style={styles.title}>Registro</Text> // tengo un texto debo pasarlo a theme
        </View>

        <View style={styles.section}>

        <Text style={styles.subtitle}>Crea tu cuenta gratis</Text>  // tengo un texto debo pasarlo a theme
      </View>
      </LinearGradient>

      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.inputHalf}>
          <Input label="Nombre" placeholder="Juan" />
          </View>
          <View style={styles.inputHalf}>
            <Input label="Apellido" placeholder="García" />
          </View>
        </View>

        <Input label="Correo electrónico" placeholder="tu@mail.com" leftIcon={mailDefault}/>

        <Input
          label="Contraseña"
          placeholder="Mínimo 8 caracteres"
          secureTextEntry
          leftIcon={lockDefault}
          rightIcon={eyeFocused}
        />

        <Input
          label="Confirmar contraseña"
          placeholder="Repetir contraseña"
          secureTextEntry
          leftIcon={lockKeyHole}
        />
        <View style={styles.row}>
          <CheckBox label="Acepto los términos y condiciones" />
        </View>

        <Button title="Crear cuenta" />

        <Text style={styles.footerText}>
          ¿Ya tienes una cuenta?{' '} // tengo un texto debo pasarlo a theme
          <Text style={styles.link}>Inicia sesión</Text> // tengo un texto debo pasarlo a theme
        </Text>
      </View>
    </SafeAreaView>
  );
}