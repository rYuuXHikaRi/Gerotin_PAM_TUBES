import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//Local components
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Preferensi from './src/screens/Preferensi';
import Profile from './src/screens/Profile';
import Gerakan from './src/screens/Gerakan';

import ArticleContent from './src/screens/Artikel_Content';
import Register from './src/screens/Register';
import AuthObserver from './components/loadingState';

import Countdown from './src/screens/Countdown';
import Article from './src/screens/Article';
import History from './src/screens/History';
import Finish from "./src/screens/Finish";
import Break from './src/screens/Break';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="AuthObserver"
          component={AuthObserver}
          options={{ headerShown: false}}
      />
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
        <Stack.Screen
          name="Finish"
          component={Finish}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Countdown"
          component={Countdown}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Break"
          component={Break}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
