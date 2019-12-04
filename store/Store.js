import { createStore } from 'redux';
import axios from 'axios';

const initialState = {
    pokemon: {
        name: '',
        id: -1,
        image: '',
    },
    pokemonList: []
}

storePokemon = (state = initialState, action) => {
    switch (action.type) {
        case 'RANDOM_POKEMON':
            let id = Math.floor(Math.random() * 100); // random number from 0 - 99
            let URL = "https://pokeapi.co/api/v2/pokemon-form/" + id;
            let pokemon = {
                name: '',
                id: id,
                image: '',
            }
            axios.get(URL)
            .then(function (response) {
                pokemon.name = response.data.name;
                pokemon.image = response.data.sprites.front_default // image URL
            })
            .catch(function (error) {
                console.error(error);
            })
            return {
                pokemon: pokemon,
                pokemonList: state.pokemonList,
            }
            // fetch(URL)
            //     .then(response => response.json())
            //     .then(responseJson => {
            //         // console.log(responseJson);
            //         pokemon.id = responseJson.id;
            //         pokemon.name = responseJson.name;
            //         pokemon.image = responseJson.sprites.front_default;
            //     }).catch(error => console.log(error)); // catches errors if any
            //     console.log(pokemon);
            //     return {
            //         pokemon: pokemon, // new pokemon
            //         pokemonList: state.pokemonList
            //     }
        case 'STORE_POKEMON':
            return {
                pokemon: state.pokemon,
                pokemonList: [...state.pokemonList, state.pokemon],
            }
        default: return state;
    }
}

const store = createStore(storePokemon);
export default store;
