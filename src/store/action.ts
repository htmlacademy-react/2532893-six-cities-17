
import {IMocksData} from '../mocks/offers.ts';
import {LoginStatus} from '../data/login-status.ts';
import {RoutePath} from '../data/routes.ts';
import {createAction} from '@reduxjs/toolkit';

export const changeActiveCity = createAction<string>('offers/changeCity');
export const loadOffers = createAction<IMocksData[]>('data/loadOffers');
export const loadCurrentOffer = createAction<IMocksData>('offers/fetchCurrentOffer');
export const setCurrentOffer = createAction<IMocksData>('offers/setCurrentOffer');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<LoginStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('data/setError');
export const redirectToRoute = createAction<RoutePath>('app/redirectToRoute');
