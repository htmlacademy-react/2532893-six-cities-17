import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, AuthData, CommentsType, CommentType, StateType, UserData} from './types.ts';
import {AxiosInstance} from 'axios';
import {APIRoutes, TIMEOUT_SHOW_ERROR} from '../data/server-data.ts';
import {
  loadOffers,
  redirectToRoute,
  requireAuthorization, setCommentsList, setCurrentOffer,
  setError, setNearbyOffers,
  setOffersDataLoadingStatus
} from './action.ts';
import {IMocksData} from '../mocks/offers.ts';
import {LoginStatus} from '../data/login-status.ts';
import {store} from './index.ts';
import createAPI from '../services/api.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {RoutePath} from '../data/routes.ts';
import {SendFormType} from '../components/ui/comment-send-form/comment-send-form.tsx';

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

export const fetchCurrentOfferAction = createAsyncThunk<void, string, {
    state: StateType;
    dispatch: AppDispatchType;
}>(
  'offers/loadCurrentOffer',
  async (id, {dispatch}) => {
    try{
      const {data} = await api.get<IMocksData>(`${APIRoutes.OFFERS}/${id}`);
      dispatch(setCurrentOffer(data));
      return data;
    } catch {
      redirectToRoute(RoutePath.NOT_FOUND);
    }

  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  state: StateType;
  dispatch: AppDispatchType;
}>(
  'offers/fetchNearbyOffersAction',
  async (id, {dispatch}) => {
    try{
      const {data} = await api.get<IMocksData>(`${APIRoutes.OFFERS}/${id}/nearby`);
      dispatch(setNearbyOffers(data));
      return data;
    } catch {
      return null;
    }

  }
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  state: StateType;
  dispatch: AppDispatchType;
}>(
  'offers/fetchCommentsAction',
  async (id, {dispatch}) => {
    try{
      const {data} = await api.get<CommentsType[]>(`${APIRoutes.COMMENTS}/${id}`);
      dispatch(setCommentsList(data));
      return data;
    } catch {
      return null;
    }

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
export const sendCommentAction = createAsyncThunk<
  void,
  { offerId: string; formData: SendFormType },
  {
    state: StateType;
  }>(
    'comments/sendComment',
    async ({ offerId, formData }) => {
      await api.post<CommentType>((`${APIRoutes.COMMENTS}${offerId}`), formData);
    },
  );
