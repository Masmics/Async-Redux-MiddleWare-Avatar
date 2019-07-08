import { getPokemons } from '../services/pokemonServices';

export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMONS_LOADING = 'FETCH_POKEMONS_LOADING';
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';

export const fetchPokemons = () => dispatch => {
  dispatch({
    type: FETCH_POKEMONS_LOADING
  });

  return getPokemons()
    .then(pokemon => {
      dispatch({
        type: FETCH_POKEMONS,
        payload: pokemon
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_POKEMONS_ERROR,
        payload: err
      });
    });
};
