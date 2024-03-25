// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import { counterReducer } from './counterReducer.js';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

