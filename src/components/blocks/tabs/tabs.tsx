// noinspection JSDeprecatedSymbols

import {TabsItem} from '../tabs-item/tabs-item.tsx';
import {DEFAULT_CITY} from '../../../mocks/default-city.ts';

type TabsType = {
  activeCity: string;
}

export function Tabs({activeCity}: TabsType):JSX.Element{

  return (
    <ul className="locations__list tabs__list">
      {DEFAULT_CITY && DEFAULT_CITY.map((item):JSX.Element => <TabsItem name={item.title} key={item.lng} isActive = {item.title === activeCity}/>)}
    </ul>
  );
}
