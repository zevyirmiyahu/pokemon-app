import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={() => this.props.navigation.navigate('Pokedex')}>
            <Text style={styles.text}>Pokedex</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#8a211a', // darker red
        backgroundColor: '#eb4034', // red
    },
    text: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
    
});

export default Button;
