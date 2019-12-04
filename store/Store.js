import { createStore } from 'redux';

storePokemon = (state = [], action) => {
    switch(action.type) {
        case 'STORE_POKEMON':
            return {
                state: [...state.pokemonList]
            }
    }
}

const store = createStore(storePokemon);
export default store;
