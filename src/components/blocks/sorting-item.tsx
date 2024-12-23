
// noinspection JSDeprecatedSymbols

export type SortingValueType = {
  sortingValue: string;
}

export function SortingItem({sortingValue}: SortingValueType): JSX.Element {
  return (
    <li className="places__option places__option--active"
      tabIndex={0}
    >{sortingValue}
    </li>
  );
}
