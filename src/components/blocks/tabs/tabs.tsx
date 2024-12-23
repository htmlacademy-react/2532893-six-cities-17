// noinspection JSDeprecatedSymbols

import {TabsItem} from '../tabs-item/tabs-item.tsx';
import {DEFAULT_CITY} from '../../../mocks/default-city.ts';
import {useAppSelector} from '../../../utility/hooks.ts';

export function Tabs():JSX.Element{

  const activeCityName = useAppSelector((state) => state.activeCityName);

  return (
    <ul className="locations__list tabs__list">
      {DEFAULT_CITY && DEFAULT_CITY.map((item):JSX.Element => <TabsItem key={item.lng} isActive = {item.title === activeCityName} name={item.title}/>)}
    </ul>
  );
}
