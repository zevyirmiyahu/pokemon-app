import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Pokedex from '../components/Pokedex';
import Test from '../components/Test';

export default class PokedexScreen extends Component {

    render() {
        return (
            <View>
                <Pokedex />
            </View>
        );
    }
}
