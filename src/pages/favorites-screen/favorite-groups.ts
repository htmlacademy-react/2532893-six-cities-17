import {CityNameTypes} from '../../mocks/offers.ts';
import {OffersDataType} from '../../store/types.ts';

type FavoriteGroupsType = Record<CityNameTypes, OffersDataType[]>

export const createFavoriteGroups = (offers: OffersDataType[]): FavoriteGroupsType => {
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
