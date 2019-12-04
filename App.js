import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'

import { Provider } from 'react-redux';

import store from './store/Store';
import PokedexScreen from './screens/PokedexScreen';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <View>
            <PokedexScreen />
          </View>
        </SafeAreaView>
      </Provider>
    )
  }
}
