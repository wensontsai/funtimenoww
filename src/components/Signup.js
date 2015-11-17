'use strict';

var React = require('react-native');
var {View, Text, TextInput, TouchableHighlight, StyleSheet} = React;
var Button = require('react-native-button');
var Actions = require('react-native-router-flux').Actions;

var Signup = React.createClass ({
    getInitialState: function(){
        return {
            username: '',
            password: ''
        }
    },
    render: function(){
        return (
            <View style={styles.container}>
                <Text>
                    ittsa sign up tyme, baby ?^
                </Text>
            </View>
        );
    },
    onUsernameTextChanged: function(event){
        this.setState({ username: event.nativeEvent.text });
        console.log(this.state.username);
    },
    onPasswordTextChanged: function(event){
        this.setState({ password: event.nativeEvent.text });
        console.log(this.state.password);
    },
    handleSignup: function(){
        return;
    },
    handleLogin: function(){
        console.log(this.state.username);
        console.log(this.state.password);
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    buttonInput: {
        padding: 4,
        margin: 4,
        height: 29,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 5,
        width: 100,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    loginInput: {
        width: 300,
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});



module.exports = Signup;