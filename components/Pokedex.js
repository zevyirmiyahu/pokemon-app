import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

// GET request for a pokemon with particular id
export const getPokemon = (id) => {
    let URL = 'https://pokeapi.co/api/v2/pokemon/' + id;
    let pokemon = new pokemon();
    fetch(URL)
        .then(response => response.json())
        .then(responseJson => {
            return responseJson;
        }).catch(error => console.log(error)); // catches errors if any
}

class Pokedex extends Component {
    state = {
        pokemon: {
            name: '',
            id: -1,
            image: '',  
        },
        pokemonList: []
    }

    getRandomPokemon = () => {
        this.props.dispatch({ type: 'RANDOM_POKEMON' })
    }
    
    addToPokemonList = () => {
        this.props.dispatch({ type: 'STORE_POKEMON' });
    }
    
    render() {
        return (
            <View>
                <Text> Pokedex </Text>
                <Button title='Random Pokemon' 
                    onPress={() => { 
                        this.getRandomPokemon(); 
                        this.addToPokemonList();
                        console.log(this.props.pokemonList); 
                    }} />
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        pokemonList: state.pokemonList
    }
}

export default connect(mapStateToProps)(Pokedex);