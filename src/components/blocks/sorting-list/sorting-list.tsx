

import {SortingItem} from '../sorting-item/sorting-item.tsx';
import {SORTING_TYPES} from '../../../data/sorting-types.ts';
import {useState} from 'react';


export type SortingListType = {
  onChooseSortingTypeHandler: (item: string) => void;
  sortingType: string;
}

export function SortingList({onChooseSortingTypeHandler, sortingType}: SortingListType): JSX.Element{

  const [isOpened, setIsOpened] = useState(false);

  return (
    <form className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpened(!isOpened)}
      >
        {sortingType ?? SORTING_TYPES.POPULAR}
        <svg className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {SORTING_TYPES && Object.values(SORTING_TYPES).map((item: string): JSX.Element =>
          (
            <SortingItem
              sortingValue={item}
              key={crypto.randomUUID()}
              onChooseSortingTypeHandler={() => {
                onChooseSortingTypeHandler(item);
                setIsOpened(false);
              }}
            />))}
      </ul>
    </form>
  );
}
