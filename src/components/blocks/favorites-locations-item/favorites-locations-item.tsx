

import {PlaceCard} from '../place-card/place-card.tsx';
import {CityNameTypes} from '../../../store/types.ts';
import {CARD_CLASS_NAMES} from '../../../data/card-class-names.ts';
import {OffersDataType} from '../../../store/types.ts';

type FavoritesItemType = {
  offers: OffersDataType[];
  cityName: CityNameTypes;
}


export function FavoritesLocationsItem({offers, cityName}: FavoritesItemType):JSX.Element{

  const favoriteCityOffers = offers.filter((offer) => offer.city.name === cityName);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link"
            href="#"
          >
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteCityOffers.map((item: OffersDataType):JSX.Element => <PlaceCard {...item} key={item.id} onHandleActiveOfferChange={() => {}} className={CARD_CLASS_NAMES.FAVORITES_CARD}/>)}

      </div>
    </li>
  );
}
