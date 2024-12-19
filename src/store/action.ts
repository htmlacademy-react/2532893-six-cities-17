import {ActionCreatorWithPayload, createAction} from '@reduxjs/toolkit';
import {IMocksData} from '../mocks/offers.ts';

export const changeCity:ActionCreatorWithPayload<string> = createAction<string>('offers/changeCity');
export const showCityOffers: ActionCreatorWithPayload<IMocksData[]> = createAction<IMocksData[]>('offers/showCityOffers');
