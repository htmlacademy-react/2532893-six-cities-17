
// noinspection JSDeprecatedSymbols

import {EventType} from '../sorting-list/sorting-list.tsx';

export type SortingValueType = {
  sortingValue: string;
  onChooseSortingTypeHandler: (evt: EventType) => void;
}

export function SortingItem({sortingValue, onChooseSortingTypeHandler}: SortingValueType): JSX.Element {
  return (
    <li className="places__option places__option--active"
      tabIndex={0}
      onClick={(evt): void => onChooseSortingTypeHandler(evt)}
    >{sortingValue}
    </li>
  );
}
