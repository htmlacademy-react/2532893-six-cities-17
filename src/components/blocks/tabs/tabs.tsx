// noinspection JSDeprecatedSymbols

import TabsItem from '../tabs-item/tabs-item.tsx';
import {City} from '../../../data/cities.ts';
import {getCapitalizeWord} from '../../../utility/utility.ts';

export default function Tabs():JSX.Element{
  const cities: string[] = (Object.keys(City)).map((city: string):string => getCapitalizeWord(city));

  return (
    <ul className="locations__list tabs__list">
      {cities && cities.map((item):JSX.Element => <TabsItem name={item} key={item}/>)}
    </ul>
  );
}
