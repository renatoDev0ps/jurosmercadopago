import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png'

export default function Response({ navigation }) {
  const { res, first, fourteenth, thirtienth } = navigation.state.params.response

  function handleReturn() {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleReturn}>
        <Image source={logo} style={styles.logo}/>
      </TouchableOpacity>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.textCard}>{'Valor da Compra R$ ' + parseFloat(res).toFixed(2).replace(".",",")}</Text>
          <Text style={styles.textCard}>{'Taxa de Juros 5,31% na hora R$ ' + first.toFixed(2).replace(".",",")}</Text>
          <Text style={styles.textCard}>{'Taxa de Juros 4,36% 14 dias R$ ' + fourteenth.toFixed(2).replace(".",",")}</Text>
          <Text style={styles.textCard}>{'Taxa de Juros 3,60% 30 dias R$ ' + thirtienth.toFixed(2).replace(".",",")}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aff1',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 320,
    height: 170,
    marginBottom: 20,
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
    margin: 20,
    overflow: 'hidden',
    padding: 10,
  },

  textCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#01238b',
  },
})