import {StateType} from '../types.ts';
import {Namespace} from '../namespace.ts';


export const getActiveCity = (state: StateType) => state[Namespace.Offers].activeCityName;
export const getCurrentOffer = (state: StateType) => state[Namespace.Offers].currentOffer;
