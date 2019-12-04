import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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
                <Text style={styles.title}> Pokedex </Text>
                {/* <Button title='Random Pokemon' 
                    onPress={() => { 
                        this.getRandomPokemon(); 
                        this.addToPokemonList();
                        console.log(this.props.pokemonList); 
                    }} /> */}

                    <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => {
                        this.getRandomPokemon(); 
                        this.addToPokemonList();
                        console.log(this.props.pokemonList); 
                    }}>
                        <Text style={styles.buttonText}>Random Pokemon</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
        
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContainer: {
        padding: 15,
        backgroundColor: '#eb4034', // red
        borderBottomColor: '#8a211a', // darker red
        borderRadius: 10,
        alignSelf: 'center'
    }
});

mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        pokemonList: state.pokemonList
    }
}

export default connect(mapStateToProps)(Pokedex);