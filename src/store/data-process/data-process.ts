import {CommentsType, OffersDataType, Status} from '../types.ts';
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
  offers: OffersDataType[];
  comments: CommentsType[] | null;
  reviewPostingStatus: Status;
  nearbyOffers: OffersDataType[] | null;
  isOffersDataLoading: boolean;
  isCurrentOfferDataLoading: boolean;
  isCommentsDataLoading: boolean;
  isNearbyOffersDataLoading: boolean;
}

const initialState: DataProcessType = {
  offers: [],
  reviewPostingStatus: Status.Idle,
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
        state.isOffersDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersDataLoading = false;
        toast.warn('Something went wrong while loading the offers. Please try again');
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isCurrentOfferDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.isNearbyOffersDataLoading = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
        state.isNearbyOffersDataLoading = false;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.isNearbyOffersDataLoading = false;
        toast.warn('Something went wrong while loading the nearby offers. Please try again');
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isCommentsDataLoading = true;
        state.reviewPostingStatus = Status.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviewPostingStatus = Status.Success;
        state.comments = action.payload;
        state.reviewPostingStatus = Status.Idle;
        state.isCommentsDataLoading = false;
        toast.success('Comment was sent');
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.reviewPostingStatus = Status.Error;
        state.isCommentsDataLoading = false;
        toast.warn('Something went wrong while sending the comment, please try again later');
      });
  }
});

