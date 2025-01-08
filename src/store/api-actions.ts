import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, StateType} from './types.ts';
import {AxiosInstance} from 'axios';
import {APIRoutes} from '../data/server-data.ts';
import {loadOffers} from './action.ts';
import {IMocksData} from '../mocks/offers.ts';
import {createAPI} from '../services/api.ts';
import {setOffersDataLoadingStatus} from './action.ts';

const api = createAPI();


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<IMocksData[]>(APIRoutes.OFFERS);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);
