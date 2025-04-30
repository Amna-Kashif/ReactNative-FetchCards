import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../slices/CardSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});
