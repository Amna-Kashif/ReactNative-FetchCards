import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const res = await axios.get('https://fakestoreapi.com/products?limit=10');
  return res.data;
});

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default cardSlice.reducer;
