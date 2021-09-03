import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button, StyleSheet, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { css } from './assets/css/css';
import {Home, Login, OrderDetails, StoreFinanceDetails, Stores, StoresOrder} from './Views';




export default function App() {

  const Stack = createStackNavigator();

  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name=" " component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Stores" component={Stores} options={{headerShown:false}}/>
        <Stack.Screen name="StoreFinance" component={StoreFinanceDetails} options={{headerShown:false}}/>
        <Stack.Screen name="OrderDetails" component={OrderDetails} options={{headerShown:false}}/>
        <Stack.Screen name="StoresOrder" component={StoresOrder} options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}



