// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'; // We'll create this shortly

export const store = configureStore({
  reducer: rootReducer,
});