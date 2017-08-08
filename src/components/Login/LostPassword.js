import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Image,Text,View,
   TextInput,TouchableOpacity, StatusBar
} from 'react-native';

export default class LostPassword extends Component {
  constructor(){
    super();
    this.state={
    username: "",
   errors: []}
 }//end of constr
  async  forgotPassword(){
    try{
      let response = await fetch('make a heroku app with users',{
      method: 'POST',
      headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
         username: this.state.username
      }
    })
  });
  let res= await response.text();
  console.log("the response is: "+res);
    }
    catch (errors){

}
  };
  render() {
    return (

      <View style={styles.container}>
     <StatusBar
     barStyle="light-content"
     />
        <TextInput
          placeholder="enter your emai address email"
          returnKeyType="next"// replaces the enter text on the keyboard
            placeholderTextColor="grey"
            keyboardType= "email-address"
            autoCapitalize="none"
            autoCoreet="false"
            onChangeText= {(val) =>this.setState({username:val})}
          onSubmitEditing={()=>this.passwordInput.focus()}
              style={styles.input}
        />


      <TouchableOpacity  style={styles.buttonContainer} onPress={this.forgotPassword.bind(this)}>
          <Text style={styles.registerText}>
              Request new Password
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
  backgroundColor: 'white',
  marginBottom: 20,
  //alignSelf: 'stretch',
  color: 'black',
    paddingHorizontal: 20

},
buttonContainer:{
  paddingVertical: 10,
  paddingHorizontal: 10

},
registerText: {
  color:'green',
  fontSize: 15,
  fontWeight: '700',
  paddingRight: 20
}

    });
