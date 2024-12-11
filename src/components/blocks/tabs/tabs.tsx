// noinspection JSDeprecatedSymbols

import {TabsItem} from '../tabs-item/tabs-item.tsx';
import {CitiesList} from '../../../data/cities-list.ts';

export function Tabs():JSX.Element{

  return (
    <ul className="locations__list tabs__list">
      {CitiesList && CitiesList.map((item):JSX.Element => <TabsItem name={item} key={item}/>)}
    </ul>
  );
}
