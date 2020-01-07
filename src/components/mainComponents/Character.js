import React, { Component } from 'react';
import { View, Text, Image, InteractionManager } from 'react-native';

// players still position
const walk1 = () => {
    return(
        <Image source={require('../../images/CharacterWalk1.png')} style={{height: 50, width: 50}} />
    );
}

// player taking a step position
const walk2 = () => {
  return(
    <Image source={require('../../images/CharacterWalk2.png')} style={{height: 50, width: 50}} />
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
    console.log("walking");
    if(this.state.flag) {
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
    // timeNow = new Date().getSeconds();

    // // Second part of boolean is when timeNow goes from 59 secs back to 0 secs
    // if(timeNow > currentTime || timeNow - currentTime <= 0) {
    //   this.setState({
    //     characterImage: walk2
    //   })
    // }
    // else {
    //   this.setState({
    //     characterImage: walk1()
    //   })
    // }
    
  componentDidMount() {
    interval = setInterval(() => {
      if(this.state.flag) {
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
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    
    return (
      <View>
        <Text> Character </Text>
        {this.state.characterImage}
      </View>
    );
  }
}
