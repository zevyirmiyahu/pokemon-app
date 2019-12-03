import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Pokedex from '../components/Pokedex';

export default class PokedexScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Pokedex />
      </View>
    );
  }
}
