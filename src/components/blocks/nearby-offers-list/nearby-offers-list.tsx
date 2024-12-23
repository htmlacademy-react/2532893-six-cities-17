// noinspection JSDeprecatedSymbols

// noinspection JSDeprecatedSymbols;
import {PlaceCard} from '../place-card/place-card.tsx';
import {NEARBY_OFFERS_MOCK} from '../../../mocks/nearby-offers.ts';
import {IMocksData} from '../../../mocks/offers.ts';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';


export function NearbyOffersList(): JSX.Element{
  return (
    <>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {NEARBY_OFFERS_MOCK.map((item: IMocksData):JSX.Element => <PlaceCard {...item} key={item.id} onHandleActiveOfferChange={() => {}} className={CARD_CLASS_NAMES.NEAR_PLACES_CARD}/>)}
      </div>
    </>
  );
}
