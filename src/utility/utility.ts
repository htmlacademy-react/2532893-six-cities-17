import {RatingInputValuesType} from '../data/rating-input-values.ts';
import {SORTING_TYPES} from '../data/sorting-types.ts';
import {CommentsType, OffersDataType} from '../store/types.ts';
import {defaultCityType} from '../data/cities-list.ts';

export const getCapitalizeWord = (value: string):string => value[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase();


export const createArrayFromObjectValues = (value: RatingInputValuesType): number[] => {
  const values = Object.values(value);
  return values.sort((a, b) => b - a);
};


export const getSortedOffersList = (list: OffersDataType[], typeOfSorting: string) => {
  let result: OffersDataType[];

  switch (typeOfSorting) {
    case (SORTING_TYPES.POPULAR):
      result = [...list];
      break;
    case (SORTING_TYPES.PRICE_TO_HIGH):
      result = [...list].sort((a: OffersDataType, b: OffersDataType) => a.price - b.price);
      break;
    case (SORTING_TYPES.PRICE_TO_LOW):
      result = [...list].sort((a: OffersDataType, b: OffersDataType) => b.price - a.price);
      break;
    case (SORTING_TYPES.TOP_RATED):
      result = [...list].sort((a: OffersDataType, b: OffersDataType) => b.rating - a.rating);
      break;
    default:
      result = [...list];
      break;
  }
  return result;
};

export const getSortedCommentsList = (comments: CommentsType[] | null) => {
  let sortedComments;
  if (comments){
    sortedComments = comments.toSorted((a: CommentsType, b: CommentsType) => Date.parse(a.date) - Date.parse(b.date));
  }
  return sortedComments;
};

export const getRandomCity = (cityList:defaultCityType[]) => {
  const randomIndex = Math.floor(Math.random() * (cityList.length - 1));
  const result = cityList[randomIndex];
  return result;
};
