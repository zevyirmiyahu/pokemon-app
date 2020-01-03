import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import axios from 'axios';

class Pokedex extends Component {

    pokemon = {
        name: '',
        id: -1,
        image: '',
        imageShiny: '', 
        ability: [],  
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
        let id = Math.floor(Math.random() * 808); // random number from 1 - 807
        let URL1 = "https://pokeapi.co/api/v2/pokemon-form/" + id;
        let URL2 = "https://pokeapi.co/api/v2/pokemon/" + id;
        
        axios.all([axios.get(URL1), axios.get(URL2)])
        .then(axios.spread((response1, response2) => {
            console.log(response1.data.sprites.front_default);
            //For response 1 from URL 1
            let name = response1.data.name;
            let image = response1.data.sprites.front_default; // image URL
            let imageShiny = response1.data.sprites.front_shiny;
            //For response 2 from URL 2
            let abilitiesArray = response2.data.abilities;  
            let ability = '';
            for(i = 0; i < abilitiesArray.length; i++) {
                ability += abilitiesArray[i].ability.name + " ";
            }   

            let pokemon = {
                name: name,
                id: id,
                image: image,
                imageShiny: imageShiny,
                ability: ability
            }
            this.pokemon = pokemon; // set the pokemon
        }));
    }

    // Component used to Display current Pokemon
    PokemonDisplay = () => {
        return(
            <View style={{marginVertical: 15}}>
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.imageHeader}>Normal</Text>
                            <Image 
                                source={{uri: this.pokemon.image}}
                                style={styles.image} 
                            />
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.imageHeader}>Shiny</Text>
                            <Image 
                                source={{uri: this.pokemon.imageShiny}}
                                style={styles.image} 
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.descriptionFont}>Name: {this.pokemon.name}</Text>
                <Text style={styles.descriptionFont}>Pokemon #: {this.pokemon.id}</Text>
                <Text style={styles.descriptionFont}>Abilities: {this.pokemon.ability}</Text>

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
        margin: 5,
        alignSelf: 'center',
        width: 150, 
        height: 150,
        borderWidth: 3,
        borderRadius: 15,
        borderColor: '#eb4034', // red
    },
    imageHeader: {
        alignSelf: 'center',
        fontSize: 15,
        fontWeight: 'bold'
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