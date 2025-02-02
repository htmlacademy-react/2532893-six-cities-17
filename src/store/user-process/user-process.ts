
import {LoginStatus} from '../../data/login-status.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';
import {fetchAuthorizationStatus, loginAction, logoutAction} from '../api-actions.ts';
import {UserData} from '../types.ts';

type UserProcessType = {
  authorizationStatus: LoginStatus;
  userData: UserData | null;
};

const initialState: UserProcessType = {
  authorizationStatus: LoginStatus.Unknown,
  userData: null,
};

export const userProcess = createSlice({
  name: Namespace.User,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchAuthorizationStatus.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = LoginStatus.Auth;
      })
      .addCase(fetchAuthorizationStatus.rejected, (state) => {
        state.authorizationStatus = LoginStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = LoginStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = LoginStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = LoginStatus.NoAuth;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.authorizationStatus = LoginStatus.Auth;
      });
  }
});
