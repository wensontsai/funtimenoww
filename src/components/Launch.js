'use strict';

var React = require('react-native');
var {View, Text, StyleSheet, TouchableHighlight} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

class Launch extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Launch page</Text>
                <Button onPress={()=>Actions.login({data:'', title:'Please Log In' })}>Go to Login page</Button>
                <Button onPress={Actions.stopwatch}>Run tha StopWatch</Button>
                <Button onPress={Actions.weathermap}>Check tha weatherrrr in ur town</Button>
                <Button onPress={Actions.deepthoughts}>Get inspired</Button>
                <Button onPress={Actions.propertyfinder}>Find an apartment</Button>
                <Button onPress={Actions.register}>Go to Register page</Button>
                <Button onPress={Actions.register2}>Go to Register page without animation</Button>
                <Button onPress={()=>Actions.error("Error message")}>Go to Error page</Button>
                <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

module.exports = Launch;