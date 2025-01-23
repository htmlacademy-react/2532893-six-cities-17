import {IMocksData} from '../../mocks/offers.ts';
import {CommentsType} from '../types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';
import {
  fetchCommentsAction,
  fetchCurrentOfferAction,
  fetchNearbyOffersAction,
  fetchOffersAction
} from '../api-actions.ts';
import {toast} from 'react-toastify';

type DataProcessType = {
  offers: IMocksData[];//
  comments: CommentsType[] | null;
  nearbyOffers: IMocksData[] | null;//
  isOffersDataLoading: boolean;//
  isCurrentOfferDataLoading: boolean;//
  isCommentsDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;//
}

const initialState: DataProcessType = {
  offers: [],
  comments: [],
  nearbyOffers: [],
  isOffersDataLoading: false,
  isCurrentOfferDataLoading: false,
  isCommentsDataLoading: false,
  isNearbyOffersDataLoading: false,
};


export const dataProcess = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        toast.warn('Something went wrong while loading the offer. Please try again');
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isCurrentOfferDataLoading = false;
      })
      .addCase(fetchCurrentOfferAction.rejected, (state) => {
        state.isCurrentOfferDataLoading = false;
        toast.warn('Something went wrong while loading the offer. Please try again');
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isNearbyOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersDataLoading = false;
        toast.warn('Something went wrong while loading the offer. Please try again');
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsDataLoading = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isCommentsDataLoading = false;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.isCommentsDataLoading = false;
        toast.warn('Something went wrong while loading the offer. Please try again');
      })
  }
});
