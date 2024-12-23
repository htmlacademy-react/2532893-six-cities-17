import {DEFAULT_CITY, defaultCityType} from '../mocks/default-city.ts';
import {IMocksData, OFFERS_DATA_MOCK} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, showCityOffers} from './action.ts';
import {ReducerWithInitialState} from '@reduxjs/toolkit/dist/createReducer';

const defaultCity: defaultCityType = DEFAULT_CITY[0];

export type initialStateType = {
  activeCityName: string;
  cityOffers: IMocksData[];
}

export const initialState: initialStateType = {
  activeCityName: defaultCity.title,
  cityOffers: OFFERS_DATA_MOCK.filter((item) => item.city.name === defaultCity.title),
};

export const reducer: ReducerWithInitialState<initialStateType> = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveCity, (state, action) => {
    state.activeCityName = action.payload;
  });
  builder.addCase(showCityOffers, (state, action) => {
    state.cityOffers = action.payload;
  });
});
