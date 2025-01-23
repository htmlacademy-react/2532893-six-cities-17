
// noinspection JSDeprecatedSymbols

import {useEffect} from 'react';
import {getSortedOffersList} from '../../../utility/utility.ts';
import {useAppSelector} from '../../../utility/hooks.ts';
import {IMocksData} from '../../../mocks/offers.ts';
import {defaultCity} from '../../../store/offers-process/offers-process.ts';
import {getOffers} from '../../../store/data-process/data-selectors.ts';

export type SortingValueType = {
  sortingValue: string;
  onChooseSortingTypeHandler: () => void;
}

export function SortingItem({sortingValue, onChooseSortingTypeHandler}: SortingValueType): JSX.Element {
  const cityOffers = useAppSelector(getOffers).filter((item: IMocksData) => item.city.name === defaultCity.title);
  useEffect(() => {
    getSortedOffersList(cityOffers, sortingValue);
  }, [cityOffers, sortingValue]);
  return (
    <li className="places__option places__option--active"
      tabIndex={0}
      onClick={() => {
        onChooseSortingTypeHandler();
        getSortedOffersList(cityOffers, sortingValue);
      }}
    >{sortingValue}
    </li>
  );
}
