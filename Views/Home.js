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

export default function App(props) {
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
    
    <View style={css.containerLogo}>
        <Image
          source={require('../assets/logo/logo325px.png')} />   
     </View> 
    

      <Animated.View style={[
        css.container,
        {
          opacity: opacity,
          transform: [
            {translateX: offset.y}
          ]
        }
        ]}>

        <TouchableOpacity style={css.btnImg} onPress={()=> props.navigation.navigate('Stores')}>
          <Text style={{fontWeight:'bold' ,fontSize: 28}}>Vendas</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={css.btnImg} onPress={()=> props.navigation.navigate('StoresOrder')} >
         <Text style={{fontWeight:'bold',fontSize: 28}}>Pedidos</Text>
        </TouchableOpacity>

      </Animated.View>
    </SafeAreaView>
  );

}


