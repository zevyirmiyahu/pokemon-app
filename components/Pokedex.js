import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect} from 'react-redux';

class Pokedex extends Component {
    allPokemon = [];
    state = {
        pokemon: {
            name: '',
            id: -1,
            image: '',  
        },
        pokemonList: [],
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
                <Text style={styles.pokemonName}>Name: {this.state.pokemon.name}</Text>
            </View>
        );
    }
 
    render() {
        return (
            <View>
                <Text style={styles.title}> Pokedex </Text>
                <this.PokemonDisplay />
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
                        }
                    });
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
        alignSelf: 'center',
        width: 150, 
        height: 150
    },
    pokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20,
        padding: 10
    }
});

mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        pokemonList: state.pokemonList,
    }
}

export default connect(mapStateToProps)(Pokedex);