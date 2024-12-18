// noinspection JSDeprecatedSymbols

import {TabsItem} from '../tabs-item/tabs-item.tsx';
import {DEFAULT_CITY} from '../../../mocks/default-city.ts';

export function Tabs():JSX.Element{

  return (
    <ul className="locations__list tabs__list">
      {DEFAULT_CITY && DEFAULT_CITY.map((item):JSX.Element => <TabsItem name={item.title} key={item.lng}/>)}
    </ul>
  );
}
