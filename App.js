import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Local components
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Preferensi from './src/screens/preferensi';
import Profile from './src/screens/Profile';
import Gerakan from './src/screens/Gerakan';
import Article from './src/screens/Article';
import History from './src/screens/History';
import ArticleContent from './src/screens/Artikel_Content';
import Register from './src/screens/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Riwayat"
          component={History}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Artikel"
          component={Article}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="KontenArtikel"
          component={ArticleContent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preferensi"
          component={Preferensi}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Gerakan"
          component={Gerakan}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
