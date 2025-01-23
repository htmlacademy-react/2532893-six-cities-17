import {IMocksData} from '../../mocks/offers.ts';
import {defaultCity} from '../reducer.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';

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
    setCurrentOffer: (state, action: PayloadAction<IMocksData>) => {
      state.currentOffer = action.payload;
    }
  }
});
