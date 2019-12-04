import { createStore } from 'redux';


const initialState = {
    pokemon: {
        name: '',
        id: -1,
        image: '',
    },
    pokemonList: []
}

storePokemon = (state = initialState, action) => {
    switch(action.type) {
        case 'STORE_POKEMON':
            return {
                pokemon: state.pokemon,
                pokemonList: state.pokemonList.push(state.pokemon)
            }
        default: return state;
    }
}

const store = createStore(storePokemon);
export default store;
