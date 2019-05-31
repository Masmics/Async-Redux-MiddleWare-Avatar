import reducer from './charactersReducer';
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_LOADING,
  FETCH_CHARACTERS_ERROR
} from '../actions/characterActions';

describe('characters reducer', () => {
  it('facilitates fetching characters', () => {
    const initialState = {
      loading: true,
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS,
      payload: ['test']
    });

    expect(newState).toEqual({
      loading: false,
      list: ['test'],
      error: null
    });
  });

  it('facilitates the loading action', () => {
    const initialState = {
      loading: false,
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      list: [],
      error: null
    });
  });

  it('facilitates the error action', () => {
    const initialState = {
      loading: true,
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_ERROR,
      payload: 'test error'
    });

    expect(newState).toEqual({
      loading: false,
      list: [],
      error: 'test error'
    });
  });
});
