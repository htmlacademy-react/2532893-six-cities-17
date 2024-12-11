import {CityNameTypes} from '../mocks/offers.ts';
import {IMocksData} from '../mocks/offers.ts';

type FavoriteGroupsType = Record<CityNameTypes, IMocksData[]>

export const createFavoriteGroups = (offers: IMocksData[]): FavoriteGroupsType => {
  const result: FavoriteGroupsType = {};

  offers.forEach((item) => {
    const cityName: CityNameTypes = item.city.name;

    if (result[cityName]) {
      result[cityName].push(item);
    } else {
      result[cityName] = [item];
    }
  });

  return result;
};
