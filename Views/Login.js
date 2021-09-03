import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  SafeAreaView,
  Pressable,
  Button,
  ImageBackground,
  AsyncStorage
} from 'react-native'

import { css } from '../assets/css/css';

export default function Auth({navigation}) {
  // aqui embaixo a parte de animação
  
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 30 }));
  const [opacity] = useState(new Animated.Value(0));

  const [display, setDisplay] = useState(null);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [auth, setAuth] = useState(null);
  const flex = <Text style={css.text}>Não seja burro!!!</Text>
  


  //Envio do formulário de login
  async function sendForm() {
    let response = await fetch('http://172.20.10.2:3001/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: user,
        senha_app: password
      })
    });

    let json = await response.json();
    console.log("seu nome é " + json.login);
    console.log("sua senha é " + json.senha_app);
    if (json === 'error') {
      alert('Usuario ou Senha Incorretas');
      setTimeout(() => {
        setDisplay(' ');
      }, 5000);
      await AsyncStorage.clear();
    }else{
     await AsyncStorage.setItem('userData', JSON.stringify(json))
     alert("Bem vindo "+ json.login)
     navigation.navigate('Home');

    }
  }


  // Abaixo funcão da animação 
  useEffect(() => {

    Animated.parallel([

      Animated.spring(offset.y, {
        toValue: 0,
        speed: 0.1,
        bounciness: 5,
        useNativeDriver: true,

      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();

  }, []);

  return (
    
   <View style={css.background}>
      <View style={css.containerLogo}>
        <Image
          source={require('../assets/logo/logo325px.png')} />   
     </View> 
     

      <Animated.View style={[
        css.container,
        {
          opacity: opacity,
          transform: [
            { translateX: offset.y }
          ]
        }
      ]}>
        <Text>{display}</Text>
        <TextInput
          style={css.input}
          placeholder="Usuario"
          autoCorrect={false}
          secureTextEntry={false}
          onChangeText={text => setUser(text)}
        />

        <TextInput
          style={css.input}
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
          style={css.btnSubmit}
          onPress={() => sendForm()}>
          <Text style={css.submitText}>Acessar</Text>
         
        </TouchableOpacity>
      </Animated.View>
    </View>
  );

}


