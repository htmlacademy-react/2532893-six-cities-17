// noinspection JSDeprecatedSymbols

import TabsItem from '../tabs-item/tabs-item.tsx';
import {IMocksDataProps} from '../../../mocks/offers.ts';
import {createUniqueCityList} from '../../../utility/utility.ts';

export default function Tabs({offers}: IMocksDataProps):JSX.Element{
  const uniqueOffers: string[] = createUniqueCityList(offers);
  return (
    <ul className="locations__list tabs__list">
      {uniqueOffers && uniqueOffers.map((item):JSX.Element => <TabsItem name={item} key={item}/>)}
    </ul>
  );
}
