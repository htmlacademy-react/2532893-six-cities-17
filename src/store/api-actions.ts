import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatchType, AuthData, CommentsType, CommentType, StateType, UserData} from './types.ts';
import {AxiosInstance} from 'axios';
import {APIRoutes} from '../data/server-data.ts';
import {
  redirectToRoute,
} from './action.ts';
import {IMocksData} from '../mocks/offers.ts';
import createAPI from '../services/api.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {RoutePath} from '../data/routes.ts';
import {SendFormType} from '../components/ui/comment-send-form/comment-send-form.tsx';
import {toast} from 'react-toastify';
import {setCurrentOffer} from './offers-process/offers-process.ts';

const api: AxiosInstance = createAPI();


export const fetchOffersAction = createAsyncThunk<IMocksData[], undefined, {
  dispatch: AppDispatchType;
  state: StateType;
}>(
  'data/fetchOffers',
  async () => {
    try{
      const {data} = await api.get<IMocksData[]>(APIRoutes.OFFERS);
      return data;
    } catch {
      toast.warn('Something went wrong while loading the offer. Please try again');
    }

  }
);

export const fetchCurrentOfferAction = createAsyncThunk<IMocksData, string, {
    state: StateType;
    dispatch: AppDispatchType;
}>(
  'offers/loadCurrentOffer',
  async (id, {dispatch}) => {
    try{
      const {data} = await api.get<IMocksData>(`${APIRoutes.OFFERS}/${id}`);
      dispatch(setCurrentOffer(data));
    } catch {
      redirectToRoute(RoutePath.NOT_FOUND);
    }

  }
);

export const fetchNearbyOffersAction = createAsyncThunk<IMocksData[] | null, string, {
  state: StateType;
  dispatch: AppDispatchType;
}>(
  'offers/fetchNearbyOffersAction',
  async (id) => {
    try{
      const {data} = await api.get<IMocksData[]>(`${APIRoutes.OFFERS}/${id}/nearby`);
      return data;
    } catch {
      return null;
    }

  }
);

export const fetchCommentsAction = createAsyncThunk<CommentType[] | null, string, {
  state: StateType;
  dispatch: AppDispatchType;
}>(
  'offers/fetchCommentsAction',
  async (id) => {
    try{
      const {data} = await api.get<CommentsType[]>(`${APIRoutes.COMMENTS}/${id}`);
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
  async () => {
    try{
      await api.get(APIRoutes.LOGIN);
    } catch{
      toast.warn('Something went wrong while loading the offer. Please try again');
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}) => {
    const {data: {token}} = await api.post<UserData>(APIRoutes.LOGIN, {email, password});
    saveToken(token);
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatchType;
    state: StateType;
    extra: AxiosInstance;
}>(
  'user/logout',
  async () => {
    await api.delete(APIRoutes.LOGOUT);
    dropToken();
    // dispatch(requireAuthorization(LoginStatus.NoAuth));
  },
);
export const sendCommentAction = createAsyncThunk<
  void,
  { offerId: string | undefined; formData: SendFormType },
  {
    state: StateType;
  }>(
    'comments/sendComment',
    async ({ offerId, formData }) => {
      const {comment, rating} = formData;
      await api.post<CommentType>((`${APIRoutes.COMMENTS}/${offerId}`), {comment, rating});
    },
  );
