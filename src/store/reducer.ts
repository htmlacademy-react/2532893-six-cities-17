import {DEFAULT_CITY, defaultCityType} from '../mocks/default-city.ts';
import {IMocksData, OFFERS_DATA_MOCK} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, showCityOffers, showActiveOffer} from './action.ts';
import {ReducerWithInitialState} from '@reduxjs/toolkit/dist/createReducer';

const defaultCity: defaultCityType = DEFAULT_CITY[0];

export type initialStateType = {
  cityName: string;
  cityOffers: IMocksData[];
  activeOffer: string;
}

export const initialState: initialStateType = {
  cityName: defaultCity.title,
  cityOffers: OFFERS_DATA_MOCK.filter((item) => item.city.name === defaultCity.title),
  activeOffer: '',
};

export const reducer: ReducerWithInitialState<initialStateType> = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.cityName = action.payload;
  });
  builder.addCase(showCityOffers, (state, action) => {
    state.cityOffers = action.payload;
  });
  builder.addCase(showActiveOffer, (state, action) => {
    state.activeOffer = action.payload;
  });
});
