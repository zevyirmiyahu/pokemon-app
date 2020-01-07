import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/mainComponents/Button';

import Character from '../components/mainComponents/Character';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Image
          source={require('../images/pokemon-logo.png')}
          style={{ alignSelf: 'center', width: 250, height: 92 }}
        />

        <View style={styles.characterContaienr}>
          <Character />
        </View>

        <View style={styles.buttonsContainer}>
          <Button title={"Pokemon"} />
          <Button title={"Items"} />
          <Button title={"Pokedex"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  characterContaienr: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  buttonsContainer: {
    marginVertical: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',

  }

});