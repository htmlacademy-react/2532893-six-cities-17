

import {PlaceCard} from '../place-card/place-card.tsx';
import {SortingList} from '../sorting-list/sorting-list.tsx';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {useAppSelector} from '../../../utility/hooks.ts';
import {SetStateAction, useState} from 'react';
import {SORTING_TYPES} from '../../../data/sorting-types.ts';
import {getSortedOffersList} from '../../../utility/utility.ts';
import {getActiveCity} from '../../../store/offers-process/offers-selectors.ts';
import {OffersDataType} from '../../../store/types.ts';


export type CityOfferPropsType = {
  offers: OffersDataType[];
  activeOffer: string;
  onHandleActiveOfferChange(id: SetStateAction<string>): void;
}

export type CityOffersPropsType = {
  offers: OffersDataType[];
  onHandleActiveOfferChange(id: SetStateAction<string>): void;
}

export function CityOffers({offers, onHandleActiveOfferChange}: CityOffersPropsType): JSX.Element {

  const activeCityName = useAppSelector(getActiveCity);
  const cityOffers: OffersDataType[] = offers.filter((item: OffersDataType): boolean => item.city.name === activeCityName);
  const offersCount: number = cityOffers.length;

  const [sortingType, setSortingType] = useState(SORTING_TYPES.POPULAR);
  const chooseSortingTypeHandler = (item: string): void => {
    setSortingType(item ?? SORTING_TYPES.POPULAR);

  };
  const sortedOffers: OffersDataType[] = getSortedOffersList(cityOffers, sortingType);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offersCount} places to stay in ${activeCityName}`}</b>
      <SortingList sortingType={sortingType}
        onChooseSortingTypeHandler={chooseSortingTypeHandler}
      />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.length && sortedOffers.map((offer: OffersDataType) => (
          <PlaceCard {...offer} key={offer.id}
            className={CARD_CLASS_NAMES.CITIES_CARD}
            onHandleActiveOfferChange={onHandleActiveOfferChange}
          />))}

      </div>
    </section>
  );
}


