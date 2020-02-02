import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Players stand position
const walk1 = () => {
  return (
    <Image source={require('../images/CharacterWalk1.png')} style={styles.image} />
  );
}

// Player taking a step position
const walk2 = () => {
  return (
    <Image source={require('../images/CharacterWalk2.png')} style={styles.image} />
  );
}

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().getSeconds(), //initial seconds
      characterImage: walk1(),
      flag: false // used to flip between images
    };
  }

  // Function that controls the walk motion of character
  walking = () => {
    if (this.state.flag) {
      this.setState({
        characterImage: walk1(),
        flag: false
      });
    }
    else {
      this.setState({
        characterImage: walk2(),
        flag: true
      });
    }
  }

  componentDidMount() {
    interval = setInterval(() => {
      if (this.state.flag) {
        this.setState({
          characterImage: walk1(),
          flag: false
        });
      }
      else {
        this.setState({
          characterImage: walk2(),
          flag: true
        });
      }
    }, 400);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  Seperator = (width) => {
    return(
      <View style={{borderBottomWidth: width, borderColor: '#9e1920', paddingHorizontal: '50%'}}></View>
    );
  }

  render() {
    return (
      <View>
        {this.Seperator(20)}
        <View style={styles.imageContainer}>
          {this.state.characterImage}
        </View>
        {this.Seperator(20)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold'
  },
  image: {
    width: 80,
    height: 80
  },
  imageContainer: {
    paddingVertical: 20,
    paddingHorizontal: '40%',
    backgroundColor: '#9df0f5'
  }
});
