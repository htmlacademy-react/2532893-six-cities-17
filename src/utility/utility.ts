import {IMocksData} from '../mocks/offers.ts';

export const getCapitalizeWord = (value: string):string => value[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase();

export const createUniqueCityList = (itemsList: IMocksData[]) => {
  const result = [];
  for (const item of itemsList){
    result.push(item.city.name);
  }
  return Array.from(new Set(result));
};
