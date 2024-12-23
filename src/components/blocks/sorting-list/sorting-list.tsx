
// noinspection JSDeprecatedSymbols

import {SortingItem} from '../sorting-item.tsx';
import {SORTING_TYPES} from '../../../data/sorting-types.ts';
import {useState} from 'react';

export function SortingList(): JSX.Element{
  const [isOpened, setIsOpened] = useState(false);
  const openSortingHandler = (): void => isOpened ? setIsOpened(false) : setIsOpened(true);

  return (
    <form className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={openSortingHandler}
      >
        {SORTING_TYPES.POPULAR}
        <svg className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {SORTING_TYPES && Object.values(SORTING_TYPES).map((item: string): JSX.Element => <SortingItem sortingValue={item} key={item}/>)}
      </ul>
    </form>
  );
}
