import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  AuthData,
  CommentsType,
  CommentType,
  CurrentOfferDataType,
  OffersDataType, StateType,
  UserData
} from './types.ts';
import {AxiosInstance, AxiosResponse} from 'axios';
import {APIRoutes} from '../data/server-data.ts';
import {
  redirectToRoute,
} from './action.ts';
import createAPI from '../services/api.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {RoutePath} from '../data/routes.ts';
import {SendFormType} from '../components/ui/comment-send-form/comment-send-form.tsx';
import {toast} from 'react-toastify';

const api: AxiosInstance = createAPI();


export const fetchOffersAction = createAsyncThunk<OffersDataType[], undefined>(
  'data/fetchOffers',
  async (): Promise<OffersDataType[]> => {
    const {data} = await api.get<OffersDataType[]>(APIRoutes.OFFERS);
    try{
      return data;
    } catch {
      toast.warn('Something went wrong while loading the offer. Please try again');
    }
    return data;

  }
);

export const fetchCurrentOfferAction = createAsyncThunk<CurrentOfferDataType | undefined, string>(
  'offers/loadCurrentOffer',
  async (id) => {
    try{
      const {data} = await api.get<CurrentOfferDataType>(`${APIRoutes.OFFERS}/${id}`);
      return data;
    } catch {
      redirectToRoute(RoutePath.NOT_FOUND);
    }

  }
);

export const fetchNearbyOffersAction = createAsyncThunk<OffersDataType[] | null, string>(
  'offers/fetchNearbyOffersAction',
  async (id) => {
    try{
      const {data} = await api.get<OffersDataType[]>(`${APIRoutes.OFFERS}/${id}/nearby`);
      return data;
    } catch {
      return null;
    }

  }
);

export const fetchCommentsAction = createAsyncThunk<CommentsType[] | null, string>(
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

export const fetchAuthorizationStatus = createAsyncThunk<UserData | null, undefined>(
  'data/authorizationStatus',
  async () => {
    const response: AxiosResponse<UserData, null> = await api.get(APIRoutes.LOGIN);
    try{
      return response.data;
    } catch{
      toast.warn('Please sign in to see all features');
    }
    return response.data;
  }
);

export const loginAction = createAsyncThunk<void, AuthData>(
  'user/login',
  async ({login: email, password}) => {
    const {data: {token}} = await api.post<UserData>(APIRoutes.LOGIN, {email, password});
    saveToken(token);
  }
);

export const logoutAction = createAsyncThunk<void, undefined>(
  'user/logout',
  async () => {
    await api.delete(APIRoutes.LOGOUT);
    dropToken();
  },
);
export const sendCommentAction = createAsyncThunk<
  void,
  { offerId: string | undefined; formData: SendFormType }>(
    'comments/sendComment',
    async ({ offerId, formData }) => {
      const {comment, rating} = formData;
      await api.post<CommentType>((`${APIRoutes.COMMENTS}/${offerId}`), {comment, rating});
    },
  );

export const fetchFavoritesList = createAsyncThunk<OffersDataType[], undefined>(
  'favorites/fetchFavoritesList',
  async (): Promise<OffersDataType[]> => {
    const {data} = await api.get<OffersDataType[]>(APIRoutes.FAVORITE);
    try{
      return data;
    } catch {
      toast.warn('There are no favorites offers');
    }
    return data;

  }
);

export const changeFavoriteStatus = createAsyncThunk<OffersDataType, {id: string; status: number}, {state: StateType}>(
  'favorites/changeFavoriteStatus',
  async ({ id: offerId, status }, {getState}) => {

    const { data } = await api.post<OffersDataType>(`${APIRoutes.FAVORITE}/${offerId}/${status}`);

    const offers = getState().DATA.offers;
    const currentOffer = offers && offers.find((offer) => offer.id === data.id);

    if (!currentOffer) {
      throw new Error('Some Error...');
    }

    const result: OffersDataType = {
      ...currentOffer,
      isFavorite: data.isFavorite,
    };
    console.log(status);
    console.log(result.isFavorite);
    return result;
  }
);
