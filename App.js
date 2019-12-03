import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import PokedexScreen from './screens/PokedexScreen';


export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
        <PokedexScreen />
        </View>
      </SafeAreaView>
      
    )
  }
}
