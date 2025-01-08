import {CITIES_LIST, defaultCityType} from '../mocks/cities-list.ts';
import {IMocksData} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, loadOffers} from './action.ts';
import {ReducerWithInitialState} from '@reduxjs/toolkit/dist/createReducer';

export const defaultCity: defaultCityType = CITIES_LIST[0];

export type initialStateType = {
  activeCityName: string;
  offers: IMocksData[];
}

export const initialState: initialStateType = {
  activeCityName: defaultCity.title,
  offers: [],
};

export const reducer: ReducerWithInitialState<initialStateType> = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveCity, (state, action) => {
    state.activeCityName = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
});
