import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import Input from "../../../components/input/input";
import Navigation from "../../../components/navigation/navigation";
import Button from "../../../components/Button";
import CheckBox from "../../../components/CheckBox";
import LinkButton from "../../../components/LinkButton";
import iconback from "../../../assets/navigation/BackDet.png";
import mailDefault from "../../../assets/input/MailDefault.png";
import lockDefault from "../../../assets/input/LockDefault.png";
import eyeFocused from "../../../assets/input/EyeFocused.png";
import lockKeyHole from "../../../assets/input/LockKeyhole.png";
import { theme } from "../../../constants/theme";
import { styles } from "./styles";

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
          <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
            <Image source={iconback} />
          </TouchableOpacity>
          <Text style={styles.title}>{theme.texts.registerTitle}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            {theme.texts.registerScreenSubtitle}
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.form}>
        <View style={styles.row}>
          <View style={styles.inputHalf}>
            <Input
              label={theme.texts.name}
              placeholder={theme.texts.firstName}
            />
          </View>
          <View style={styles.inputHalf}>
            <Input
              label={theme.texts.lastName}
              placeholder={theme.texts.lastNamePlaceholder}
            />
          </View>
        </View>

        <Input
          label={theme.texts.email}
          placeholder={theme.texts.emailPlaceholder}
          leftIcon={mailDefault}
        />

        <Input
          label={theme.texts.password}
          placeholder={theme.texts.passwordPlaceholder}
          secureTextEntry
          leftIcon={lockDefault}
          rightIcon={eyeFocused}
        />

        <Input
          label={theme.texts.confirmPassword}
          placeholder={theme.texts.confirmPasswordPlaceholder}
          secureTextEntry
          leftIcon={lockKeyHole}
        />
        <View style={styles.row}>
          <CheckBox label={theme.texts.acceptTerms} />
        </View>

        <Button title={theme.texts.createAccount} />

        <Text style={styles.footerText}>
          {theme.texts.youHaveAccount}{" "}
          <Text style={styles.link}>{theme.texts.loginLink}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
