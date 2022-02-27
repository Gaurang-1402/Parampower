import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import Qr from './src/screens/qr';
import Requests from './src/screens/requests';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Requests" 
        component={Requests} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Qr" 
        component={Qr} 
        options={{ headerShown: false}} 
      />
      
      
     
     
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}