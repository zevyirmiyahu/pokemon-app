import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> MainScreen </Text>
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => this.props.navigation.navigate('Pokedex')}>
            <Text>Pokedex</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 3,
        borderColor: '#8a211a', // darker red
        backgroundColor: '#eb4034', // red
    },
});