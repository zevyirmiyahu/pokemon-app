import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/mainComponents/Button';

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
            style={{alignSelf: 'center', width: 250, height: 92}}
          />
        <View style={{marginVertical: 15, marginHorizontal: 50}}>
            <Button/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});