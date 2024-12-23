import {RatingInputValuesType} from '../data/rating-input-values.ts';

export const getCapitalizeWord = (value: string):string => value[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase();


export const createArrayFromObjectValues = (value: RatingInputValuesType): number[] => {
  const values = Object.values(value);
  return values.sort((a, b) => b - a);
};
