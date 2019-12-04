import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'tls';

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

// GET request for a random pokemon
export const getRandomPokemon = () => {
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
        console.log(responseJson);
        pokemon.name = responseJson.name;
        pokemon.image = '';
        return pokemon;
    }).catch(error => console.log(error)); // catches errors if any
}

export default class Pokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {}
        };
    }
    URL = 'https://pokeapi.co/api/v2/pokemon/';
    
    componentDidMount() {
        fetch(this.URL)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            this.setState({
                pokemon: responseJson
            });
        }).catch(error => console.log(error)); // catches errors if any
    }
      
    render() {
        return (
            <View>
                <Text> Pokedex </Text>
                <Button title='Random Pokemon' onPress={() => {this.props.dispatch({type: 'RANDOM_POKEMON'})}} />
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        name: state.name,
        id: state.id,
        image: state.image
    }
}

export default connect(mapStateToProps)(Pokedex);