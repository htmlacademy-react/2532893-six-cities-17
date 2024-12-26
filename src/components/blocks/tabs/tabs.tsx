// noinspection JSDeprecatedSymbols

import {TabsItem} from '../tabs-item/tabs-item.tsx';
import {CITIES_LIST} from '../../../mocks/cities-list.ts';
import {useAppSelector} from '../../../utility/hooks.ts';

export function Tabs():JSX.Element{

  const activeCityName = useAppSelector((state) => state.activeCityName);

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LIST && CITIES_LIST.map((item):JSX.Element => <TabsItem key={item.lng} isActive = {item.title === activeCityName} name={item.title}/>)}
    </ul>
  );
}
