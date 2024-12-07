
import FavoritePlaces from '../favorite-places/favorite-places.tsx';
import {IMocksData} from '../../../mocks/offers.ts';

export type FavoritesLocationsItemPropsType = {
  cityName: string;
  offers: IMocksData[];
}

export default function FavoritesLocationsItem({cityName, offers}: FavoritesLocationsItemPropsType): JSX.Element{

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
      <FavoritePlaces offers={offers} cityName={cityName}/>
    </li>
  );
}
