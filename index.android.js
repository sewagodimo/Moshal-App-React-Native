/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './src/components/Splash/Splash';
import Login from './src/components/Login/Login';
export default class MyApp extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor: 'white'}}>
        <Splash/>
      </View>
    );
  }
}



AppRegistry.registerComponent('MyApp', () => MyApp);
