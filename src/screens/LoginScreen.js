import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import GoogleLoginButton from '../components/GoogleLoginButton';
import FbLoginButton from '../components/FbLoginButton';


const LoginScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Button title="Login In with facebook" onPress={() => fbLogin()} /> */}
            {/* <LoginButton /> */}
            <FbLoginButton />
            <GoogleLoginButton />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

export default LoginScreen;

