import React, {useState, useEffect} from 'react';
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
  ImageBackground,
} from 'react-native'
import { css } from '../assets/css/css';

export default function Stores(props) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  useEffect(() => {
    
    Animated.parallel([
      
      Animated.spring(offset.y, {
      toValue: 0,
      speed:0.1,
      bounciness: 5,
      useNativeDriver: true,
     
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver:true,
    })
    ]).start();
    
  }, []);
  return (
    <SafeAreaView style={css.background}>
      <ImageBackground source={require('../assets/logo/background.png')} resizeMode="cover" style={css.image}>
    </ImageBackground>
      <View style={css.containerLogoStores}>
       
      </View>

      <Animated.View style={[
        css.container,
        {
          opacity: opacity,
          transform: [
            {translateY: offset.y}
          ]
        }
        ]}>
         

        <TouchableOpacity style={css.btnImg} onPress={()=> props.navigation.navigate('OrderDetails')}>
          <Image source={require('../assets/button/botaoLojaCX.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={css.btnImg} >
          <Image source={require('../assets/button/botaoLojaPF.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={css.btnImg} >
          <Image source={require('../assets/button/botaoLojaFL.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={css.btnImg} >
          <Image source={require('../assets/button/botaoLojaJV.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={css.btnImg} >
          <Image source={require('../assets/button/botaoLojaSI.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={css.btnImg} >
          <Image source={require('../assets/button/botaoLojaSO.png')}/>
        </TouchableOpacity>

        

      </Animated.View>
    </SafeAreaView>
  );

}


