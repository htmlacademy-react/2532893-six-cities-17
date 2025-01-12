import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, AuthData, StateType, UserData} from './types.ts';
import {AxiosInstance} from 'axios';
import {APIRoutes, TIMEOUT_SHOW_ERROR} from '../data/server-data.ts';
import {loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus} from './action.ts';
import {IMocksData} from '../mocks/offers.ts';
import {LoginStatus} from '../data/login-status.ts';
import {store} from './index.ts';
import createAPI from '../services/api.ts';
import {dropToken, saveToken} from '../services/token.ts';

const api: AxiosInstance = createAPI();


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

export const fetchAuthorizationStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  'data/authorizationStatus',
  async (_arg, {dispatch}) => {
    try{
      await api.get(APIRoutes.LOGIN);
      dispatch(requireAuthorization(LoginStatus.Auth));
    } catch {
      dispatch(requireAuthorization(LoginStatus.NoAuth));
    }
  }
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR
    );
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch}) => {
    const {data: {token}} = await api.post<UserData>(APIRoutes.LOGIN, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(LoginStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch}) => {
    await api.delete(APIRoutes.LOGOUT);
    dropToken();
    dispatch(requireAuthorization(LoginStatus.NoAuth));
  },
);
