import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';
import createAPI from '../services/api.ts';
import {userProcess} from './user-process/user-process.ts';

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});

console.log(userProcess);
