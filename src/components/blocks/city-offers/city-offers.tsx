// noinspection JSDeprecatedSymbols

import {PlaceCard} from '../place-card/place-card.tsx';
import {EventType, SortingList} from '../sorting-list/sorting-list.tsx';
import {IMocksData} from '../../../mocks/offers.ts';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {useAppSelector} from '../../../utility/hooks.ts';
import {SetStateAction, useState} from 'react';
import {SORTING_TYPES} from '../../../data/sorting-types.ts';
import {getSortedOffersList} from '../../../utility/utility.ts';


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

  const [isOpened, setIsOpened] = useState(false);
  const openSortingHandler = (): void => isOpened ? setIsOpened(false) : setIsOpened(true);

  const [sortingType, setSortingType] = useState(SORTING_TYPES.POPULAR);
  const chooseSortingTypeHandler = (evt: EventType): void => {
    if (evt){
      setSortingType(evt.target.innerText ?? SORTING_TYPES.POPULAR);
      setIsOpened(!isOpened);
    }
  };
  const sortedOffers: IMocksData[] = getSortedOffersList(cityOffers, sortingType);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offersCount} places to stay in ${activeCityName}`}</b>
      <SortingList sortingType={sortingType} isOpened={isOpened} onSortingListOpenHandler={openSortingHandler} onChooseSortingTypeHandler={chooseSortingTypeHandler}/>
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.length && sortedOffers.map((offer: IMocksData) => <PlaceCard {...offer} key={offer.id} className={CARD_CLASS_NAMES.CITIES_CARD} onHandleActiveOfferChange={onHandleActiveOfferChange}/>)}

      </div>
    </section>
  );
}


