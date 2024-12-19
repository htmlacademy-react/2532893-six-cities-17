import {DEFAULT_CITY} from '../mocks/default-city.ts';
import {IMocksData, OFFERS_DATA_MOCK} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity} from './action.ts';
import {showCityOffers} from './action.ts';
import {ReducerWithInitialState} from '@reduxjs/toolkit/dist/createReducer';

const defaultCity = DEFAULT_CITY.find((item) => item.title === 'Paris');

type initialStateType = {
  cityName: string | undefined,
  cityOffers: IMocksData[],
}

const initialState: initialStateType = {
  cityName: defaultCity?.title,
  cityOffers: OFFERS_DATA_MOCK.filter((item) => item.city.name === defaultCity?.title),
};

export const reducer: ReducerWithInitialState<initialStateType> = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.cityName = action.payload;
  });
  builder.addCase(showCityOffers, (state, action) => {
    state.cityOffers = action.payload;
  });
});
