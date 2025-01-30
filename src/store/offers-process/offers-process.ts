
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';
import {CITIES_LIST, defaultCityType} from '../../data/cities-list.ts';
import {fetchCurrentOfferAction} from '../api-actions.ts';
import {toast} from 'react-toastify';
import {CurrentOfferDataType} from '../types.ts';

export const defaultCity: defaultCityType = CITIES_LIST[0];

type OffersProcessType = {
    activeCityName: string;
    currentOffer: CurrentOfferDataType | undefined;
}

const initialState: OffersProcessType = {
  activeCityName: defaultCity.title,
  currentOffer: undefined,
};

export const offersProcess = createSlice({
  name: Namespace.Offers,
  initialState,
  reducers: {
    changeActiveCity: (state, action: PayloadAction<string>) => {
      state.activeCityName = action.payload;
    },
  },
  extraReducers(builder){
    builder
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchCurrentOfferAction.rejected, () => {
        toast.warn('Something went wrong while loading the offer. Please try again');
      });
  }
});

export const {changeActiveCity} = offersProcess.actions;
