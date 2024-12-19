import {DEFAULT_CITY} from '../mocks/default-city.ts';
import {OFFERS_DATA_MOCK} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action.ts';
import {showCityOffers} from './action.ts';

const defaultCity = DEFAULT_CITY.find((item) => item.title === 'Paris');

const initialState = {
  cityName: defaultCity?.title,
  cityOffers: OFFERS_DATA_MOCK.filter((item) => item.city.name === defaultCity?.title),
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.cityName = action.payload;
  });
  builder.addCase(showCityOffers, (state, action) => {
    state.cityOffers = action.payload;
  });
});
