import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
  TouchableHighlightBase
} from 'react-native';
import { Icon } from 'react-native-elements';

import Button from '../components/Button';
import Character from '../components/Character';
import GameEngine from '../engine/GameEngine';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }

  TitleScreen = () => {
    return (
      <View style={styles.modalContainer}>
        <Modal
          style={styles.modalContainer}
          visible={this.state.modalVisible}
          transparent={false}
          animationType='fade'
        >
          <View style={{ padding: 50 }}>
            <Image
              style={{ alignSelf: 'center', width: 410, height: 154 }}
              source={require('../images/pokemon-logo.png')}
            />

          </View>
          <TouchableOpacity
            style={styles.modalButtonContainer}
            onPress={() => this.setState({ modalVisible: false })}
          >
            <Text style={styles.modalButtonText}>Play</Text>
          </TouchableOpacity>

        </Modal>
      </View>
    );
  }

  Title = () => {
    return (
      <Image
        source={require('../images/pokemon-logo.png')}
        style={{ alignSelf: 'center', width: 250, height: 92 }}
      />
    );
  }

  CharacterAnimation = () => {
    return (
      <View style={styles.characterContaienr}>
        <Character />
      </View>
    );
  }

  Seperator = (width) => {
    return (
      <View style={{ borderBottomWidth: width, borderColor: '#9e1920', paddingHorizontal: '50%' }}></View>
    );
  }

  InfoBar = () => {
    return (
      <View>

        <View
          style={{
            paddingLeft: '5%'
          }}>
          <Text style={styles.infoBarText}>Distance Traveled: </Text>
          <Text style={styles.infoBarText}>Pokemon Caught Traveled: </Text>
          <Text style={styles.infoBarText}>Pokeballs: 5 </Text>
        </View>
        <View style={{ marginTop: '10%' }}>
          {this.Seperator(20)}
        </View>

      </View >
    );
  }

  HealthMeter = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
        />
        <Text style={styles.healthMeter}>100%</Text>
      </View>
    );
  }

  PokeballMeter = () => {
    return (
      <Image
        style={styles.pokeballMeter}
        source={require('../images/pokeball.png')}
      />
    );
  }

  LifeMeters = () => {
    return (
      <View style={styles.lifeMeters}>
        <this.HealthMeter />
        <this.PokeballMeter />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <GameEngine />
        <this.Title />
        {this.Seperator(20)}
        <this.LifeMeters />
        <this.CharacterAnimation />
        <this.InfoBar />


        <View style={styles.buttonsContainer}>
          <Button title={"Pokemon"} />
          <Button title={"Items"} />
          <Button title={"Pokedex"} />
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: '25%',
    alignItems: 'center',
    backgroundColor: '#CE2029', // fire engine red
  },
  characterContaienr: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  buttonsContainer: {
    marginVertical: 50,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  modalButtonContainer: {
    marginTop: 150,
    marginHorizontal: 50,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#8a211a', // darker red
    backgroundColor: '#eb4034', // red
  },
  modalButtonText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'pink'
  },
  healthMeter: {
    marginRight: '40%',
    paddingTop: 16,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  },
  pokeballMeter: {
    marginRight: '5%',
    marginTop: '2%', 
    width: 50, 
    height: 50
  },
  lifeMeters: {
    flexDirection: 'row',
    paddingHorizontal: '10%',
    backgroundColor: '#eb4034', // light red
  },
  infoBarText: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }


});