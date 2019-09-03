import React, { useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Main({ navigation }) {
  const {
    compra,
    parcela,
    res,
    taxa,
    Rtaxa,
    Vparcela,
    Jparcela,
    Tcompra,
    Ttaxa,
    first,
    fourteenth,
    thirtienth
  } = navigation.state.params.response

  console.log(parseFloat(compra).toFixed(2).replace(".",","))

  function handleMain() {

    navigation.navigate('Resp')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.textCard}>{'Valor da Compra R$ ' + parseFloat(compra).toFixed(2).replace(".",",")}</Text>
          <Text style={styles.textCard}>{'Taxa de Juros ' + Rtaxa.toFixed(2).replace(".",",") + '%'}</Text>
          <Text style={styles.textCard}>{'Valor Total R$ ' + res.toFixed(2).replace(".",",")}</Text>
        </View>
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.textCard}>{'Compra dividida em ' + parcela + ' parcelas'}</Text>
          <Text style={styles.textCard}>{'Valor por Parcela R$ ' + Vparcela.toFixed(2).replace(".",",")}</Text>
          <Text style={styles.textCard}>{'Taxa de Juros por parcela ' + Jparcela.toFixed(2).replace(".",",") + '%'}</Text>
          <Text style={styles.textCard}>{'Valor Total dos Juros R$ ' + Tcompra.toFixed(2).replace(".",",")}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleMain} style={styles.button}>
        <Text style={styles.buttonText}>Informações do Vendedor</Text>
      </TouchableOpacity>
    </SafeAreaView>
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

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 100,
  },

  card: {
    borderWidth: 1,
    borderColor: '#01238b',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    padding: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  textCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#01238b',
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