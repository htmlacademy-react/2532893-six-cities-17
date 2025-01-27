import {OffersDataType} from '../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';
import {fetchFavoritesList} from '../api-actions.ts';

type FavoritesType = {
  favoriteOffers: OffersDataType[];
};

const initialState: FavoritesType = {
  favoriteOffers: [],
};

export const favoriteProcess = createSlice({
  name: Namespace.Favorites,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchFavoritesList.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  }
});
