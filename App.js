import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {useState} from 'react';

import Input from './components/input/input';
import {constants} from './constants/constants';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import LinkButton from './components/LinkButton';

import alertNombre from './assets/input/TriangleAlert.png';
import verificadoNombre from './assets/input/Check.png';
import circleNombre from './assets/input/CircleCheck.png';

import mailDefault from './assets/input/MailDefault.png';
import mailFocused from './assets/input/MailFocused.png';
import mailAlert from './assets/input/MailAlert.png';
import circleEmail from './assets/input/CircleAlert.png';
import mailDisabled from './assets/input/MailDisabled.png'

import lockDefault from './assets/input/LockDefault.png';
import eyeDefault from './assets/input/EyeOffDefault.png';
import lockFocused from './assets/input/LockFocused.png';
import EyeFocused from './assets/input/EyeFocused.png';

import lockAlert from './assets/input/LockAlert.png';
import eyeOffAlert from './assets/input/EyeOffAlert.png';


export default function App() {
  const onPress = (value) => {
    console.log(value);
  };

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Botones</Text>
        
        <Button 
          title="Iniciar sesión" 
          onPress={() => console.log('Botón presionado!')} 
        />
        
        <Button 
          title="Deshabilitado" 
          disabled 
          onPress={() => console.log('Botón deshabilitado!')} 
        />
        
        <Button 
          title="Cargando..." 
          loading 
          onPress={() => console.log('Botón cargando!')} 
        />
        
        <Button 
          title="Guardado" 
          success 
          onPress={() => console.log('Botón guardado!')} 
        />
        
        <Button 
          title="Reintentar" 
          error 
          onPress={() => console.log('Botón Error!')} 
        />
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Checkbox</Text>
        
        <CheckBox label="test" onPress={onPress} />
        
        <CheckBox onPress={onPress} />
        
        <CheckBox label="test" onPress={onPress} isError />
        
        <CheckBox label="test" onPress={onPress} isDisable />
        
        <CheckBox 
          label="test" onPress={onPress} isActive />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inputs</Text>
        
        <Input 
          label="Nombre" 
          value={nombre} 
          onChangeText={setNombre} 
          placeholder="Juan Gabriel"
        />

        <Input 
          label="Nombre" 
          value={nombre} 
          onChangeText={setNombre} 
          placeholder="Juan Gabriel" 
          isFocused
        />

        <Input 
          label="Nombre" 
          value={nombre} 
          onChangeText={setNombre} 
          placeholder="Juan Gabriel" 
          isError 
          icon={alertNombre} 
          messageError={constants.INPUT.MESSAGE.MESSAGE_ERROR_REQUERID}
        />

        <Input 
          label="Nombre" 
          value={nombre} 
          onChangeText={setNombre} 
          placeholder="Juan Gabriel" 
          isSuccess 
          icon={verificadoNombre} 
          rightIcon={circleNombre}
        />

        <Input 
          label="Nombre" 
          value={nombre} 
          onChangeText={setNombre} 
          placeholder="Juan Gabriel" 
          isDisabled
        />

        <Input 
          label="Correo Electrónico" 
          value={email} 
          onChangeText={setEmail} 
          placeholder="ejemplo@gmail.com" 
          leftIcon={mailDefault}
        />

        <Input 
          label="Correo Electrónico" 
          value={email} 
          onChangeText={setEmail} 
          placeholder="ejemplo@gmail.com" 
          isFocused 
          leftIcon={mailFocused}
        />

        <Input 
          label="Correo Electrónico" 
          value={email} 
          onChangeText={setEmail} 
          placeholder="ejemplo@gmail.com" 
          isError 
          icon={alertNombre} 
          messageError={constants.INPUT.MESSAGE.MESSAGE_ERROR_EMAIL} 
          leftIcon={mailAlert} 
          rightIcon={circleEmail}
        />

        <Input 
          label="Correo Electrónico" 
          value={email} 
          onChangeText={setEmail} 
          placeholder="ejemplo@gmail.com" 
          isDisabled 
          leftIcon={mailDisabled}
        />

        <Input 
          label="Contraseña" 
          value={password} 
          onChangeText={setPassword} 
          placeholder="Contraseña" 
          leftIcon={lockDefault} 
          rightIcon={eyeDefault}
        />

        <Input 
          label="Contraseña" 
          value={password} 
          onChangeText={setPassword} 
          placeholder="Contraseña" 
          isFocused 
          leftIcon={lockFocused} 
          rightIcon={EyeFocused}
        />

        <Input 
          label="Contraseña" 
          value={password} 
          onChangeText={setPassword} 
          placeholder="Contraseña" 
          isError 
          icon={alertNombre} 
          messageError={constants.INPUT.MESSAGE.MESSAGE_ERROR_PASSWORD} 
          leftIcon={lockAlert} 
          rightIcon={eyeOffAlert}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Link Button</Text>
        <LinkButton
          title="¿Olvidaste tu contraseña?"
          onPress={() => console.log('Olvidaste tu contraseña?')}
        />

        <LinkButton
          title="Volver al inicio de sesión"
          iconLeft="arrow"
          onPress={() => console.log('Volver al inicio de sesión')}
        />

        <LinkButton
          title="Registrate"
          iconRight="arrow"
          onPress={() => console.log('Registrate')}
        />

        <LinkButton
          title="Cerrar sesión"
          onPress={() => console.log('Cerrar sesión')}
          destructive
          iconLeft="logout"
        />

        <LinkButton
          title="Deshabilitado"
          onPress={() => console.log('Link deshabilitado')}     
          disabled
        />
      </View>   
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#F3F4F6',
  },
  section: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#7C3AED',
  },
});