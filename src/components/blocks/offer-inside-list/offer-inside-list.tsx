// noinspection JSDeprecatedSymbols

import {OfferInsideItem} from '../offer-inside-item/offer-inside-item.tsx';
import {OFFER_INSIDE_FEATURES} from '../../../data/offer-inside-features.ts';

export function OfferInsideList(){

  return (
    <ul className="offer__inside-list">
      {OFFER_INSIDE_FEATURES.length && OFFER_INSIDE_FEATURES.map((item: string): JSX.Element =>
        <OfferInsideItem value={item} key={item}/>)}
    </ul>
  );
}
