import {CITIES_LIST, defaultCityType} from '../mocks/cities-list.ts';
import {IMocksData} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeActiveCity,
  loadOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  setError,
  loadCurrentOffer, setCurrentOffer
} from './action.ts';
import {ReducerWithInitialState} from '@reduxjs/toolkit/dist/createReducer';
import {LoginStatus} from '../data/login-status.ts';

export const defaultCity: defaultCityType = CITIES_LIST[0];

export type initialStateType = {
  activeCityName: string;
  offers: IMocksData[];
  currentOffer: IMocksData | null;
  reviews: [];
  nearbyOffers: IMocksData[];
  isOffersDataLoading: boolean;
  isCurrentOfferDataLoading: boolean;
  isCommentsDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;
  authorizationStatus: LoginStatus;
  error: string | null;
}

export const initialState: initialStateType = {
  activeCityName: defaultCity.title,
  offers: [],
  currentOffer: null,
  reviews: [],
  nearbyOffers: [],
  isOffersDataLoading: false,
  isCurrentOfferDataLoading: false,
  isCommentsDataLoading: false,
  isNearbyOffersDataLoading: false,
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
  builder.addCase(setCurrentOffer, (state, action) => {
    state.currentOffer = action.payload;
  });
});
