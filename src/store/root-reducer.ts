import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from './namespace.ts';
import {dataProcess} from './data-process/data-process.ts';
import {offersProcess} from './offers-process/offers-process.ts';
import {userProcess} from './user-process/user-process.ts';


export const rootReducer = combineReducers({
  [Namespace.Data]: dataProcess.reducer,
  [Namespace.Offers]: offersProcess.reducer,
  [Namespace.User]: userProcess.reducer,
});
