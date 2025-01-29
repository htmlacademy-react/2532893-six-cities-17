import {StateType} from '../types.ts';
import {Namespace} from '../namespace.ts';


export const getOffers = (state: StateType) => state[Namespace.Data].offers;
export const getOffersDataLoading = (state: StateType) => state[Namespace.Data].isOffersDataLoading;
export const getNearbyOffersList = (state: StateType) => state[Namespace.Data].nearbyOffers;
export const getCommentsList = (state: StateType) => state[Namespace.Data].comments;
export const getReviewPostingStatus = (state: StateType) => state[Namespace.Data].reviewPostingStatus;
