/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './App';
 import React from 'react';
 import {name as appName} from './app.json';
 import {Provider} from 'react-redux';
 import configureStore from './store';
 import Preferensi from './src/screens/Preferensi';
 
 const store = configureStore();
 
 const RNRedux = () => (
   <Provider store={store}>
     <Preferensi />
   </Provider>
 );