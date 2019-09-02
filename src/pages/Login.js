import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Login({ navigation }) {
  function handleLogin() {
    navigation.navigate('Main')
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <Image source={logo} style={styles.logo}/>
      <TextInput 
        placeholder="Digite o valor da compra"
        placeholderTextColor="#999"
        style={styles.input} 
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite a quantidade de parcelas"
        placeholderTextColor="#999"
        style={styles.input} 
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aff1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  logo: {
    width: 320,
    height: 170,
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#01238b',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})