'use strict';

var React = require('react-native');
var Reflux = require('reflux');
var CookieManager = require('react-native-cookies');

var Actions = require('react-native-router-flux').Actions;

var ActionsReflux = require('../actions/main-actions');
var MainStore = require('../stores/main-store');


var {View, Text, TextInput, TouchableHighlight, StyleSheet} = React;
var Button = require('react-native-button');


var Login = React.createClass ({
    mixins: [
        Reflux.listenTo(MainStore, 'onChange')
    ],
    getInitialState: function(){
        return {
            username: '',
            password: '',
            token: ''
        }
    },
    render: function(){
        return (
            <View style={styles.container}>
                <View>
                <Text>Username</Text>
                    <TextInput
                        style={styles.loginInput}
                        onChange = {this.onUsernameTextChanged} 
                      />
                </ View>
                <View>
                <Text>Password</Text>
                    <TextInput
                        style={styles.loginInput}
                        onChange = {this.onPasswordTextChanged}  
                      />
                </ View>
                <View>
                    <TouchableHighlight 
                        style={styles.buttonInput}
                        underlayColor = '#99d9f4'
                        onPress={this.handleLogin}
                        >
                        <Text>Login</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight 
                        style={styles.buttonInput}
                        underlayColor = '#99d9f4'
                        onPress={Actions.signup}
                        >
                        <Text>Sign Up</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    },
    onUsernameTextChanged: function(event){
        this.setState({ username: event.nativeEvent.text });
    },
    onPasswordTextChanged: function(event){
        this.setState({ password: event.nativeEvent.text });
    },
    handleSignup: function(){
        return;
    },
    handleLogin: function(){
        ActionsReflux.loginUser(this.state.username, this.state.password);
    },
    onChange: function(event, token){
        console.log(MainStore.token);

        
        this.setState({token: MainStore.token});

        // set cookie on success //

        // else send error //
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



module.exports = Login;