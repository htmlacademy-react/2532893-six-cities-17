import {StateType} from '../types.ts';
import {Namespace} from '../namespace.ts';


export const getFavoritesList = (state: StateType) => state[Namespace.Favorites].favoriteOffers;
