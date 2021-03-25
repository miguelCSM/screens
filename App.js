import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{fontSize:30}}>Hello World</Text>
      <TouchableOpacity onPress = {()=> Alert.alert('Esto es touch')}>
        <Text style = {{fontSize:20}}>click me!</Text>
      </TouchableOpacity>
      <Button title='Aceptar' onPress = {()=> Alert.alert('Esto es touch x2 :V')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
