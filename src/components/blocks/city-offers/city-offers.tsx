// noinspection JSDeprecatedSymbols

import {PlaceCard} from '../place-card/place-card.tsx';
import {SortingList} from '../sorting-list/sorting-list.tsx';
import {IMocksData} from '../../../mocks/offers.ts';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {useAppSelector} from '../../../utility/hooks.ts';
import {SetStateAction} from 'react';


export type CityOfferPropsType = {
  offers: IMocksData[];
  activeOffer: string;
  onHandleActiveOfferChange(id: SetStateAction<string>): void;
}

export type CityOffersPropsType = {
  offers: IMocksData[];
  onHandleActiveOfferChange(id: SetStateAction<string>): void;
}

export function CityOffers({offers, onHandleActiveOfferChange}: CityOffersPropsType): JSX.Element{

  const activeCityName = useAppSelector((state) => state.activeCityName);
  const cityOffers: IMocksData[] = offers.filter((item: IMocksData):boolean => item.city.name === activeCityName);
  const offersCount: number = cityOffers.length;


  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offersCount} places to stay in ${activeCityName}`}</b>
      <SortingList/>
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.length && cityOffers.map((offer: IMocksData) => <PlaceCard {...offer} key={offer.id} className={CARD_CLASS_NAMES.CITIES_CARD} onHandleActiveOfferChange={onHandleActiveOfferChange}/>)}
      </div>
    </section>
  );
}
