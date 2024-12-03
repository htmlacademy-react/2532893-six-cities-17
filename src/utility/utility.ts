import {IMocksData} from '../mocks/offers.ts';

export const getCapitalizeWord = (value: string):string => value[0].toUpperCase() + value.split('').slice(1).join('').toLowerCase();

export const createUniqueCityList = (arr: IMocksData[]) => {
  const arrt = [];
  for (const item of arr){
    arrt.push(item.city.name);
  }
  return Array.from(new Set(arrt));
};
