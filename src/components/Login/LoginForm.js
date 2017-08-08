import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Image,Text,View,
   TextInput,TouchableOpacity, StatusBar
} from 'react-native';

export default class Login extends Component {
  constructor(){
    super();
    this.state={
    username: "",
    password: "",
    errors: []
    }
  }
  onForgotPassword(){

  }
  async onLogin(){
    try{
      let response = await fetch('https: make a heroku app with users',{
      method: 'POST',
      headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        email: this.state.email,
        password:this.state.password
      }
    })
  });
  let res= await response.text();
  console.log("the response is: "+res);
    }
  catch (errors){

  }
  }
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
          onChangeText= {(val) =>this.setState({email:val})}
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
              onChangeText= {(val) =>this.setState({password:val})}
              onSubmitEditing={()=>this.loginbutton.focus()}
              />
              <View style= {{  flexDirection: 'row',justifyContent: 'space-between'}}>
      <TouchableOpacity onPress={this.onLogin.bind(this)}  style={styles.buttonContainer}>
          <Text  style={styles.loginText}ref={(input)=> this.loginbutton= input}>
              LOGIN
            </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.onForgotPassword.bind(this)} style={styles.buttonContainer}>
          <Text style={styles.registerText}>
              Forgot your password?
            </Text>
      </TouchableOpacity>
      </View>
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
  paddingVertical: 10,
  paddingHorizontal: 10

},
loginText: {
  color:'white',
  fontSize: 20,
  fontWeight: '700'
},
registerText: {
  color:'green',
  fontSize: 15,
  fontWeight: '700',
  paddingRight: 20
}

    });
