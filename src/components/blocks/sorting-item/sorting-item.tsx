
// noinspection JSDeprecatedSymbols

import {EventType} from '../sorting-list/sorting-list.tsx';
import {useEffect} from 'react';
import {getSortedOffersList} from '../../../utility/utility.ts';
import {useAppSelector} from '../../../utility/hooks.ts';

export type SortingValueType = {
  sortingValue: string;
  onChooseSortingTypeHandler: (evt: EventType) => void;
}

export function SortingItem({sortingValue, onChooseSortingTypeHandler}: SortingValueType): JSX.Element {
  const cityOffers = useAppSelector((state) => state.cityOffers);
  useEffect(() => {
    getSortedOffersList(cityOffers, sortingValue);
  }, [cityOffers, sortingValue]);
  return (
    <li className="places__option places__option--active"
      tabIndex={0}
      onClick={(evt) => {
        onChooseSortingTypeHandler(evt);
        getSortedOffersList(cityOffers, sortingValue);
      }}
    >{sortingValue}
    </li>
  );
}
