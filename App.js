import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {useState} from 'react';

import Input from './components/input/input';
import {constants} from './constants/constants';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Navigation from './components/navigation/navigation';
import LinkButton from './components/LinkButton';
import RegisterScreen from "./screens/Hooks/RegisterScreen";
import Pin from "./components/Pin";

import Editar from "./assets/navigation/EditBtn.png"
import Back from "./assets/navigation/BackDet.png"
import Avatar from "./assets/navigation/AvatarBig.png"
import Comercio from "./assets/navigation/HeroEmoji.png"

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

/*
const [selectedPin, setSelectedPin] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.pinArea}>
        <View style={styles.pinTopLeft}>
          <Pin
            type="pin1"
            selected={selectedPin === "pin1"}
            onPress={() => setSelectedPin("pin1")}
          />
        </View>

        <View style={styles.pinBottomRight}>
          <Pin
            type="pin2"
            selected={selectedPin === "pin2"}
            onPress={() => setSelectedPin("pin2")}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8C8C8",
    justifyContent: "center",
    alignItems: "center",
  },

  pinArea: {
    width: 220,
    height: 220,
    position: "relative",
  },

  pinTopLeft: {
    position: "absolute",
    top: 10,
    left: 10,
  },

  pinBottomRight: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
}); */




  const [showRegister, setShowRegister] = useState(true);
  if (showRegister) {
    return <RegisterScreen />;
  }

  const [nombre, setNombre] = useState("");
  const onPress = (value) => {
    console.log(value);
  };

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
        <Text style={styles.sectionTitle}>Navegación</Text>
        <Navigation title="Registro" subtitle="Crea tu cuenta gratis" backIcon={Back} state="default" onBack={() => console.log("volver")}/>
        <Navigation title="Recuerar Contraseña" backIcon={Back} state="default" onBack={() => console.log("volver")}/>
        <Navigation title="Detalle de promocion" backIcon={Back} centerIcon={Comercio} state="default" onBack={() => console.log("volver")}/>
        <Navigation title="Mi Perfil" backIcon={Back} rightIcon={Editar} centerIcon={Avatar} onBack={() => console.log("volver")} onRightPress={() => console.log("editar")}/>
        <Navigation title="Recuperar contraseña" subtitle="Estado disabled" backIcon={Back} state="disabled"/>
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