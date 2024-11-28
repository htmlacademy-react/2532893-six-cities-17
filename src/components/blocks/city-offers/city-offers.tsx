// noinspection JSDeprecatedSymbols

import {OFFERS_SHOW_COUNT} from '../../../data/magic-numbers.ts';
import PlaceCard from '../place-card/place-card.tsx';
import {useId} from 'react';
import {mocksData} from '../../../data/mocks.ts';
import {PlaceCardPropsType} from '../place-card/place-card.tsx';

type MainScreenProps = {
  offersCount: number;
}

export type CityOffersPropsType = MainScreenProps & PlaceCardPropsType;


export default function   CityOffers({offersCount, isPremium, price, previewImage}: CityOffersPropsType):JSX.Element{
  const uniqueKey = useId();
  console.log(mocksData);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offersCount} places to stay in Amsterdam</b>
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
        {mocksData.map((): JSX.Element => <PlaceCard key={uniqueKey} isPremium={isPremium} price={price} previewImage={previewImage}/>).slice(0, OFFERS_SHOW_COUNT)}
      </div>
    </section>
  );
}
