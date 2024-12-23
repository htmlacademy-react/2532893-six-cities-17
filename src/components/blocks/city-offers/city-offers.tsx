// noinspection JSDeprecatedSymbols

import {PlaceCard} from '../place-card/place-card.tsx';
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
      <form className="places__sorting"
        action="#"
        method="get"
      >
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type"
          tabIndex={0}
        >
                  Popular
          <svg className="places__sorting-arrow"
            width="7"
            height="4"
          >
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active"
            tabIndex={0}
          >Popular
          </li>
          <li className="places__option"
            tabIndex={0}
          >Price: low to high
          </li>
          <li className="places__option"
            tabIndex={0}
          >Price: high to low
          </li>
          <li className="places__option"
            tabIndex={0}
          >Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {cityOffers.length && cityOffers.map((offer: IMocksData) => <PlaceCard {...offer} key={offer.id} className={CARD_CLASS_NAMES.CITIES_CARD} onHandleActiveOfferChange={onHandleActiveOfferChange}/>)}
      </div>
    </section>
  );
}
