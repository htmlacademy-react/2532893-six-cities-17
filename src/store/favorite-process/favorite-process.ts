import {OffersDataType} from '../types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';
import {changeFavoriteStatus, fetchFavoritesList} from '../api-actions.ts';

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
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, {payload}: PayloadAction<OffersDataType>) => {
        if (payload.isFavorite) {
          state.favoriteOffers.push(payload);
        } else {
          const favoriteIndex = state.favoriteOffers.findIndex((offer) => offer.id === payload.id);
          state.favoriteOffers.splice(favoriteIndex, 1);
        }
      });
  }
});
