import {DEFAULT_CITY} from '../mocks/default-city.ts';
import {OFFERS_DATA_MOCK} from '../mocks/offers.ts';

const defaultCity = DEFAULT_CITY.find((item) => item.title === 'Paris');

export const initialState = {
  cityName: defaultCity?.title,
  cityOffers: OFFERS_DATA_MOCK.filter((item) => item.city.name === defaultCity?.title),
};
