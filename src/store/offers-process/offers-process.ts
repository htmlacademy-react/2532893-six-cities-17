import {IMocksData} from '../../mocks/offers.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';
import {CITIES_LIST, defaultCityType} from '../../mocks/cities-list.ts';
import {fetchCurrentOfferAction} from '../api-actions.ts';
import {toast} from 'react-toastify';

export const defaultCity: defaultCityType = CITIES_LIST[0];

type OffersProcessType = {
    activeCityName: string;
    currentOffer: IMocksData | null;
}

const initialState: OffersProcessType = {
  activeCityName: defaultCity.title,
  currentOffer: null,
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
