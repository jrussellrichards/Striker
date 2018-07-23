import { StyleSheet, Text, View, AppRegistry, ImageBackground, Button } from 'react-native';
import React, { Component } from 'react';
import { ListMatch } from './list_match';

class PartidoScreen extends React.Component {
    static navigationOptions = {
        title: 'The Organe system',
        // header: null,

    };
    render() {
        return (

            <ImageBackground source={require('../app/img/prueba.jpg')}
                style={styles.container}>
                <View style={styles.inner}>

                    <Text > Sábado 30  </Text>

                </View>


            </ImageBackground>



        );
    }
}


export default { PartidoScreen }
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