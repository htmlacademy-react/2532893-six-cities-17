// noinspection JSDeprecatedSymbols

import {SetStateAction} from 'react';

type TabsItemPropsType = {
  name: string;
  onHandleActiveCityChange: (id: SetStateAction<string>) => void;
  isActive: boolean;
}

export function TabsItem({name, onHandleActiveCityChange, isActive}: TabsItemPropsType):JSX.Element{

  return (
    <li className="locations__item"
      onClick={() => onHandleActiveCityChange(name)}
    >
      <a className={isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item '}
        href="#"
      >
        <span>{name}</span>
      </a>
    </li>
  );
}
