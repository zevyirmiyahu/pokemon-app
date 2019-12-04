import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect} from 'react-redux';

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
        pokemonList: [],
        key: 0
    }

    getRandomPokemon = () => {
        this.props.dispatch({ type: 'RANDOM_POKEMON' })
    }
    
    addToPokemonList = () => {
        this.props.dispatch({ type: 'STORE_POKEMON' });
    }

    // Component used to Display current Pokemon
    PokemonDisplay = () => {
        return(
            <View>
                <Image 
                    source={{uri: this.state.pokemon.image}}
                    style={styles.image} 
                />
                <Text>Name: {this.state.pokemon.name}</Text>
                <Text>Key: {this.state.key}</Text>
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
                        this.addToPokemonList();
                        this.setState({
                            pokemon: {
                                name: this.props.pokemon.name,
                                id: this.props.pokemon.id,
                                image: this.props.pokemon.image
                            },
                            key: Math.random()});

                        // console.log(this.props.pokemonList); 
                        
                    }}>
                        
                        <Text style={styles.buttonText}>Random Pokemon</Text>
                    </TouchableOpacity>
                    {console.log(this.props.pokemon)}
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
        alignSelf: 'center',
        width: 150, 
        height: 150
    }
});

mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        pokemonList: state.pokemonList
    }
}

export default connect(mapStateToProps)(Pokedex);