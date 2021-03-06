import { StyleSheet, Text, View, AppRegistry, ImageBackground, Button } from 'react-native';
import React, { Component } from 'react';
import { ListMatch } from './list_match';
import { withNavigation } from 'react-navigation';



export class MatchScreen extends React.Component {
  constructor(props){
    super(props);
  }
    static navigationOptions = {
      title: 'Find your match',
      // header: null,
      
    };
    render() {
      return (
        
        <ImageBackground source={require('../app/img/prueba.jpg')}
          style={styles.container}>
          <View style={styles.inner}>
            
          <ListMatch navigation={this.props.navigation} />
          </View>
  
  
        </ImageBackground>
  
  
  
      );
    }
  }

  export default withNavigation(MatchScreen)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    letras: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
    },
    letritas: {
      fontSize: 15,
      textAlign: 'center',
      color: 'red',
    },
    inner: {
      width: '90%',
      height: '90%',
      backgroundColor: 'rgba(255,255,255, .7)'
    }
  }
  );