import { createStore } from 'redux';
import axios from 'axios';

const initialState = {
    pokemon: {
        name: '',
        id: -1,
        image: '',
    },
    pokemonList: [],
    testMe: -1,
    key: 0
};

getPokemon = async () => {
    let id = Math.floor(Math.random() * 100); // random number from 0 - 99
    let URL = "https://pokeapi.co/api/v2/pokemon-form/" + id;
    let response = await axios.get(URL)
    let name = response.data.name;
    let image = response.data.sprites.front_default // image URL
    console.log(name);
    return {
        name: name,
        id: id,
        image: image
    }
}

storePokemon = (state = initialState, action) => {
    switch (action.type) {
        case 'RANDOM_POKEMON':
            return state;
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
        // case 'STORE_POKEMON':
        //     return {
        //         pokemon: state.pokemon,
        //         pokemonList: [...state.pokemonList, state.pokemon],
        //         testMe: testMe
        //     }
        default: return state;
    }
}

const store = createStore(storePokemon);
export default store;
