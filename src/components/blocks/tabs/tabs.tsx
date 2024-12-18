// noinspection JSDeprecatedSymbols

import {TabsItem} from '../tabs-item/tabs-item.tsx';
import {DEFAULT_CITY} from '../../../mocks/default-city.ts';
import {SetStateAction} from 'react';

type TabsType = {
  activeCity: string;
  onHandleActiveCityChange: (id: SetStateAction<string>) => void;
}

export function Tabs({onHandleActiveCityChange, activeCity}: TabsType):JSX.Element{

  return (
    <ul className="locations__list tabs__list">
      {DEFAULT_CITY && DEFAULT_CITY.map((item):JSX.Element => <TabsItem name={item.title} key={item.lng} isActive = {item.title === activeCity} onHandleActiveCityChange={onHandleActiveCityChange}/>)}
    </ul>
  );
}
