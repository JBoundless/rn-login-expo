import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={{url: 'https://brandlogos.net/wp-content/uploads/2016/01/github-octocat-logo-vector-download.jpg'}} style={styles.logo} />
      <Text style={styles.title}>An app made for GitHub using React Native</Text>
      </View>
      <View style={styles.formContainer}>
      <LoginForm />
      </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#fff',
    marginTop: 10,
    width: 160,
    textAlign: 'center'
  }
})