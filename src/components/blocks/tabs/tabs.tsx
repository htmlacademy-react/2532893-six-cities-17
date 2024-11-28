// noinspection JSDeprecatedSymbols

import TabsItem from '../tabs-item/tabs-item.tsx';
import {City} from '../../../data/cities.ts';

export default function Tabs():JSX.Element{
  const cities: string[] = (Object.keys(City)).map((city: string):string => city[0].toUpperCase() + city.split('').slice(1).join('').toLowerCase());

  return (
    <ul className="locations__list tabs__list">
      {cities && cities.map((item):JSX.Element => <TabsItem name={item} key={item}/>)}
    </ul>
  );
}
