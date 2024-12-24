
// noinspection JSDeprecatedSymbols

import {SortingItem} from '../sorting-item/sorting-item.tsx';
import {SORTING_TYPES} from '../../../data/sorting-types.ts';

export type EventType = {
    target: {
      innerText: string;
    };
};

export type SortingListType = {
  onSortingListOpenHandler: () => void;
  onChooseSortingTypeHandler: (evt: EventType) => void;
  sortingType: string;
  isOpened: boolean;
}

export function SortingList({onSortingListOpenHandler, onChooseSortingTypeHandler, sortingType, isOpened}: SortingListType): JSX.Element{


  return (
    <form className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type"
        tabIndex={0}
        onClick={onSortingListOpenHandler}
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
        {SORTING_TYPES && Object.values(SORTING_TYPES).map((item: string): JSX.Element => <SortingItem sortingValue={item} key={item} onChooseSortingTypeHandler={onChooseSortingTypeHandler}/>)}
      </ul>
    </form>
  );
}
