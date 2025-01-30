// noinspection JSDeprecatedSymbols

import {TabsItem} from '../tabs-item/tabs-item.tsx';
import {CITIES_LIST} from '../../../data/cities-list.ts';
import {useAppSelector} from '../../../utility/hooks.ts';
import {getActiveCity} from '../../../store/offers-process/offers-selectors.ts';

export function Tabs():JSX.Element{

  const activeCityName = useAppSelector(getActiveCity);

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST && CITIES_LIST.map((item):JSX.Element => <TabsItem key={item.lng} isActive = {item.title === activeCityName} name={item.title}/>)}
    </ul>
  );
}
