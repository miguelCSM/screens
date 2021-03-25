import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens_1/Home';
import DetailsScreen from './screens_1/Details';


const Stack = createStackNavigator();

const myApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default myApp

    /*<View style={styles.container}>
      <Text style = {{fontSize:30}}>Hello World</Text>
      <TouchableOpacity onPress = {()=> Alert.alert('Esto es touch')}>
        <Text style = {{fontSize:20}}>click me!</Text>
      </TouchableOpacity>
      <Button title='Aceptar' onPress = {()=> Alert.alert('Esto es touch x2 :V')}></Button>
    </View>
    */