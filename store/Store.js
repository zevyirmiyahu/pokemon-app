import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStore } from 'redux';

import { getPokemon, getRandomPokemon } from '../components/Pokedex';

// intial pokemon is nothing
initialState = {
    name: '',
    id: -1,
    image: '',
}

randomPokemon = (state = initialState, action) => {
    let ranNum = Math.floor(Math.random() * 100);
    switch(action.type) {
        case 'RANDOM_POKEMON':
            return getRandomPokemon();
        default: return state;
    }

}

const store = createStore(randomPokemon);
export default store;
