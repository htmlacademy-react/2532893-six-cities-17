import {createAction} from '@reduxjs/toolkit';
import {IMocksData} from '../mocks/offers.ts';

export const changeCity = createAction<string>('offers/changeCity');
export const showCityOffers = createAction<IMocksData[]>('offers/showCityOffers');
