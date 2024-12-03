import FavoriteCard from '../favorite-card/favorite-card.tsx';
import {IMocksData, IMocksDataProps} from '../../../mocks/offers.ts';
import {createUniqueCityList} from '../../../utility/utility.ts';


export default function FavoritesLocationsItem({offers}: IMocksDataProps): JSX.Element{
  const favoriteOffers: IMocksData[] = offers.filter((item) => item.isFavorite);
  const uniqueOffers: string[] = createUniqueCityList(favoriteOffers);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link"
            href="#"
          >
            <span>{offers[0].city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {uniqueOffers.length ? uniqueOffers.map((item) => <FavoriteCard offers={offers} key={item}/>) : null}
      </div>
    </li>
  );
}
