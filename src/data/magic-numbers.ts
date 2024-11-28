import {IMocksData, mocksData} from "./mocks.ts";
import {City} from "./cities.ts";

export const OFFERS_SHOW_COUNT: number = 5;

export const offersCount: number = mocksData.filter((item: IMocksData):boolean => item.city.name === City.AMSTERDAM).length;
