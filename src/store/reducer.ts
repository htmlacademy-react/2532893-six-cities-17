import {CITIES_LIST, defaultCityType} from '../mocks/cities-list.ts';
import {IMocksData} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeActiveCity, loadOffers, setOffersDataLoadingStatus, requireAuthorization, setError} from './action.ts';
import {ReducerWithInitialState} from '@reduxjs/toolkit/dist/createReducer';
import {LoginStatus} from '../data/login-status.ts';

export const defaultCity: defaultCityType = CITIES_LIST[0];

export type initialStateType = {
  activeCityName: string;
  offers: IMocksData[];
  isOffersDataLoading: boolean;
  authorizationStatus: LoginStatus;
  error: string | null;
}

export const initialState: initialStateType = {
  activeCityName: defaultCity.title,
  offers: [],
  isOffersDataLoading: false,
  authorizationStatus: LoginStatus.Unknown,
  error: null,
};

export const reducer: ReducerWithInitialState<initialStateType> = createReducer(initialState, (builder) => {
  builder.addCase(changeActiveCity, (state, action) => {
    state.activeCityName = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});
