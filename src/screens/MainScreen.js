import React, { Component } from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';

import Character from '../components/Character';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  TitleScreen = () => {
    let props = { ...this.props, title: "Main" };
    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          animationType='slide'

        >
          <View style={{ padding: 50 }}>
            <Image
              style={{ alignSelf: 'center', width: 410, height: 154 }}
              source={require('../images/pokemon-logo.png')}
            />

          </View>
          <Button {...props} />

        </Modal>
      </View>
    );
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