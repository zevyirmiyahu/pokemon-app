import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import axios from 'axios';

class Pokedex extends Component {

    pokemon = {
        name: '',
        id: -1,
        image: '',  
    }  

    state = {
        pokemon: {
            name: '',
            id: -1,
            image: '',  
        },
        pokemonList: [],
        testMe: -1,
        key: 0
    }
    
    addToPokemonList = () => {
        this.props.dispatch({ type: 'STORE_POKEMON' });
    }

    // Call API and returns a random pokemon object
    getRandomPokemon = () => {
        let id = Math.floor(Math.random() * 807 + 1); // random number from 1 - 808
        let URL = "https://pokeapi.co/api/v2/pokemon-form/" + id;
        axios.get(URL)
        .then((response) => {
            let name = response.data.name;
            let image = response.data.sprites.front_default // image URL
            let pokemon = {
                name: name,
                id: id,
                image: image
            }
            this.pokemon = pokemon; // set the pokemon
        });
    }

    // Component used to Display current Pokemon
    PokemonDisplay = () => {
        return(
            <View>
                <Image 
                    source={{uri: this.pokemon.image}}
                    style={styles.image} 
                />
                <Text style={styles.descriptionFont}>Name: {this.pokemon.name}</Text>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Text style={styles.title}> Pokedex </Text>
                <this.PokemonDisplay key={this.state.key}/>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => {
                        this.getRandomPokemon();
                        this.setState({key: Math.random()}); // forces PokemonDisplay to update
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
    },
    image: {
        marginTop: 50,
        alignSelf: 'center',
        width: 150, 
        height: 150,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#eb4034', // red
    },
    descriptionFont: {
        backgroundColor: '#eb4034', // red
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10
    }
});

mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        pokemonList: state.pokemonList,
        testMe: state.testMe,
        key: state.key
    }
}

export default connect(mapStateToProps)(Pokedex);