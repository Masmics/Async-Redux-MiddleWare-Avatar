import reducer from './characterDetailReducer';
import { FETCH_CHARACTER, FETCH_CHARACTER_LOADING } from '../actions/characterDetailActions';

describe('character detail reducer', () => {
  it('handles fetch character action', () => {
    const initialState = {
      loading: true,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'test' }
    });

    expect(newState).toEqual({
      loading: false,
      character: { name: 'test' },
      error: null
    });
  });

  it('handles fetch character load action', () => {
    const initialState = {
      loading: false,
      character: {},
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_LOADING,
    });

    expect(newState).toEqual({
      loading: true,
      character: {},
      error: null
    });
  });
});

