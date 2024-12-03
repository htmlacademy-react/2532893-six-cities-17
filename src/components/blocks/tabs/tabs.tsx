// noinspection JSDeprecatedSymbols

import TabsItem from '../tabs-item/tabs-item.tsx';

export default function Tabs(cities: string[]):JSX.Element{

  return (
    <ul className="locations__list tabs__list">
      {cities && cities.map((item):JSX.Element => <TabsItem name={item} key={item}/>)}
    </ul>
  );
}
