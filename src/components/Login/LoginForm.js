import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Image,Text,View,
   TextInput,TouchableOpacity, StatusBar
} from 'react-native';

export default class Login extends Component {
  render() {
    return (

      <View style={styles.container}>
     <StatusBar
     barStyle="light-content"
     />
        <TextInput
          placeholder="username or email"
          returnKeyType="next"// replaces the enter text on the keyboard
            placeholderTextColor="rgba(255,255,255,0.5)"
            keyboardType= "email-address"
            autoCapitalize="none"
            autoCoreet="false"
          onSubmitEditing={()=>this.passwordInput.focus()}
              style={styles.input}
        />
      <TextInput
          placeholder="password"
            placeholderTextColor="rgba(255,255,255,0.5)"
            secureTextEntry //hide the text
              returnKeyType="done" //the text on enter
              style={styles.input}
              ref={(input)=> this.passwordInput= input}
              onSubmitEditing={()=>this.loginbutton.focus()}
              />
      <TouchableOpacity  style={styles.buttonContainer}

      >
          <Text  style={styles.buttonText}   ref={(input)=> this.loginbutton= input}>
              LOGIN
            </Text>
      </TouchableOpacity>
      </View>


    );
  }
  }
    const styles = StyleSheet.create({
container:{
padding: 20
},
input:{
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.5)',
  marginBottom: 20,
  //alignSelf: 'stretch',
  color: 'white',
    paddingHorizontal: 20

},
buttonContainer:{
backgroundColor: 'rgba(4,3,41,0.5)',
  paddingVertical: 10
},
buttonText: {
  textAlign:'center',
  color:'white',
  fontSize: 20,
  fontWeight: '700'
}

    });
