import React, {Component} from 'react';
import  {View, Text,StyleSheet,Image}  from 'react-native';
export default class Splash extends Component{
  render(){
    return(
      <View>
      <View style={splashScreenStyles.container}>
      <Image source={require('./moshal2.jpg')} style={splashScreenStyles.backgroundImage2} />
      </View>
      <View style={splashScreenStyles.container}>
      <Image source={require('./moshal.jpg')} style={splashScreenStyles.backgroundImage} />
      </View>

      <View>
        <Text style={splashScreenStyles.powered}>Made by Inspirator</Text>
      </View>

      </View>
    );
  }
}
const splashScreenStyles = StyleSheet.create({
  container: {
backgroundColor: 'white',
flexDirection: 'column',
flex:1,
justifyContent: 'space-between'
  },
  backgroundImage: {
      resizeMode:'contain' // or 'stretch'

    },
    backgroundImage2: {
        resizeMode:'contain' //,// or 'stretch'
      //  flex:1
      },
  powered: {

    color:'#003366',
    fontSize: 15,
    fontWeight: '200',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20

  }
});
