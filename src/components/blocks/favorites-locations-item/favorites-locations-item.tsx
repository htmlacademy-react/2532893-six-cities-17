import FavoriteCard from '../favorite-card/favorite-card.tsx';
import {CityNameTypes, IMocksData} from '../../../mocks/offers.ts';

type FavoritesItemType = {
  offers: IMocksData[];
  cityName: CityNameTypes;
}

// noinspection JSDeprecatedSymbols
export default function FavoritesLocationsItem({offers, cityName}: FavoritesItemType):JSX.Element{

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
        {favoriteCityOffers.map((item) => <FavoriteCard {...item} key={item.id}/>)}

      </div>
    </li>
  );
}
