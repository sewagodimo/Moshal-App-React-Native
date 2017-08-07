/**
 * Sewagodimo Matlapeng
 *Chatroom app
 * ednecia.me
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Image,Text,View, KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm'
export default class Login extends Component {

  render() {
    return (
    <KeyboardAvoidingView behavior="padding"
     style={styles.container}>
        <View stlye={styles.logoContainer}>
        <Image source={require('./moshal2.jpg')} style={styles.logo} />
        </View>
        <View>
        <Text style={styles.title}>Moshals</Text>
      </View>
      <View>
      <LoginForm/>
    </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
container: {backgroundColor: 'rgb(4,3,41)',flex: 1, justifyContent: 'center'},
logoContainer:{alignItems: 'center', flexGrow: 1, justifyContent: 'center'},
title: {
   alignSelf: 'center',
  color: 'white',
  paddingBottom: 8,
  fontSize: 17,
  justifyContent: 'center',
  alignItems:'center'
},
logo: {resizeMode:'contain'}

});
