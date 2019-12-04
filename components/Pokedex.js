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
            console.log(responseJson);
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

    addToPokemonList = () => {
        this.props.dispatch({ type: 'STORE_POKEMON' });
    }


    // GET request for a random pokemon
    getRandomPokemon = () => {
        let id = Math.floor(Math.random() * 100); // random number from 0 - 99
        let URL = 'https://pokeapi.co/api/v2/pokemon/' + id;
        let pokemon = {
            name: '',
            id: id,
            image: '',
        }
        fetch(URL)
            .then(response => response.json())
            .then(responseJson => {
                pokemon.name = responseJson.name;
                pokemon.image = '';
                state.pokemon = pokemon;
                this.addToPokemonList();
            }).catch(error => console.log(error)); // catches errors if any
            console.log(this.state.pokemon);
    }

    render() {
        return (
            <View>
                <Text> Pokedex </Text>
                {/* <Button title='Random Pokemon' onPress={() => {this.props.dispatch({type: 'RANDOM_POKEMON'})}} /> */}
                <Button title='Random Pokemon' 
                    onPress={() => { 
                        let pokemon = this.getRandomPokemon(); 
                        console.log(this.props.pokemonList); 
                    }} />

                {/* <Text>Name: {this.props.pokemon}</Text> */}
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