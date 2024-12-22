// noinspection JSDeprecatedSymbols

import {PlaceCard} from '../place-card/place-card.tsx';
import {IMocksData} from '../../../mocks/offers.ts';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';

export type CityOfferPropsType = {
  offers: IMocksData[];
  activeOffer: string;
  activeCity: string;
}

export type CityOffersPropsType = {
  offers: IMocksData[];
  activeCity: string;
}

export function CityOffers({offers, activeCity}: CityOffersPropsType): JSX.Element{

  const cityOffers: IMocksData[] = offers.filter((item: IMocksData):boolean => item.city.name === activeCity);
  const offersCount: number = cityOffers.length;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offersCount} places to stay in ${activeCity}`}</b>
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
        {cityOffers.length && cityOffers.map((offer: IMocksData) => <PlaceCard {...offer} key={offer.id} className={CARD_CLASS_NAMES.CITIES_CARD}/>)}
      </div>
    </section>
  );
}
