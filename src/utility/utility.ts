import {IMocksData} from '../mocks/offers.ts';
import {RatingInputValuesType} from '../data/rating-input-values.ts';

export const getCapitalizeWord = (value: string):string => value[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase();

export const createUniqueCityList = (itemsList: IMocksData[]) => {
  const result = [];
  for (const item of itemsList){
    result.push(item.city.name);
  }
  return Array.from(new Set(result));
};

export const createArrayFromEnumValues = (value: RatingInputValuesType): number[] => {
  const values = Object.values(value);
  return values.sort((a, b) => b - a);
};
