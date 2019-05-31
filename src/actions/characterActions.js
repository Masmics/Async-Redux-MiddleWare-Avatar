import { createAction } from 'promise-middleware-redux';
import { getCharacters } from '../services/characterServices';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  _,
  FETCH_CHARACTERS_ERROR
] = createAction('FETCH_CHARACTERS', getCharacters);

// FETCH_CHARACTERS_DONE

// export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
// export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
// export const FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR';
// export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';

// export const fetchCharacters = () => dispatch => {
//   dispatch({
//     type: FETCH_CHARACTERS_LOADING
//   });

//   return getCharacters()
//     .then(character => {
//       dispatch({
//         type: FETCH_CHARACTERS,
//         pendingType: 'FETCH_CHARACTERS_LOADING',
//         fufilledType: FETCH_CHARACTERS_DONE,
//         payload: character
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: FETCH_CHARACTERS_ERROR,
//         payload: err
//       });
//     });
// };
