import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Login({ navigation }) {
  const [compra, setCompra] = useState('')
  const [parcela, setParcela] = useState('')

  function handleLogin() {
    const taxas = [
      0, // invalid
      0, // first
      1.0409, // second
      1.0541, // third
      1.067, // fourth
      1.0796, //fifth
      1.092, // sixth
      1.1041, //seventh
      1.1161, // eighth
      1.1278, // ninth
      1.1392, // tenth
      1.1505, // eleventh
      1.1615 // twelfth
    ];

    if (parcela >= 2 && parcela <= 12) {      
      let taxa = taxas[parcela]
      let res = compra*taxa
      let Rtaxa = (taxa*100) - 100
      let Vparcela = res / parcela
      let Jparcela = ((res / parcela) - (compra / parcela))
      let Tcompra = res - compra
      let Ttaxa = taxa * parcela
      let first = compra - (compra * 0.0531)
      let fourteenth = compra - (compra * 0.0436)
      let thirtienth = compra - (compra * 0.036)
      const response = {
        compra,
        parcela,
        taxa,
        Rtaxa,
        res,
        Vparcela,
        Jparcela,
        Tcompra,
        Ttaxa,
        first,
        fourteenth,
        thirtienth
      }      

      navigation.navigate('Main', { response })
    }

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
        value={compra}
        onChangeText={setCompra}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite a quantidade de parcelas"
        placeholderTextColor="#999"
        style={styles.input}
        value={parcela}
        onChangeText={setParcela}
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