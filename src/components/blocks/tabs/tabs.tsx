// noinspection JSDeprecatedSymbols

import {useId} from 'react';
import TabsItem from '../tabs-item/tabs-item.tsx';
import {City} from '../../../data/cities.ts';

export default function Tabs():JSX.Element{
  const cities: string[] = Object.values(City);
  const uniqueKey:string = useId();

  return (
    <ul className="locations__list tabs__list">
      {cities && cities.map((item):JSX.Element => <TabsItem name={item} key={uniqueKey}/>)}
    </ul>
  );
}
