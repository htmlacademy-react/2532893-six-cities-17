// noinspection JSDeprecatedSymbols

// noinspection JSDeprecatedSymbols;
import {PlaceCard} from '../place-card/place-card.tsx';
import {IMocksData} from '../../../mocks/offers.ts';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../utility/hooks.ts';
import {useEffect} from 'react';
import {fetchNearbyOffersAction} from '../../../store/api-actions.ts';

const NEARBY_OFFERS_COUNT = 3;

export function NearbyOffersList(): JSX.Element{
  const {id: offerId} = useParams();
  const dispatch = useAppDispatch();
  const nearbyOffersList: IMocksData[] | null = useAppSelector((state) => state.nearbyOffers);
  useEffect(() => {
    if(offerId){
      dispatch(fetchNearbyOffersAction(offerId));
    }
  }, [dispatch, offerId]);
  return (
    <>
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffersList && nearbyOffersList.map((item: IMocksData):JSX.Element => <PlaceCard {...item} key={item.id} onHandleActiveOfferChange={() => {}} className={CARD_CLASS_NAMES.NEAR_PLACES_CARD}/>).slice(0, NEARBY_OFFERS_COUNT)}
      </div>
    </>
  );
}
