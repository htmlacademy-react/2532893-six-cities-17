
import {Namespace} from '../namespace.ts';
import {LoginStatus} from '../../data/login-status.ts';
import {StateType, UserData} from '../types.ts';


export const getAuthorizationStatus = (state: StateType): LoginStatus => state[Namespace.User].authorizationStatus;
export const getUserData = (state: StateType): UserData | null => state[Namespace.User].userData;
