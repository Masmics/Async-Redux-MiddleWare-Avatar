import {
  fetchCharacters,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS
} from './characterActions';

jest.mock('../services/characterServices', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('characters actions', () => {
  it('it dispatches a loading action and a fetch characters action', () => {
    const promiseMiddle = fetchCharacters();
    const dispatch = jest.fn();

    return promiseMiddle(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS_LOADING
        });

        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
