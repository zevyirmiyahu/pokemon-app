import React, { Component } from 'react';
import { View, Text } from 'react-native';

const walk1 = () => {
    return(
        <Image source={require('../../src/images/CharacterWalk1.png')} style={{height: 50, width: 50}} />
    );
}

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  walking = () => {
      if
  }

  render() {
    return (
      <View>
        <Text> Character </Text>
        
      </View>
    );
  }
}
