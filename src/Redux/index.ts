import { createStore, combineReducers } from 'redux';

import PokeReducer from './PokeReducer';

const rootReducer = combineReducers({
  PokeReducer: PokeReducer,
});

export const store = createStore(rootReducer);