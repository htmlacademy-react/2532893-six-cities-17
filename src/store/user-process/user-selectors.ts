
import {Namespace} from '../namespace.ts';
import {LoginStatus} from '../../data/login-status.ts';
import {StateType} from '../types.ts';


export const getAuthorizationStatus = (state: StateType): LoginStatus => state[Namespace.User].authorizationStatus;
