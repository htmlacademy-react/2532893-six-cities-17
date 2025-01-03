import {RatingInputValuesType} from '../data/rating-input-values.ts';
import {SORTING_TYPES} from '../data/sorting-types.ts';
import {IMocksData} from '../mocks/offers.ts';

export const getCapitalizeWord = (value: string):string => value[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase();


export const createArrayFromObjectValues = (value: RatingInputValuesType): number[] => {
  const values = Object.values(value);
  return values.sort((a, b) => b - a);
};


export const getSortedOffersList = (list: IMocksData[], typeOfSorting: string) => {
  let result: IMocksData[];

  switch (typeOfSorting) {
    case (SORTING_TYPES.POPULAR):
      result = [...list];
      break;
    case (SORTING_TYPES.PRICE_TO_HIGH):
      result = [...list].sort((a: IMocksData, b: IMocksData) => a.price - b.price);
      break;
    case (SORTING_TYPES.PRICE_TO_LOW):
      result = [...list].sort((a: IMocksData, b: IMocksData) => b.price - a.price);
      break;
    case (SORTING_TYPES.TOP_RATED):
      result = [...list].sort((a: IMocksData, b: IMocksData) => b.rating - a.rating);
      break;
    default:
      result = [...list];
      break;
  }
  return result;
};
