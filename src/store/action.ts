
// import {IMocksData} from '../mocks/offers.ts';
// import {LoginStatus} from '../data/login-status.ts';
import {RoutePath} from '../data/routes.ts';
import {createAction} from '@reduxjs/toolkit';
// import {CommentsType} from './types.ts';

// export const changeActiveCity = createAction<string>('offers/changeCity');
//
// export const setCurrentOffer = createAction<IMocksData>('offers/setCurrentOffer');
// export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
//
// export const requireAuthorization = createAction<LoginStatus>('user/requireAuthorization');
// export const setError = createAction<string | null>('data/setError');
//
// export const setNearbyOffers = createAction<IMocksData[]>('offer/setNearbyOffers');
// export const setCommentsList = createAction<CommentsType[]>('offer/setCommentsList');
export const redirectToRoute = createAction<RoutePath>('app/redirectToRoute');
// export const loadOffers = createAction<IMocksData[]>('data/loadOffers');
