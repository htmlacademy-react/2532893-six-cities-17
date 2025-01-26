// noinspection JSDeprecatedSymbols

import {OfferInsideItem} from '../offer-inside-item/offer-inside-item.tsx';

type FeaturesType = {
  goods: string[] | undefined;
}


export function OfferInsideList({goods}: FeaturesType){

  return (
    <ul className="offer__inside-list">
      {goods && goods.map((item): JSX.Element =>
        <OfferInsideItem value={item} key={item}/>)}
    </ul>
  );
}
