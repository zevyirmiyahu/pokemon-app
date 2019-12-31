import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import store from '../store/Store';
import Pokedex from '../components/Pokedex';

export default class PokedexScreen extends Component {

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Pokedex />
                </View>
            </Provider>
        );
    }
}
