// import FavoriteCard from '../favorite-card/favorite-card.tsx';
import {IMocksData, IMocksDataProps} from '../../../mocks/offers.ts';

export default function FavoritesLocationsItem({offers}: IMocksDataProps){
  const favoriteOffers: IMocksData[] = offers.filter((item) => item.isFavorite);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link"
            href="#"
          >
            {/*<span>{city}</span>*/}
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {/*{favoriteOffers.length ? favoriteOffers.map((item) => <FavoriteCard offers={offers} key={item.id}/>) : null}*/}
      </div>
    </li>
  );
}
