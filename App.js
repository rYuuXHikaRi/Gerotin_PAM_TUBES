import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './src/screens/Profile';
import Gerakan from './src/screens/Gerakan';

export default function App() {
  return (
    <View style={styles.container}>
      <Gerakan/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
