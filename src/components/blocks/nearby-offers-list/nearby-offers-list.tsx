// noinspection JSDeprecatedSymbols

// noinspection JSDeprecatedSymbols;
import {PlaceCard} from '../place-card/place-card.tsx';
import {NEARBY_OFFERS_MOCK} from '../../../mocks/nearby-offers.ts';
import {IMocksData} from '../../../mocks/offers.ts';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {SetStateAction} from 'react';

type onHandleActiveOfferChangeType = {
  onHandleActiveOfferChange:(id: SetStateAction<string>) => void;
}

export function NearbyOffersList({onHandleActiveOfferChange}:onHandleActiveOfferChangeType): JSX.Element{
  return (
    <>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {NEARBY_OFFERS_MOCK.map((item: IMocksData):JSX.Element => <PlaceCard {...item} key={item.id} className={CARD_CLASS_NAMES.FAVORITES_CARD} onHandleActiveOfferChange={onHandleActiveOfferChange}/>)}
      </div>
    </>
  );
}
